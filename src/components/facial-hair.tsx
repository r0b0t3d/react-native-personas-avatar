import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';

export default function FacialHair({ value, color }) {
  function renderFacialHair() {
    switch (value) {
      case 'facialHair1':
        return <FacialHair1 color={color} />;
      case 'facialHair2':
        return <FacialHair2 color={color} />;
      case 'facialHair3':
        return <FacialHair3 color={color} />;
      case 'facialHair4':
        return <FacialHair4 color={color} />;
      case 'facialHair5':
        return <FacialHair5 color={color} />;
      case 'facialHair6':
        return <None />;
      default:
        console.warn('Missing facial hair', value);
        return null;
    }
  }

  return <View style={StyleSheet.absoluteFill}>{renderFacialHair()}</View>;
}

function None() {
  return null;
}

function FacialHair1({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path
        d="M28.033 36.527C29.444 36.176 30.766 36 32 36s2.556.176 3.967.527A4 4 0 0 1 39 40.408v4.475a3 3 0 0 1-1.513 2.606C35.72 48.496 33.944 49 32.157 49c-1.807 0-3.666-.514-5.578-1.542A3 3 0 0 1 25 44.816v-4.408a4 4 0 0 1 3.033-3.881zm.019 1.492a2 2 0 0 0-1.462 1.926v2.485a3 3 0 0 0 1.846 2.769c1.282.534 2.504.801 3.668.801 1.15 0 2.338-.26 3.567-.781a3 3 0 0 0 1.829-2.762v-2.5a2 2 0 0 0-1.47-1.93 15.16 15.16 0 0 0-4.03-.565c-1.304 0-2.62.185-3.948.557z"
        fill={color}
      />
    </Svg>
  );
}

function FacialHair2({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path
        d="M46 29v4c0 7.732-6.268 14-14 14s-14-6.268-14-14v-4c0-.1.001-.2.003-.298C20.048 31.642 22.535 35.669 26 37c2-1.003 4-1.504 6-1.504s4 .501 6 1.504c3.465-1.33 5.952-5.359 7.997-8.298.002.099.003.198.003.298z"
        fill={color}
        opacity={0.2}
      />
    </Svg>
  );
}

function FacialHair3({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path d="M30 43.5h4l-.684 2.051a1.387 1.387 0 0 1-2.632 0z" fill={color} />
    </Svg>
  );
}

function FacialHair4({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path d="M29 35h6a5 5 0 0 1 5 5H24a5 5 0 0 1 5-5z" fill={color} />
    </Svg>
  );
}

function FacialHair5({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path
        d="M32.016 38.05a2.718 2.718 0 01-3.182 1.587l-5.082-1.3a1 1 0 01-.075-1.916l5.235-1.786a2.504 2.504 0 013.104 1.37 2.504 2.504 0 013.105-1.37l5.235 1.786a1 1 0 01-.075 1.915l-5.082 1.3a2.717 2.717 0 01-3.183-1.587z"
        fill={color}
      />
    </Svg>
  );
}
