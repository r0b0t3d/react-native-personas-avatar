import React, { useEffect, forwardRef, useImperativeHandle, Ref, useState, useMemo, useCallback } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
// @ts-ignore
import Svg from 'react-native-svg';
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
import { random, combineCharacters, parseCharacters, DEFAULT_CHARACTERS } from './utils';
import { eyeses } from './constants/eyes';
import mouths from './constants/mouth';
import noses from './constants/nose';
import { Characters } from './types';

type Props = {
  style: ViewStyle;
  characters?: string;
  onNewCharacters?: (characters: string) => void;
};

type Methods = {
  randomize: () => void;
};

function PersonasAvatar({ style, characters, onNewCharacters }: Props, ref: Ref<Methods>) {
  const [internalCharacters, setCharacters] = useState<Characters>(DEFAULT_CHARACTERS);

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
  } = internalCharacters;

  useImperativeHandle(ref, () => ({
    randomize: randomAvatar,
  }));

  useEffect(() => {
    if (!characters) {
      randomAvatar();
    } else {
      const components = parseCharacters(characters);
      setCharacters(components);
    }
  }, [characters]);

  const randomAvatar = useCallback(() => {
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
    setCharacters(randomCharacters);
  }, [onNewCharacters]);

  const containerStyle: StyleProp<ViewStyle> = useMemo(() => ({
    width: 200,
    height: 200,
    borderRadius: 1000,
    overflow: 'hidden',
    backgroundColor: backgroundColors[backgroundColor],
  }), [backgroundColor]);

  if (!internalCharacters) {
    return null;
  }

  return (
    <View
      style={[
        containerStyle,
        style,
      ]}
    >
      <Svg width="100%" height="100%" viewBox="0 0 64 64">
        <Body value={body} color={bodyColors[bodyColor]} />
        <Skin color={skinColors[skinColor]} />
        <Hair value={hair} color={hairColors[hairColor]} />
        <Eyes value={eyes} />
        <Mouth value={mouth} />
        <FacialHair value={facialHair} color={facialHairColors[facialHairColor]} />
        <Nose value={nose} color={skinColors[skinColor]} />
      </Svg>
    </View>
  );
}

export default forwardRef(PersonasAvatar);
