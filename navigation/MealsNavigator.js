import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator,  } from 'react-navigation-stack'
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

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

export default createAppContainer(MealsNavigator);