import React from 'react';
import { View } from 'react-native';
// @ts-ignore
import Svg, { Path, G } from 'react-native-svg';
import { skinColors } from '../assets/skin';

const skinHeadPath =
  'm23 33.0807424v5.9192576c0 2.7614237-2.2385763 5-5 5s-5-2.2385763-5-5v-5.9192576c-4.03776277-1.5443264-7.17755008-4.9044416-8.42044769-9.0814314-.02646239.0004587-.05298045.000689-.07955231.000689-2.48528137 0-4.5-2.0147186-4.5-4.5 0-2.3162768 1.75002477-4.2238135 4-4.4725356v-1.0274644c0-7.7319865 6.2680135-14 14-14s14 6.2680135 14 14v1.0274644c2.2499752.2487221 4 2.1562588 4 4.4725356 0 2.4852814-2.0147186 4.5-4.5 4.5-.0265719 0-.0530899-.0002303-.0795523-.000689-1.2428976 4.1769898-4.3826849 7.537105-8.4204477 9.0814314z';
const facePath =
  'm18 0c7.7319865 0 14 6.2680135 14 14v6c0 7.7319865-6.2680135 14-14 14s-14-6.2680135-14-14v-6c0-7.7319865 6.2680135-14 14-14z';
export default function Skin({ color }) { 
  return (
    <View style={{ flex: 1 }}>
      <Svg width="100%" height="100%" viewBox="0 0 64 64">
        <G transform="translate(14 13)">
          <Path d={skinHeadPath} fill={skinColors[color]} />
          <Path d={facePath} fill="#fff" fillOpacity={0.2} />
        </G>
      </Svg>
    </View>
  );
}
