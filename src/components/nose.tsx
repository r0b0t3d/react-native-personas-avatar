import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import noses from '../assets/nose';

export default function Nose() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <WithLocalSvg width="100%" height="100%" asset={noses.smallround} />
    </View>
  );
}
