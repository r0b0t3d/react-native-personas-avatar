import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import facialHairs from '../assets/facial-hair';

export default function FacialHair() {
  return (
    <View style={StyleSheet.absoluteFill}>
      <WithLocalSvg width="100%" height="100%" asset={facialHairs.beardmustacheBlack} />
    </View>
  );
}
