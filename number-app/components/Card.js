import React from 'react';
import {View, StyleSheet} from 'react-native';

const Card = props => {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
};
//... 스프레드 연산자 , 객체의 모든키-값을 가져와 재정의 가능캐한다. props.style는 자식에게 전달받는 스타일
const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5, //안드로이드 그림자 설정
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
});

export default Card;