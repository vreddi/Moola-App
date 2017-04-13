import React from 'react';
import { View, Text } from 'react-native';

import ColorPalette from '../../Utils/ColorPalette';

const Header = ({ children }) => {

    const { containerStyles, textStyles } = styles;

    return (
        <View style={ containerStyles }>
            <Text style={ textStyles }>
                { children }
            </Text>
        </View>
    );
}

const styles = {
    containerStyles: {
        backgroundColor: ColorPalette.LightGreen.G500,
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: ColorPalette.LightGreen.G700,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.3,
        elevation: 2,
        position: 'relative'
    },
    textStyles: {
        color: 'white',
        fontSize: 30
    }
};

export default Header;
