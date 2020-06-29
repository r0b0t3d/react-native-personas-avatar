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
import { backgroundColors } from './assets/background';
import { hairColors } from './assets/hair';

type Props = {
  style: ViewStyle
}

function PersonasAvatar({ style }: Props) {
  const [state, dispatch] = useContext(AvatarContext);

  const { skinColor, hair, hairColor, body, facialHair, facialHairColor, eyes, mouth, nose, backgroundColor } = state;

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
      <Skin color={skinColor} />
      <Hair value={hair} color={hairColor} />
      <Body value={body} />
      <FacialHair value={facialHair} />
      <Eyes value={eyes} />
      <Mouth value={mouth} />
      <Nose value={nose} />
    </View>
  );
}

export default function() {
  return (
    <AvatarController>
      <PersonasAvatar />
    </AvatarController>
  );
}
