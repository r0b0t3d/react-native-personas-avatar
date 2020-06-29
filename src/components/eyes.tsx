import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import { eyeses } from '../assets/eyes';

export default function Eyes({ value }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <WithLocalSvg width="100%" height="100%" asset={eyeses[value]} />
    </View>
  );
}
