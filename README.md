# react-native-personas-avatar
_An unofficial React Native library to generate playfull avatar by https://personas.draftbit.com/_

![Alt text](./avatar.gif?raw=true "Title")
## Getting started
This library use `react-native-svg` to render avatar

`yarn add react-native-svg`

`yarn add react-native-personas-avatar`

## Props
- `characters`: _used to generate the avatar with predefined characters. This value will be returned by `onNewCharacters`. If null, a random avatar will be generated_

- `onNewCharacters`: _If a new avatar created. It will return characters string to be used with `characters` prop above._

## Usage
```javascript
import { PersonasAvatar } from 'react-native-personas-avatar';

// Render random avatar
<PersonasAvatar
    style={{
        width: 200,
        height: 200
    }}
/>
```

## Collaborators

<p align="left-align">
    <a href="https://github.com/spencerlevitt">
        <img width="100" hspace="5" src="https://avatars3.githubusercontent.com/u/50083586?s=400&u=994eecec461e0346128bf9b939f1b6ab0389d5f2&v=4"/>
    </a>
</p>

