import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';
const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imagecontainer}>
                <Image 
                fadeDuration={1000}
                source={require('../assets/success.png')}
                //source={{uri: 'https://dthezntil550i.cloudfront.net/3h/latest/3h1712251157030200004246919/7661d345-5917-4a27-bea7-f1275e66de39.png'}}
                style={styles.image}
                resizeMode="cover"/>
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    Your phone needed{' '} 
                    <Text style={styles.highlight}>{props.roundsNumber}</Text> 
                    {' '}roudns to guess the number{' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
            
            <MainButton onPress={props.onRestart} >
                RE START
            </MainButton>

        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagecontainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15,
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    },
    highlight: {
        color: Colors.primary,
    },
    
});

export default GameOverScreen;