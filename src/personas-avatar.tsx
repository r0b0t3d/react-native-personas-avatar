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
import { facialHairColors } from './constants/facial-hair';
import { hairColors } from './constants/hair';
import { bodyColors } from './constants/body';
import { skinColors } from './constants/skin';

type Props = {
  style: ViewStyle
}

function PersonasAvatar({ style }: Props) {
  const [state, dispatch] = useContext(AvatarContext);

  const { skinColor, hair, hairColor, body, bodyColor, facialHair, facialHairColor, eyes, mouth, nose, backgroundColor } = state;

  useEffect(() => {
    randomAvatar();
  }, []);

  function randomAvatar() {
    dispatch({ type: 'random' });
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

export default function({ props }) {
  return (
    <AvatarController>
      <PersonasAvatar />
    </AvatarController>
  );
}
