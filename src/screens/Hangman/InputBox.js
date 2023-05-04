import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const InputBox = ({correctLetters, answer}) => {
    return (
        <View style={styles.inputContainer}>
            
            {answer.split('').map((letter,HangmanLevel)=> {
                const l = letter.toUpperCase();
                return (
                    <Text key={HangmanLevel} style={styles.text}>
                    {correctLetters.includes(l)? l : '-'}</Text>
                )
            })}
        </View>
    );
};

export default InputBox;

const styles = StyleSheet.create({ 

    inputContainer: {
        backgroundColor: COLORS.inputbox,
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        padding: 10,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'center'
    },
    text:{
        textAlign:'center',
        fontSize: 16, 
        letterSpacing: 3,
        fontFamily: 'fredoka',
    },
});