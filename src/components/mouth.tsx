import React from 'react';
// @ts-ignore
import { G, Path, Circle, Ellipse } from 'react-native-svg';

export default function Mouth({ value }) {
  switch (value) {
    case 'mouth1':
      return <Mouth1 />;
    case 'mouth2':
      return <Mouth2 />;
    case 'mouth3':
      return <Mouth3 />;
    case 'mouth4':
      return <Mouth4 />;
    case 'mouth5':
      return <Mouth5 />;
    case 'mouth6':
      return <Mouth6 />;
    case 'mouth7':
      return <Mouth7 />;
    default:
      return <Mouth1 />;
  }
}

function Mouth1() {
  return (
    <Path
      fill="#1b0640"
      d="M28.004 40.132a1 1 0 00.992 1.736C30.016 41.285 31.014 41 32 41s1.983.285 3.004.868a1 1 0 10.992-1.736C34.684 39.382 33.348 39 32 39c-1.348 0-2.684.382-3.996 1.132z"
    />
  );
}

function Mouth2() {
  return (
    <>
      <Path fill="#dc5c7a" d="M28 41h8c-.667 1.667-2 2.5-4 2.5s-3.333-.833-4-2.5z" />
      <Path fill="#f57b98" d="M32 40a2.092 2.092 0 013.612.225L36 41h-8l.388-.775A2.092 2.092 0 0132 40z" />
    </>
  );
}

function Mouth3() {
  return (
    <>
      <Path
        fill="#456dff"
        d="M34.996 42.665a3 3 0 01-5.992 0A3.5 3.5 0 0127 39.5a2.035 2.035 0 012.73-1.912c.756.275 1.513.412 2.27.412s1.514-.137 2.27-.412A2.035 2.035 0 0137 39.5a3.5 3.5 0 01-2.004 3.165zM33.415 43h-2.83a1.5 1.5 0 002.83 0z"
      />
      <G fill="#fff" transform="translate(23 36)">
        <Path
          fillOpacity={0.26}
          d="M11.996 6.665a3 3 0 10-5.991 0A3.5 3.5 0 014 3.5a2.035 2.035 0 012.73-1.912C7.485 1.863 8.242 2 9 2s1.514-.137 2.27-.412A2.035 2.035 0 0114 3.5a3.5 3.5 0 01-2.004 3.165zM10.415 7h-2.83a1.5 1.5 0 112.83 0z"
        />
        <Circle cx={9} cy={4.5} r={1.5} />
      </G>
    </>
  );
}

function Mouth4() {
  return (
    <Path
      fill="#1b0640"
      d="M28.004 41.868a1 1 0 01.992-1.736c1.02.583 2.018.868 3.004.868s1.983-.285 3.004-.868a1 1 0 11.992 1.736C34.684 42.618 33.348 43 32 43c-1.348 0-2.684-.382-3.996-1.132z"
    />
  );
}

function Mouth5() {
  return (
    <Path
      fill="#1b0640"
      d="M30.318 41.728a.75.75 0 01.364-1.456c2.433.609 4.165.32 5.288-.802a.75.75 0 011.06 1.06c-1.544 1.545-3.812 1.923-6.712 1.198z"
    />
  );
}

function Mouth6() {
  return <Ellipse cx={32} cy={41} fill="#1b0640" rx={2} ry={2.5} />;
}

function Mouth7() {
  return <Path fill="#1b0640" d="M29 38h6v1a3 3 0 01-6 0z" />;
}
