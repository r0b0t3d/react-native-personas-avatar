import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';

export default function BodyWrapper({ value, color }) {
  return (
    <View style={StyleSheet.absoluteFill}>
      <Body value={value} color={color} />
    </View>
  );
}

function Body({ value, color }) {
  switch (value) {
    case 'body1':
      return <Body1 color={color} />;
    case 'body2':
      return <Body2 color={color} />;
    case 'body3':
      return <Body3 color={color} />;
    case 'body4':
      return <Body4 color={color} />;
    default:
      return <Body1 color={color} />;
  }
}

function Body1({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path fill={color} d="M27 49v3a5 5 0 0010 0v-3l6.647 2.045A9 9 0 0150 59.647V64H14v-4.353a9 9 0 016.353-8.602z" />
    </Svg>
  );
}

function Body2({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path
        fill={color}
        d="M27 51v.47a5 5 0 0010 0V51c7.063 1.523 12.93 6.735 16 13H11c3.07-6.265 8.937-11.477 16-13z"
      />
    </Svg>
  );
}

function Body3({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path fill={color} d="M27 49v3a5 5 0 0010 0v-3l6.647 2.045A9 9 0 0150 59.647V64H14v-4.353a9 9 0 016.353-8.602z" />
    </Svg>
  );
}

function Body4({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path fill={color} d="M27 49v3a5 5 0 0010 0v-3l6.647 2.045A9 9 0 0150 59.647V64H14v-4.353a9 9 0 016.353-8.602z" />
      <Path
        d="M42 50.538l1.647.507A8.99 8.99 0 0146 52.163V64h-4zM38 64h-4v-5.29a7.017 7.017 0 004-3.102zm-8 0h-4v-8.392a7.017 7.017 0 004 3.102zm-8 0h-4V52.163a8.99 8.99 0 012.353-1.118L22 50.538z"
        fill="#000"
        opacity={0.2}
      />
      <Path
        fill="#fff"
        d="M47.068 53a9.013 9.013 0 012.535 4H36.899a6.982 6.982 0 002.03-4zM50 61v3H14v-3zm-35.603-4a9.013 9.013 0 012.535-4h8.139a6.982 6.982 0 002.03 4z"
        opacity={0.18}
      />
    </Svg>
  );
}
