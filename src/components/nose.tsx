import React from 'react';
import { View, StyleSheet } from 'react-native';
// @ts-ignore
import Svg, { Path } from 'react-native-svg';

export default function Nose({ value, color }) {
  function renderNose() {
    switch (value) {
      case 'nose1':
        return <Nose1 color={color} />;
      case 'nose2':
        return <Nose2 color={color} />;
      case 'nose3':
        return <Nose3 color={color} />;
      default:
        console.warn('Missing nose', value);
        return null;
    }
  }
  return <View style={StyleSheet.absoluteFill}>{renderNose()}</View>;
}

function Nose1({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path
        fill={color}
        d="M28.25 34a.75.75 0 01.75-.75h6a.75.75 0 01.75.75c0 1.664-1.586 3.25-3.75 3.25-2.164 0-3.75-1.586-3.75-3.25z"
      />
      <Path
        style={{
          mixBlendMode: 'overlay',
        }}
        fill="#fff"
        d="M35 33.25a.75.75 0 00-.75.75c0 .836-.914 1.75-2.25 1.75s-2.25-.914-2.25-1.75a.75.75 0 00-.75-.75v-.002h6z"
        opacity={0.36}
      />
    </Svg>
  );
}

function Nose2({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path
        fill={color}
        d="M29.288 35.237a.75.75 0 01.475-.949 1.09 1.09 0 01.307-.028h3.85c.133 0 .263.01.317.028a.75.75 0 01.475.95c-.434 1.3-1.383 2.012-2.712 2.012s-2.278-.712-2.712-2.013z"
      />
      <Path
        style={{
          mixBlendMode: 'overlay',
        }}
        fill="#fff"
        d="M33.945 34.255c-.3 0-.558.212-.657.508-.233.699-.617.987-1.288.987s-1.055-.288-1.288-.987c-.1-.296-.367-.503-.657-.503z"
        opacity={0.36}
      />
    </Svg>
  );
}
function Nose3({ color }) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 64 64">
      <Path
        fill={color}
        d="M29.18 33.758h5.632c.335 0 .593.045.776.276.037.056.083.139.099.182.208.574.284 1.252.229 2.033-.223 1.613-1.589 2.501-3.916 2.501-2.321 0-3.686-.884-3.914-2.488-.054-.814.027-1.509.242-2.084.012-.032.035-.069.066-.12.18-.247.454-.3.785-.3z"
      />
      <Path
        style={{
          mixBlendMode: 'overlay',
        }}
        fill="#fff"
        d="M34.794 33.779a.75.75 0 00-.515.927c.523 1.83-.089 2.544-2.279 2.544s-2.802-.713-2.279-2.544a.75.75 0 00-.515-.927c-.069-.02-.037-.019-.105-.019h5.773c-.053 0-.08.006-.08.019z"
        opacity={0.36}
      />
      <Path
        fill="#000"
        d="M28.394 34.057a.748.748 0 00-.115.237c-.212.741-.274 1.4-.193 1.968a20.878 20.878 0 00-.875 1.48 20.24 20.24 0 00-1.238 2.92.5.5 0 01-.946-.324c.394-1.15.827-2.172 1.3-3.065.472-.89 1.137-1.934 1.996-3.135a.502.502 0 01.071-.08zm7.522 2.192c.078-.565.015-1.22-.195-1.955a.748.748 0 00-.133-.26.5.5 0 01.1.104c.858 1.201 1.522 2.245 1.994 3.135.474.893.907 1.914 1.301 3.065a.5.5 0 11-.946.324 20.24 20.24 0 00-1.238-2.92c-.24-.452-.534-.95-.883-1.493z"
        opacity={0.119}
      />
    </Svg>
  );
}
