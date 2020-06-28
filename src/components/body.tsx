import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import bodies from '../assets/body';

export default function Body({ value }) {
  return (
    <View style={{ ...StyleSheet.absoluteFillObject }}>
      <WithLocalSvg width="100%" height="100%" asset={bodies[value]} />
    </View>
  );
}
