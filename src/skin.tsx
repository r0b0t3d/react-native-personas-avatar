import React from 'react';
import { View, Text} from 'react-native';
// @ts-ignore
import { WithLocalSvg } from 'react-native-svg';

import skins from './assets/skin';

export default function Skin() {
    return (
        <View>
            <Text>Skin</Text>
            <WithLocalSvg asset={skins.headSkin1}/>
        </View>
    )
}