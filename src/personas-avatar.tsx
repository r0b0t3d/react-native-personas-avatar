import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import Skin from './components/skin';
import Body from './components/body';
import FacialHair from './components/facial-hair';
import Eyes from './components/eyes';
import Hair from './components/hair';
import Mouth from './components/mouth';
import Nose from './components/nose';
import { AvatarController, AvatarContext } from './context';

function PersonasAvatar() {
  const [state, dispatch] = useContext(AvatarContext);

  const { skin, hair, body, facialHair, eyes, mouth, nose } = state;
  console.warn('hehehe', skin);

  useEffect(() => {
    randomAvatar();
  }, []);

  function randomAvatar() {
    dispatch({ type: 'random' });
  }

  return (
    <View style={{ width: 500, height: 500 }}>
      <Skin value={skin} />
      <Hair value={hair} />
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
