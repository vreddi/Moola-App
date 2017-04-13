import React from 'react';
import { View } from 'react-native';

import ColorPalette from '../../Utils/ColorPalette';

const ExpenseEarningContainer = ({ children }) => {
    return (
        <View style={ styles.containerStyles }>
            { children }
        </View>
    );
}

const styles = {
    containerStyles: {
        backgroundColor: ColorPalette.Grey.G50,
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        justifyContent: 'center',
        flexDirection: 'row',
        borderColor: ColorPalette.Grey.G500,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1
    }
};

export default ExpenseEarningContainer;
