import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [enterInput, setInput] = useState('');
  
  const [course, setCourse] = useState([]);

  const InputHendler = (enterText) => {
    setInput(enterText);
  };

  const addInputHandler = () => {
    //setCourse([...course, enterInput]);
    setCourse(course => [...course, { id: Math.random().toString(), value: enterInput}]) //객체로 하여금  키값으로 인해 플랫리스트 사용가능
  }

  return (
    <View style={styles.screen}>
      <StatusBar />
      <View style={styles.inputContainer}>
        <TextInput placeholder="Input" style={styles.input}
          onChangeText={InputHendler} value={enterInput}/>

        <Button title="ADD" onPress={addInputHandler} /> 
      </View>

      <FlatList 
        //키값이 아닌 다른 값으로 할 경우 (여기선 id) 키값처럼 고유의 번호 지정하는법
        keyExtractor={(item, index) => item.id}
        
        data={course}
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text> {itemData.item.value} </Text>
          </View>
      )} />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width:'80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});
