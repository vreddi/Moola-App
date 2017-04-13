import React from 'react';
import { View, Text } from 'react-native';

import ColorPalette from '../../Utils/ColorPalette';

const SingleValueArea = (props) => {

    const { title, value, addBorder } = props;

    return (
        <View style={ GetContainerStyles(addBorder) }>
            <Text style={ styles.valueStyles }>{ value }</Text>
            <Text style={ styles.titleStyles }>{ title }</Text>
        </View>
    );
}

const GetContainerStyles = (addBorder) => {
    return addBorder ? styles.containerWithBorderStyles : styles.containerStyles;
}

const styles = {
    containerStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: ColorPalette.Grey.G50,
    },
    containerWithBorderStyles: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderRightWidth: 1,
        backgroundColor: ColorPalette.Grey.G50,
        borderColor: ColorPalette.Grey.G300
    },
    valueStyles: {
        color: ColorPalette.Grey.G800,
        fontSize: 22,
        fontWeight: '600'
    },
    titleStyles: {
        color: ColorPalette.Grey.G800,
        fontSize: 12,
        marginLeft: 25
    }
}

export default SingleValueArea;
