import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback, Platform, Touchable} from 'react-native';
import Colors from '../constants/Colors';

const MainButton = props => {
    let ButtonComponent = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21){
        ButtonComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.btncontainer}>
            <ButtonComponent activeOpacity={0.8} onPress={props.onPress}>
            <View style={styles.btn}>
                <Text style={styles.btnText}>{props.children}</Text>
            </View>
            </ButtonComponent>
        </View>
        
    )

    
};

const styles = StyleSheet.create({
    btncontainer: {
        borderRadius: 20,
        overflow: 'hidden',
    },

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