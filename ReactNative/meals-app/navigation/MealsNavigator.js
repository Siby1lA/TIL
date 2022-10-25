import React from 'react';
import { Platform, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FilterScreen from '../screens/FiltersScreen';
import Colors from '../constants/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

const defalutStackNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
      },
      headerTitleStyle: {
          fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
          fontFamily: 'open-sans'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen'
}

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

    defaultNavigationOptions:  defalutStackNavigationOptions
    
});

const FavNavigatior = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defalutStackNavigationOptions
} );

const tabScreenConfig = {
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
                );
            },
            // tabBarLabel: <Text style={{fontFamily: 'open-sans'}}>식사</Text>,
        }
    },
    Favorites: {
        screen: FavNavigatior,
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
};

const MealsFavTabNavigator = Platform.OS === 'android' 
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: Colors.accentColor,
        shifting: true,
        barStyle: {
            backgroundColor: Colors.primaryColor
        }
    })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            labelStyle: {
                fontFamily: 'open-sans'
            },
            activeTintColor: Colors.accentColor
        }

    });

const FiltersNavigator = createStackNavigator({
    Filters: FilterScreen
},
{
    // navigationOptions: {
    //     drawerLabel: 'Filters!!!'
    // },
    defaultNavigationOptions:  defalutStackNavigationOptions
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {
       screen: MealsFavTabNavigator,
       navigationOptions: {
           drawerLabel: 'Meals'
       }
    },
    Filters: FiltersNavigator
}, {
    contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);