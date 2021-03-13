import React from 'react';
// @ts-ignore
import Svg, { Path, G, Circle, LinearGradient, Defs, Stop } from 'react-native-svg';
import { Characters } from '../types';

export default function Hair({ value, color }: { value: Characters['hair']; color: string }) {
  switch (value) {
    case 'hair1':
      return <Hair1 color={color} />;
    case 'hair2':
      return <Hair2 color={color} />;
    case 'hair3':
      return <Hair3 color={color} />;
    case 'hair4':
      return <Hair4 color={color} />;
    case 'hair5':
      return <Hair5 color={color} />;
    case 'hair6':
      return <Hair6 color={color} />;
    case 'hair7':
      return <Hair7 color={color} />;
    case 'hair8':
      return <Hair8 color={color} />;
    case 'hair9':
      return <Hair9 color={color} />;
    case 'hair10':
      return <Hair10 color={color} />;
    case 'hair11':
      return <Hair11 color={color} />;
    case 'hair12':
      return <Hair12 color={color} />;
    case 'hair13':
      return <Hair13 color={color} />;
    case 'hair14':
      return <Hair14 color={color} />;
    case 'hair15':
      return <Hair15 color={color} />;
    case 'hair16':
      return <Hair16 color={color} />;
    case 'hair17':
      return <Hair17 color={color} />;
    case 'hair18':
      return <Hair18 color={color} />;
    case 'hair19':
      return <Hair19 color={color} />;
    case 'hair20':
      return <Hair20 color={color} />;
    default:
      return <Hair1 color={color} />;
  }
}

function Hair1({ color }: { color: string }) {
  return (
    <Path
      d="M22.386 23.438a.75.75 0 1 1-1.342-.67 16.551 16.551 0 0 1 2.202-3.366 11.86 11.86 0 0 1 3-2.522.75.75 0 0 1 .765 1.29 10.36 10.36 0 0 0-2.623 2.205 15.055 15.055 0 0 0-2.002 3.063zM28.75 17a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
      opacity={0.198}
      fill="#fff"
    />
  );
}

function Hair2({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M41.668 19h1.667a3 3 0 0 1 2.984 3.314l-.651 6.186a1.364 1.364 0 0 1-1.301-.954zm-20 0l-2.7 8.546a1.362 1.362 0 0 1-1.3.954l-.652-6.186A3 3 0 0 1 20 19z"
        fill={color}
      />
      <Path
        d="M22.386 23.438a.75.75 0 0 1-1.342-.67 16.551 16.551 0 0 1 2.202-3.366 11.86 11.86 0 0 1 3-2.522.75.75 0 1 1 .765 1.29 10.36 10.36 0 0 0-2.623 2.205 15.055 15.055 0 0 0-2.002 3.063zM28.75 17a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5z"
        fill="#fff"
        opacity={0.198}
      />
    </>
  );
}

function Hair3({ color }: { color: string }) {
  return (
    <Path
      d="M46 28a16 16 0 0 1-.021-.023 2 2 0 0 1-2.104-2.855 2 2 0 0 1-2.729-2.095 2 2 0 0 1-3.303.553l-.012.005v.042a2 2 0 0 1-3.752.965 2 2 0 0 1-3.922.333 2 2 0 0 1-3.865-.598 23.239 23.239 0 0 1-.131-.022 2 2 0 0 1-3.676-.981 20.21 20.21 0 0 1-.83-.326 2 2 0 0 1-2.725 2.123 2 2 0 0 1-.93 2.68v.226A4.5 4.5 0 0 0 18.58 37 14.036 14.036 0 0 0 27 46.081v3.062a3.483 3.483 0 0 1-.652-.68c-.484-.137-.961-.29-1.43-.46a3.46 3.46 0 0 1-2.719-.138 3.461 3.461 0 0 1-1.816-2.166 20.882 20.882 0 0 1-.987-.707 3.462 3.462 0 0 1-2.742-.912 3.464 3.464 0 0 1-1.087-2.877c-.17-.217-.334-.438-.495-.661a3.465 3.465 0 0 1-2.604-1.712 3.467 3.467 0 0 1-.062-3.358c-.046-.13-.092-.26-.136-.39a3.47 3.47 0 0 1-1.077-5.965v-.009a3.47 3.47 0 0 1 .471-6.196 3.47 3.47 0 0 1 2.272-5.788 3.47 3.47 0 0 1 3.876-4.861A3.47 3.47 0 0 1 22.95 8.76a3.47 3.47 0 0 1 5.941-1.833 3.47 3.47 0 0 1 6.218 0A3.47 3.47 0 0 1 41.05 8.76a3.47 3.47 0 0 1 5.138 3.503 3.47 3.47 0 0 1 3.876 4.86 3.47 3.47 0 0 1 2.272 5.789 3.47 3.47 0 0 1 .471 6.196v.01a3.47 3.47 0 0 1-1.077 5.965c-.044.13-.09.26-.136.389a3.467 3.467 0 0 1-.062 3.358 3.465 3.465 0 0 1-2.604 1.712c-.16.223-.326.444-.495.661a3.464 3.464 0 0 1-1.087 2.877 3.462 3.462 0 0 1-2.742.912c-.322.245-.651.48-.987.707a3.461 3.461 0 0 1-1.816 2.166 3.46 3.46 0 0 1-2.719.138c-.469.17-.946.323-1.43.46a3.483 3.483 0 0 1-.652.68v-3.062a14.036 14.036 0 0 0 8.42-9.082l.08.001a4.5 4.5 0 0 0 .5-8.973z"
      fill={color}
    />
  );
}

function Hair4({ color }: { color: string }) {
  return (
    <Path
      d="M46 28c-2.177-2.419-3.652-5.54-4.425-9.363-2.252 3.614-5.277 6.235-9.075 7.863-4.667 2-9.5 2.333-14.5 1v.527a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73zm-9 21.313v-3.232a14.036 14.036 0 0 0 8.42-9.082l.08.001a4.48 4.48 0 0 0 2.5-.758V47c-3.113 1.211-6.78 1.982-11 2.313zm-10 0c-4.22-.331-7.887-1.102-11-2.313V36.242a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081z"
      fill={color}
    />
  );
}

function Hair5({ color }: { color: string }) {
  return (
    <Path
      d="M46 28c-1.412-1.57-2.53-3.434-3.35-5.595-3.192 1.086-6.742 1.629-10.65 1.629-4.848 0-9.145-.836-12.89-2.506A13.955 13.955 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73v-1.375C16 18.334 23.163 11 32 11s16 7.334 16 16.382v1.376a4.474 4.474 0 0 0-2-.73zm-9 20.06v-1.98A14.036 14.036 0 0 0 45.42 37h.08a4.48 4.48 0 0 0 2.5-.758v6.376c0 .477-.02.949-.059 1.415-3.647 2.044-7.294 3.386-10.941 4.028zm-10 0c-3.647-.64-7.294-1.983-10.941-4.027A16.99 16.99 0 0 1 16 42.618v-6.376a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081z"
      fill={color}
    />
  );
}

function Hair6({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M44.544 20.777C42.254 16.167 37.497 13 32 13s-10.254 3.168-12.544 7.777a2 2 0 0 1 .551-2.376v-.005a2 2 0 0 1 .271-3.571 2 2 0 0 1 1.31-3.337 2 2 0 0 1 2.234-2.802 2 2 0 0 1 2.961-2.019 2 2 0 0 1 3.425-1.056 2 2 0 0 1 3.584 0 2 2 0 0 1 3.425 1.056 2 2 0 0 1 2.961 2.02 2 2 0 0 1 2.235 2.801 2 2 0 0 1 1.309 3.337 2 2 0 0 1 .272 3.571v.005a2 2 0 0 1 .55 2.376z"
        fill={color}
      />
      <Path
        d="M45.934 25.632C43.828 20.564 38.83 17 33 17h-2c-5.83 0-10.828 3.564-12.934 8.632C18.753 18.542 24.73 13 32 13s13.247 5.542 13.934 12.632z"
        fill="#5ac4d4"
      />
    </>
  );
}

function Hair7({ color }: { color: string }) {
  return (
    <Path
      d="M46 27v3c-1.333-1.667-2.667-4.667-4-9-2.657 1.333-5.99 2-10 2s-7.343-.667-10-2c-1.333 3.667-2.667 6.333-4 8v-2c0-7.732 6.268-14 14-14s14 6.268 14 14z"
      fill={color}
    />
  );
}

function Hair8({ color }: { color: string }) {
  return (
    <Path
      d="M33.792 9a2 2 0 0 1 3.816 0h.558a2 2 0 0 1 3.83.668c.075.03.15.063.224.095a2 2 0 0 1 3.13 2.298l.152.179a2 2 0 0 1 1.775 3.41c.042.156.08.314.114.473a2 2 0 0 1 .018 3.748l-.047.324a2 2 0 0 1-.022 3.62 1.994 1.994 0 0 1 .159.852 1.8 1.8 0 0 1-1.22 2.924L46 29.5c-.44-.659-.842-1.48-1.209-2.465a1.797 1.797 0 0 1-.437-.796 1.998 1.998 0 0 1-.563-2.679 38.655 38.655 0 0 1-.022-.098 2 2 0 0 1-.956-2.937 1.994 1.994 0 0 1-2.44-.323 2 2 0 0 1-3.724.057l-.312.032a2 2 0 0 1-3.573.203l-.23.003a2 2 0 0 1-3.521-.099 36.13 36.13 0 0 1-.41-.031 2 2 0 0 1-3.676-.165 1.997 1.997 0 0 1-3.04-.22 19.96 19.96 0 0 1-.023.155 2 2 0 0 1-.701 3.35 2 2 0 0 1-1.397 3.095A24.897 24.897 0 0 1 18 29.5l-.188-1.923a1.8 1.8 0 0 1-.338-3.465l-.012-.126a2 2 0 0 1-.38-3.889l-.013-.144a2 2 0 0 1 .067-3.92 8.93 8.93 0 0 1 .041-.177 2 2 0 0 1 1.46-3.627 2 2 0 0 1 3.066-2.326 2 2 0 0 1 3.835-.894 9 9 0 0 1 .052-.003A2 2 0 0 1 29.408 9h.184a2 2 0 0 1 3.816 0z"
      fill={color}
    />
  );
}

function Hair9({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73zm2 8.242v6.604c0 7.312-4.612 13.513-11 15.679V46.08a14.036 14.036 0 0 0 8.42-9.082l.08.001a4.48 4.48 0 0 0 2.5-.758zM27.13 58.568C20.675 56.443 16 50.208 16 42.846v-6.604a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081v5.464c.051 2.356.095 4.697.13 7.023z"
        fill={color}
      />
      <Path
        d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73z"
        fill="#fff"
        opacity={0.258}
      />
    </>
  );
}

function Hair10({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M18.996 21.804C21.059 16.644 26.104 13 32 13s10.94 3.645 13.004 8.804c.079.063.157.127.235.192a1 1 0 0 1 .338.54l.627 2.64a.5.5 0 0 1-.774.523C40.989 22.566 36.512 21 32 21c-4.513 0-8.985 1.567-13.417 4.702a.5.5 0 0 1-.775-.522l.616-2.64a1 1 0 0 1 .338-.546l.234-.19z"
        fill={color}
      />
      <Path
        d="M32 17c4.779 0 9.192 1.665 13.24 4.996a1 1 0 0 1 .337.54l.627 2.64a.5.5 0 0 1-.774.523C40.989 22.566 36.512 21 32 21c-4.513 0-8.985 1.567-13.417 4.702a.5.5 0 0 1-.775-.522l.616-2.64a1 1 0 0 1 .338-.546C22.81 18.664 27.222 17 32 17z"
        fill={'black'}
        opacity={0.259}
      />
    </>
  );
}

function Hair11({ color }: { color: string }) {
  return (
    <>
      <G transform="translate(18 8)">
        <Circle cx={14} cy={6} r={4} fill="#5a45ff" />
        <G fill={color}>
          <Path
            d="M17.67 14.5l.054-7.663c2.136-.013 3.207-.013 3.214 0C25.157 9.25 28 13.792 28 19v3c-1.333-1.667-2.667-4.667-4-9-.496.25-2.606.75-6.33 1.5zm-7.34 0C6.606 13.75 4.496 13.25 4 13c-1.333 4.333-2.667 7.333-4 9v-3c0-5.208 2.843-9.751 7.062-12.163h3.27z"
            opacity={0.303}
          />
          <Path d="M10.014 4.572C10.188 2.012 11.906 0 14 0c2.085 0 3.798 1.994 3.983 4.54.735.393 1.46.897 2.176 1.512a3 3 0 0 1 1.04 2.14l.098 2.17a4 4 0 0 1-3.13 4.086C16.51 14.816 15.12 15 14 15c-1.132 0-2.564-.192-4.294-.576a3.872 3.872 0 0 1-3.016-4.145l.208-2.2a3 3 0 0 1 .964-1.932 11.545 11.545 0 0 1 2.152-1.575zm.317-.169C11.516 3.801 12.738 3.5 14 3.5c1.244 0 2.462.29 3.655.872a4 4 0 0 0-7.324.031z" />
          <Path
            d="M10.015 4.56C10.193 2.005 11.91 0 14 0c2.066 0 3.765 1.957 3.978 4.469a10.96 10.96 0 0 0-.354-.165 4 4 0 0 0-7.286.085 9.194 9.194 0 0 0-.323.171z"
            fill="#000"
            opacity={0.318}
          />
        </G>
      </G>
    </>
  );
}

function Hair12({ color }: { color: string }) {
  return (
    <>
      <Defs>
        <LinearGradient id="a" x1="50" x2="50" y1="0" y2="100">
          <Stop offset="0" stopColor={color} stopOpacity="1" />
          <Stop offset="1" stopColor={color} stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Path
        d="M28 15v2c-1.323-3.514-3.06-5.389-3.759-6-1.048-.917-2.478-1.795-3.35-3.731-.57-1.268-.474-2.94-.393-4.673C24.958 4.937 28 9.613 28 15zM0 15v2c1.323-3.514 3.06-5.389 3.759-6 1.048-.917 2.478-1.795 3.35-3.731.57-1.268.474-2.94.393-4.673C3.042 4.937 0 9.613 0 15z"
        fill="url(#a)"
        transform="translate(18 12)"
      />
      <Path
        d="M27.977 13.226L40 12a6.838 6.838 0 0 1-6.487 9h-6.216a3 3 0 0 1-3-3v-.7a4.096 4.096 0 0 1 3.68-4.074z"
        fill={color}
      />
    </>
  );
}

function Hair13({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M32 19.002c3.881 0 7.548-.376 11 4.218l-1.9 6.493c-.611 1.227-1.636 1.558-2.463.795-2.09-1.929-4.302-2.893-6.637-2.893s-4.547.964-6.637 2.893c-.827.763-1.852.432-2.462-.795L21 23.22c3.452-4.594 7.119-4.218 11-4.218z"
        fill="#000"
        fillOpacity={0.203}
      />
      <Path
        d="M29.292 13.206a3 3 0 0 1 5.416 0c6.1.957 10.809 5.236 11.292 12.711a27.685 27.685 0 0 0-3.96-1.302l-.94.602a2 2 0 0 1-2.463.462C36.547 24.559 34.335 24 32 24s-4.547.56-6.637 1.679a2 2 0 0 1-2.462-.462l-.94-.602A27.685 27.685 0 0 0 18 25.917c.483-7.475 5.192-11.754 11.292-12.71z"
        fill={color}
      />
      <Path
        d="M41.448 24.994l-.349.223a2 2 0 0 1-2.462.462C36.547 24.559 34.335 24 32 24s-4.547.56-6.637 1.679a2 2 0 0 1-2.462-.462l-.349-.223c.866.068 2.183-.479 2.811-.815 2.09-1.12 4.302-1.679 6.637-1.679s4.547.56 6.637 1.679c.628.336 1.945.883 2.811.815z"
        fill="#fff"
        fillOpacity={0.203}
      />
      <Path
        d="M21.96 24.615A27.685 27.685 0 0 0 18 25.917C18.553 17.367 24.632 13 32 13s13.447 4.368 14 12.917a27.685 27.685 0 0 0-3.96-1.302L43 24c-3.452-2.667-7.119-4-11-4s-7.548 1.333-11 4z"
        fill="#000"
        fillOpacity={0.28}
      />
    </>
  );
}

function Hair14({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M32.034 10c2.746 0 4.217 1.437 4.842 2.052.563.54.968 1.313 1.112 2.14l.663 4.17c.354 1.942-.698 3.665-2.526 4.086C34.5 22.816 33.12 23 32 23c-1.132 0-2.553-.192-4.244-.576-1.832-.423-2.834-2.2-2.375-4.145l.786-4.2a3.972 3.972 0 0 1 1.035-1.932c.624-.642 2.086-2.147 4.832-2.147z"
        fill={color}
      />
      <Path
        d="M36.876 12.052c.563.54.968 1.313 1.112 2.14l.663 4.17c.354 1.942-.698 3.665-2.526 4.086C34.5 22.816 33.12 23 32 23c-1.132 0-2.553-.192-4.244-.576-1.832-.423-2.834-2.2-2.375-4.145l.786-4.2a3.972 3.972 0 0 1 1.035-1.932c.26-.268.666-.686 1.25-1.082-.316.488-1.452.987-1.452 2.435V17c-.322 1.645.73 3.154 2.017 3.513 1.187.325 2.186.487 2.981.487.787 0 1.757-.156 2.898-.467 1.285-.356 2.352-1.89 2.104-3.533v-3c0-1.5-1.105-2.544-1.5-3a1.47 1.47 0 0 0-.136-.14c.726.42 1.215.9 1.512 1.192z"
        fill="#fff"
        opacity={0.257}
      />
    </>
  );
}

function Hair15({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M17.79 27.558l-.712-6.59A9 9 0 0 1 26.025 11H43a9.237 9.237 0 0 1-.74 3.63 7.926 7.926 0 0 1 4.6 8.351L46 29l-.002-.001v4.222a14.005 14.005 0 0 1-.476 3.42l-2.523.539a1 1 0 0 1-1.188-1.182l1.899-9.114c-1.574-2.093-2.678-5.242-3.314-9.445a9.238 9.238 0 0 1-5.692 2.774c-1.823.191-3.391.287-4.704.287-3 0-5.667-.5-8-1.5 0 2.59-.666 5.098-1.997 7.523l1.974 9.475a1 1 0 0 1-1.188 1.182l-2.522-.538a14.005 14.005 0 0 1-.477-3.421z"
        fill={color}
      />
      <Path
        d="M20.003 26.523l1.974 9.475a1 1 0 0 1-1.188 1.182l-2.522-.538a14.005 14.005 0 0 1-.477-3.421v-5.664l-.712-6.59A9 9 0 0 1 26.025 11H43a9.237 9.237 0 0 1-2.604 6.439 9.238 9.238 0 0 1-5.692 2.774c-1.823.191-3.391.287-4.704.287-3 0-5.667-.5-8-1.5 0 2.59-.666 5.098-1.997 7.523zm25.995 2.476v4.222a14.005 14.005 0 0 1-.476 3.42l-2.523.539a1 1 0 0 1-1.188-1.182l1.899-9.114c-1.149-1.528-2.047-3.618-2.696-6.27a9.288 9.288 0 0 0 3.45-4.506 7.91 7.91 0 0 1 2.396 6.873L46 29z"
        fill="#fff"
        opacity={0.259}
      />
    </>
  );
}

function Hair16({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M37 13.92c5.263 2.012 9 7.11 9 13.08v1c-.887-2.07-1.942-3.711-3.165-4.926-1.834-1.823-3.335-.694-4.526-2.522-.795-1.219-1.231-3.43-1.309-6.633z"
        fill={color}
        opacity={0.298}
      />
      <Path
        d="M14.567 47.184a5.642 5.642 0 0 1-2.93.816H10.5c2.773-2.536 4.562-5.795 5.367-9.777.047-.632.091-1.292.133-1.98a4.48 4.48 0 0 0 2.58.756A14.036 14.036 0 0 0 27 46.081V49a9.403 9.403 0 0 1-9.439 9.531L9.5 58.5c2.667-5.484 4.333-9.189 5-11.113.023-.066.045-.133.067-.203zM32.653 25.09C28.466 28.4 16 27.256 16 33.568V27.5C16 18.387 23.163 11 32 11c4.84 0 5.683 2.647 5.457 6.23-.188 2.99-.617 4.546-4.804 7.859z"
        fill={color}
      />
    </>
  );
}

function Hair17({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M22.2 17.002c-.131-.647-.2-1.316-.2-2.002 0-5.523 4.477-10 10-10s10 4.477 10 10c0 .686-.069 1.355-.2 2.002C39.274 14.526 35.815 13 32 13s-7.274 1.526-9.8 4.002z"
        fill={color}
      />
      <Path
        d="M45.934 25.632C43.828 20.564 38.83 17 33 17h-2c-5.83 0-10.828 3.564-12.934 8.632C18.753 18.542 24.73 13 32 13s13.247 5.542 13.934 12.632z"
        fill="#f55d81"
      />
    </>
  );
}

function Hair18({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73zm2 8.242V64H37V46.08A14.036 14.036 0 0 0 45.42 37h.08a4.48 4.48 0 0 0 2.5-.758zM27 64l-11.13-.068.13-27.69a4.48 4.48 0 0 0 2.58.757A14.036 14.036 0 0 0 27 46.081v5.464c.034 1.57.034 5.723 0 12.455z"
        fill={color}
      />
      <Path
        d="M46 28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73V27.5C16 18.387 23.163 11 32 11s16 7.387 16 16.5v1.258a4.474 4.474 0 0 0-2-.73z"
        fill="#fff"
        opacity={0.258}
      />
    </>
  );
}

function Hair19({ color }: { color: string }) {
  return (
    <>
      <Path
        d="M41.001 13.836C41.057 11.156 43.291 9 46.04 9c2.783 0 5.04 2.211 5.04 4.94 0 .079-.003.158-.007.237.018 3.201.708 7.08 1.928 9.823-2.256-.606-4.334-1.62-6.22-2.903A16.67 16.67 0 0 1 48 27.382v1.376a4.474 4.474 0 0 0-2-.73V28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73v-1.375c0-2.227.434-4.35 1.22-6.285C15.334 22.38 13.256 23.394 11 24c1.22-2.743 1.91-6.622 1.928-9.823a4.923 4.923 0 0 1-.006-.238C12.922 11.211 15.178 9 17.96 9c2.748 0 4.982 2.156 5.038 4.836C25.563 12.046 28.662 11 32 11s6.437 1.046 9.001 2.836z"
        fill={color}
      />
      <Path
        d="M41.013 13.582C45.213 16.545 48 21.767 48 27.714v1.044a4.474 4.474 0 0 0-2-.73V28c-1.807-2.008-3.13-4.5-3.97-7.474-1.87 2.283-4.546 3.607-8.03 3.974-5.832.614-10.817-.327-14.953-2.822A13.959 13.959 0 0 0 18 27v1.027a4.474 4.474 0 0 0-2 .73v-1.043c0-5.947 2.788-11.17 6.987-14.132.006.084.01.169.012.254C25.563 12.046 28.662 11 32 11s6.437 1.046 9.001 2.836c.002-.085.006-.17.012-.254z"
        fill="#fff"
        opacity={0.259}
      />
      <Path
        d="M18 16a5 5 0 0 1 8.16-3.875c-3.106 1.248-5.739 3.46-7.545 6.279A4.978 4.978 0 0 1 18 16zm23-5a5 5 0 0 1 4.385 7.404c-1.806-2.818-4.44-5.031-7.545-6.279A4.98 4.98 0 0 1 41 11z"
        fill="#f55d81"
      />
    </>
  );
}

function Hair20({ color }: { color: string }) {
  return (
    <Path
      d="M42.26 14.63a7.926 7.926 0 0 1 4.6 8.351L46 29c-2.827-1.696-4.695-5.55-5.604-11.561a9.238 9.238 0 0 1-5.692 2.774c-1.823.191-3.391.287-4.704.287-3 0-5.667-.5-8-1.5 0 3.667-1.333 7.167-4 10.5l-.922-8.533A9 9 0 0 1 26.025 11H43a9.237 9.237 0 0 1-.74 3.63z"
      fill={color}
    />
  );
}
