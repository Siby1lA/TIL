import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CategoriesScreen!!</Text>
            <Button title="Go to Detail!" onPress={() => {
                props.navigation.navigate({routeName: 'MealsDetail'});
            }}/>
            <Button title="Back" onPress={() => {
                props.navigation.goBack(); //pop도 가능 스택네비일때만
            }} />
        </View>
    );
};  

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen;