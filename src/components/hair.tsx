import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import hairs from '../assets/hair';

export default function Hair({ value }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <WithLocalSvg width="100%" height="100%" asset={hairs[value]} />
    </View>
  );
}
