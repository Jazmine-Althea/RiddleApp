import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from '../../constants';

const Key = ({text, onPress, disabled}) => {
    return (
        <TouchableOpacity disabled={disabled}
        onPress={() => onPress(text)} style={[styles.keyContainer, {backgroundColor:disabled ? COLORS.clicked : COLORS.confusing}]}>
            <Text style={styles.key}>{text}</Text>
        </TouchableOpacity>
    )
}

const Keyboard= ({onPress, correctLetters, wrongLetters}) => {
    const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    return (
        <View style={styles.container}>
            {keys.split('').map((_, HangmanLevel) => {
                const disable = correctLetters.includes(_) || wrongLetters.includes(_)
                return (
                <Key key={HangmanLevel} text={_} onPress={onPress} disabled={disable}/>)
            })}
        </View>
    )
}

export default Keyboard

const styles = StyleSheet.create({

    container: {
        flexDirection:'row',
        marginVertical: 20,
        flexWrap: 'wrap',
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    keyContainer:{
        width: 43,
        height: 43,
        backgroundColor: COLORS.confusing,
        borderRadius: 10,
        marginRight: 4,
        marginBottom: 10,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    key: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '600',
        fontFamily: 'chewy',
    },
});