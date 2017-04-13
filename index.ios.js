import React from 'react';
import { Text, View, AppRegistry } from 'react-native';

import Header from './Components/Common/Header';
import MoolaHomeContainer from './Components/Common/MoolaHomeContainer';

const App = () => {
    return (
        <View>
            <Header>Moola</Header>
            <MoolaHomeContainer />
        </View>
    );
};

AppRegistry.registerComponent('Moola', () => App);
