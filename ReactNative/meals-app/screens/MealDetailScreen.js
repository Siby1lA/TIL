import React, {useEffect, useCallback} from 'react';
import { View, Image, Text, StyleSheet, ScrollView } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';
const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = props => {
    const availableMeals = useSelector(state => state.meals.meals);
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    
    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(() => {
      dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId]);

    useEffect(() => {
      props.navigation.setParams({ toggleFav: toggleFavoriteHandler});
      // props.navigation.setParams({mealTitle: selectedMeal.title});
    }, [toggleFavoriteHandler]);
    
    return (
        <ScrollView>
          <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
          <View style={styles.details}>
              <DefaultText>{selectedMeal.duration}M</DefaultText>
              <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
              <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
          </View>
          <Text style={styles.title}>Ingredients</Text>
          {selectedMeal.ingredients.map(ingredient => (
            <ListItem key={ingredient}>{ingredient}</ListItem>
          ))}

          <Text style={styles.title}>Steps</Text>
          {selectedMeal.steps.map(step => (
            <ListItem key={step}>{step}</ListItem>
          ))}


          
        </ScrollView>
    );
};  

MealDetailScreen.navigationOptions = navigationData => {
    
    // const mealId = navigationData.navigation.getParam('mealId');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    // const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: mealTitle,
        headerRight: ()=> (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Favorite"
              iconName="ios-star"
              onPress={toggleFavorite}
            />
          </HeaderButtons>
        )
      };
};

const styles = StyleSheet.create({
    image: {
      width: '100%',
      height: 200,
    },
    details:{
      flexDirection: 'row',
      padding: 15,
      justifyContent: 'space-around',
    },
    title: {
      fontFamily: 'open-sans-blod',
      fontSize: 22,
      textAlign: 'center'
    },
    listItem: {
      marginVertical: 10,
      marginHorizontal: 20,
      borderColor: '#ccc',
      borderWidth: 1,
      padding: 10,
    }
});

export default MealDetailScreen;