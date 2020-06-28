import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import skins from '../assets/skin';

export default function Skin({ value }) {
  return (
    <View style={{ flex: 1 }}>
      <WithLocalSvg width="100%" height="100%" asset={skins[value]} />
    </View>
  );
}
