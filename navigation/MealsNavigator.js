import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
    },
    CategoryMeals: {
        screen: CategoryMealsScreen,
    },
    MealsDetail: MealDetailScreen

}, {
    //initialRouteName: 'Categories',

    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
    
    },
    
});

const MealsFavTabNavigator = createBottomTabNavigator({
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarLabel: '식사',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name="ios-restaurant" 
                        size={25} 
                        color={tabInfo.tintColor}
                    />
                )
            }
        }
    },
    Favorites: {
        screen: FavoritesScreen,
        navigationOptions: {
            tabBarLabel: '즐겨찾기',
            tabBarIcon: (tabInfo) => {
                return (
                    <Ionicons 
                        name="ios-star" 
                        size={25} 
                        color={tabInfo.tintColor} 
                    />
                );
                
            }
        }
    }
}, {
    tabBarOptions: {
        activeTintColor: Colors.accentColor
    }
});

export default createAppContainer(MealsFavTabNavigator);