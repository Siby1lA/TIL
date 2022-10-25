import React from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import {useSelector} from 'react-redux';

const CategoryMealsScreen = props => {
    
    const catId = props.navigation.getParam('categoryId');

    const availablemeals = useSelector(state => state.meals.filteredMeals);

    const displayMeals = availablemeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList listData={displayMeals} navigation={props.navigation} />
    );
};  

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return {
        headerTitle: selectedCategory.title,
        
    };

}



export default CategoryMealsScreen;