import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableOpacityBase} from 'react-native';
import Colors from '../constants/Colors';
const MainButton = props => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )

    
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: Colors.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20,

    },
    btnText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18,
    },
});

export default MainButton;