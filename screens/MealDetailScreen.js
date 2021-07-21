import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The CategoriesScreen!!</Text>
            <Button title="back to Categories" onPress={() => {
                props.navigation.popToTop(); //모든 화면 팝하고 초기화면으로
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

export default MealDetailScreen;