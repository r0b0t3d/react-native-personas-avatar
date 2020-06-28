import React from 'react';
import { View, Text} from 'react-native';
import { WithLocalSvg } from 'react-native-svg';

export default function Skin() {
    return (
        <View>
            <Text>Skin</Text>
            <WithLocalSvg asset={require('./assets/skin/head-skin1.svg')}/>
        </View>
    )
}