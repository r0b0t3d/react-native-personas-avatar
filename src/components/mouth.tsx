import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import mouths from '../assets/mouth';

export default function Mouth({ value }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <WithLocalSvg width="100%" height="100%" asset={mouths[value]} />
    </View>
  );
}
