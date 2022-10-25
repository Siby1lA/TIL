import React, { useState } from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enterInput, setInput] = useState('');

    const InputHendler = (enterText) => {
        setInput(enterText);
    };
    
    const addHandler = () => {
        props.onAdd(enterInput);
        setInput('');
    };

    const cancelHandler = () =>{
        props.onCancel();
        setInput('');
    };

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Input" style={styles.input}
                onChangeText={InputHendler} value={enterInput}/>
                <View style={styles.btnContainer}>
                    <View style={styles.btn}>
                        <Button title="ADD" onPress={addHandler} /> 
                    </View>
                    <View style={styles.btn}>
                        <Button title="CANCEL" color="red" onPress={cancelHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width:'80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    btnContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    btn: {
        width: '40%',
        backgroundColor: 'aqua'
    }
})


export default GoalInput;