import React, { useContext, useEffect } from 'react';
import { View, ViewStyle } from 'react-native';
import Skin from './components/skin';
import Body from './components/body';
import FacialHair from './components/facial-hair';
import Eyes from './components/eyes';
import Hair from './components/hair';
import Mouth from './components/mouth';
import Nose from './components/nose';
import { AvatarController, AvatarContext } from './context';
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

function PersonasAvatar({ style, characters, onNewCharacters }: Props) {
  const [state, dispatch] = useContext(AvatarContext);

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

  useEffect(() => {
    if (!characters) {
      randomAvatar();
    } else {
      const components = parseCharacters(characters);      
      dispatch({ type: 'updateCharacters', payload: components });
    }
  }, [characters]);

  function randomAvatar() {
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
    dispatch({ type: 'updateCharacters', payload: randomCharacters });
  }
  
  return (
    <View
      style={[
        {
          width: 200,
          height: 200,
          borderRadius: 1000,
          overflow: 'hidden',
          backgroundColor: backgroundColors[backgroundColor],
        },
        style,
      ]}
    >
      <Body value={body} color={bodyColors[bodyColor]} />
      <Skin color={skinColors[skinColor]} />
      <Hair value={hair} color={hairColors[hairColor]} />
      <Eyes value={eyes} />
      <Mouth value={mouth} />
      <FacialHair value={facialHair} color={facialHairColors[facialHairColor]} />
      <Nose value={nose} color={skinColors[skinColor]} />
    </View>
  );
}

export default function(props: Props) {
  return (
    <AvatarController>
      <PersonasAvatar {...props} />
    </AvatarController>
  );
}
