import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';
const GameOverScreen = props => {
    return (
        <ScrollView>
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
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    },
    imagecontainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30,

    },
    image: {
        width: '100%',
        height: '100%',
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60,
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
    },
    highlight: {
        color: Colors.primary,
    },
    
});

export default GameOverScreen;