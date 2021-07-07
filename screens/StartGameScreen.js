import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text, 
    Button,
    TouchableWithoutFeedback,
    Alert,
    Keyboard,
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberCOntainer';

const StartGameScreen = props => {
    const [enteredValue, setenteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setenteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setenteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const choseNumber = parseInt(enteredValue)
        if(isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99){
            Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(choseNumber);
        setenteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;

    if(confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" />
            </Card>
            
        ) 
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game</Text>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType="numeric"
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    vlaue={enteredValue}
                />
                    <View style={styles.btnContainer}>
                        <View style={styles.btn} ><Button color={Colors.accnet} title="Reset" onPress={resetInputHandler} /></View>
                        <View style={styles.btn} ><Button color={Colors.primary} title="Confirm" onPress={confirmInputHandler} /></View>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',
    }
});

export default StartGameScreen;