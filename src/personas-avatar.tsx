import React, { useEffect, forwardRef, useImperativeHandle, Ref, useState } from 'react';
import { View, ViewStyle } from 'react-native';
import Skin from './components/skin';
import Body from './components/body';
import FacialHair from './components/facial-hair';
import Eyes from './components/eyes';
import Hair from './components/hair';
import Mouth from './components/mouth';
import Nose from './components/nose';
import { backgroundColors } from './constants/background';
import { facialHairColors, facialHairs } from './constants/facial-hair';
import { hairColors, hairs } from './constants/hair';
import { bodyColors, bodies } from './constants/body';
import { skinColors } from './constants/skin';
import { random, combineCharacters, parseCharacters } from './utils';
import { eyeses } from './constants/eyes';
import mouths from './constants/mouth';
import noses from './constants/nose';

type Props = {
  style: ViewStyle;
  characters?: string;
  onNewCharacters?: (characters: string) => void;
};

type Methods = {
  randomize: () => void;
};

function PersonasAvatar({ style, characters, onNewCharacters }: Props, ref: Ref<Methods>) {
  const [state, setState] = useState<any>({});

  const {
    skinColor,
    hair,
    hairColor,
    body,
    bodyColor,
    facialHair,
    facialHairColor,
    eyes,
    mouth,
    nose,
    backgroundColor,
  } = state;

  useImperativeHandle(ref, () => ({
    randomize: randomAvatar,
  }));

  useEffect(() => {
    if (!characters) {
      randomAvatar();
    } else {
      const components = parseCharacters(characters);
      setState(components);
    }
  }, [characters]);

  function randomAvatar() {
    debugger
    const randomCharacters = {
      skinColor: random(Object.keys(skinColors)),
      hair: random(Object.keys(hairs)),
      hairColor: random(Object.keys(hairColors)),
      facialHair: random(Object.keys(facialHairs)),
      facialHairColor: random(Object.keys(facialHairColors)),
      body: random(Object.keys(bodies)),
      bodyColor: random(Object.keys(bodyColors)),
      eyes: random(Object.keys(eyeses)),
      mouth: random(Object.keys(mouths)),
      nose: random(Object.keys(noses)),
      backgroundColor: random(Object.keys(backgroundColors)),
    };
    const characters = combineCharacters(randomCharacters);
    if (onNewCharacters) {
      onNewCharacters(characters);
    }
    setState(randomCharacters);
  }

  return (
    <View
      style={[
        {
          width: 200,
          height: 200,
          borderRadius: 1000,
          overflow: 'hidden',
          backgroundColor: backgroundColors[backgroundColor] || backgroundColors.bgc1,
        },
        style,
      ]}
    >
      <Body value={body} color={bodyColors[bodyColor]} />
      <Skin color={skinColors[skinColor] || skinColors.sc1} />
      <Hair value={hair} color={hairColors[hairColor] || hairColors.hc1} />
      <Eyes value={eyes} />
      <Mouth value={mouth} />
      <FacialHair value={facialHair} color={facialHairColors[facialHairColor] || facialHairColors.fhc1} />
      <Nose value={nose} color={skinColors[skinColor]} />
    </View>
  );
}

export default forwardRef(PersonasAvatar);
