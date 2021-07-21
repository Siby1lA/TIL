import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoriesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CategoriesScreen!!</Text>
            <Button title="Go to Meals!" onPress={() => {
                props.navigation.navigate({routeName: 'CategoryMeals'});  //네비게이트 말고 push도 있음 이건 위에 올려서 중첩되게
            }}/> 
           
        </View>
    );
};  
//replace 하면 뒤로가기 없게 다음으로 넘어감
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoriesScreen;