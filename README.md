# react-native-personas-avatar
_An unofficial React Native library to generate playfull avatar by https://personas.draftbit.com/_

![Alt text](./screenshot.png?raw=true "Title")
## Getting started

`$ yarn add react-native-personas-avatar`

## Props
- `characters`: used to generate the avatar with predefined characters. This value will be returned by `onRandomAvatar`. If null, a random avatar will be generated
- `onRandomAvatar`: If a random avatar created. It will return characters string to be used with `characters` prop above.
## Usage
```javascript
import { PersonasAvatar } from 'react-native-personas-avatar';

// Render random avatar
<PersonasAvatar style={{ width: 200, height: 200 }} />
```
