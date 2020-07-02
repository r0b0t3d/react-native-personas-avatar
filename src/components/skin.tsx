import React from 'react';
// @ts-ignore
import { Path } from 'react-native-svg';

export default function Skin({ color  }) {
  return (
    <>
        <Path
          d="M37 46.08V52a5 5 0 01-10 0v-5.92A14.036 14.036 0 0118.58 37h-.08a4.5 4.5 0 01-.5-8.973V27c0-7.732 6.268-14 14-14s14 6.268 14 14v1.027A4.5 4.5 0 0145.42 37 14.036 14.036 0 0137 46.081z"
          fill={color}
        />
        <Path
          style={{
            mixBlendMode: 'overlay',
          }}
          d="M32 13c7.732 0 14 6.268 14 14v6c0 7.732-6.268 14-14 14s-14-6.268-14-14v-6c0-7.732 6.268-14 14-14z"
          fill="#FFF"
          fillOpacity={0.3}
        />
    </>
  );
}
