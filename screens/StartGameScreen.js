import React from 'react';
import { View, StyleSheet, Text, Button} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a New Game</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType="numeric" maxLength={2} />
                <View style={styles.btnContainer}>
                    <View style={styles.btn} ><Button color={Colors.accnet} title="Reset" onPress={() => {}} /></View>
                    <View style={styles.btn} ><Button color={Colors.primary} title="Confirm" onPress={() => {}} /></View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    btnContainer : {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    btn: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center',
    }
});

export default StartGameScreen;