import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import Header from './Components/Common/Header'

const App = () => {
    return (
        <View>
            <Header>Moola</Header>
        </View>
    );
};

AppRegistry.registerComponent('Moola', () => App);
