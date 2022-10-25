import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { 
  StyleSheet,
  View,
  FlatList,
  Button,
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  
  const [course, setCourse] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addCourseHandler = goalTitle => {
    //setCourse([...course, enterInput]);
    setCourse(course => [...course, { id: Math.random().toString(), value: goalTitle}]) //객체로 하여금  키값으로 인해 플랫리스트 사용가능
    setIsAddMode(false);
    
  };

  const removeHandler = goalId => {
    setCourse(course => {
      return course.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelCourseHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <StatusBar />

      <Button title="Add New" onPress={() => setIsAddMode(true)} />

      <GoalInput visible={isAddMode} onAdd={addCourseHandler} onCancel={cancelCourseHandler}/>

      <FlatList 
        //키값이 아닌 다른 값으로 할 경우 (여기선 id) 키값처럼 고유의 번호 지정하는법
        keyExtractor={(item, index) => item.id}
        data={course}
        renderItem={itemData => <GoalItem onDelete={removeHandler.bind(this, itemData.item.id)} title={itemData.item.value} /> } />
        
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
 
});
