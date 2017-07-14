// Imports
import React from 'react';
import { Text, View } from 'react-native';

// Make header component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>    
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        //Shadow only works in IOS
        shadowColor: '#000',
        shadowOffset: { whidth: 0, height: 20 },
        shadowOpacity: 0.9,
        //Elevation is the equivalent to shadow in android
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make component avaiable to other parts of the app
export { Header };
