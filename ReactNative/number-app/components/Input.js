import React from 'react'
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    // ...props 하면 컴포넌트 사용시 설정한 속성 사용, 즉 다향성 가능
    return <TextInput {...props} style={{...styles.input, ...props.style }} />
};
const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10,
    }
});
export default Input;