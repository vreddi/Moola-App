import React from 'react';
import { View, Text } from 'react-native';

import ColorPalette from '../../Utils/ColorPalette';

const SingleTitleArea = ({ children, addBorder }) => {
    return (
        <View style={ GetContainerStyles(addBorder) }>
            <Text style={ styles.titleStyles }>{ children }</Text>
        </View>
    );
}

const GetContainerStyles = (addBorder) => {
    return addBorder ? styles.containerWithBorderStyles : styles.containerStyles;
}

const styles = {
    containerStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRightWidth: 1,
        backgroundColor: ColorPalette.Grey.G50,
        borderColor: ColorPalette.Grey.G300
    },
    containerWithBorderStyles: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRightWidth: 1,
        backgroundColor: ColorPalette.Grey.G50,
        borderColor: ColorPalette.Grey.G300
    },
    titleStyles: {
        fontSize: 18,
        color: ColorPalette.Grey.G800,
        fontWeight: '500'
    }
};

export default SingleTitleArea;
