import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity,  } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        return (
            <CategoryGridTile title={itemData.item.title}
            color={itemData.item.color}
            onSelect={() => {
                props.navigation.navigate({routeName: 'CategoryMeals', params: {
                    categoryId: itemData.item.id
                }});
            }}/>
        );
    };

    return (
        <FlatList style={styles.screen} keyExtractor={(item, index) => item.id} 
        data={CATEGORIES} 
        renderItem={renderGridItem} 
        numColumns={2}/>
    );
};  
//replace 하면 뒤로가기 없게 다음으로 넘어감

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
  };
  

const styles = StyleSheet.create({
    screen: {
        backgroundColor: 'white'
    },
    
});

export default CategoriesScreen;