import React from 'react';
import { View } from 'react-native';
import Skin from './components/skin';
import Body from './components/body';
import FacialHair from './components/facial-hair';
import Eyes from './components/eyes';
import Hair from './components/hair';
import Mouth from './components/mouth';
import Nose from './components/nose';

export default function PersonasAvatar() {
  return (
    <View style={{ width: 500, height: 500 }}>
      <Skin />
      <Hair />
      <Body />
      <FacialHair />
      <Eyes />
      <Mouth />
      <Nose />
    </View>
  );
}
