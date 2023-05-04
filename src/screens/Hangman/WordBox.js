import React,{useReducer, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { COLORS, ROUTES, IMGS } from '../../constants';

const WordBox = ({wordData}) => {
  const [hint, toggleHint] = useReducer (s => !s, false)

  const oppositeWord = wordData.hint;
  return (
    <View style={styles.container}>
          
            <Text style={styles.riddlepuzzle}> {wordData.word} </Text>

            <View style={styles.hintContainer}>
              <TouchableOpacity onPress={toggleHint}>
                <Text style={styles.hintstyle}>
                  <Image source={require('../../assets/images/hints.png')}/>
                 {'Hint'}
                </Text>
              </TouchableOpacity>
            </View>

              {hint &&(
                <View>
                  <Text style={styles.hinttext}>{`${oppositeWord}`}</Text>
                </View>
              )}
    </View>

  );
};
export default WordBox;
const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding:8,
    backgroundColor: COLORS.confusing,
    borderRadius: 10,
    borderWidth: 3,
    alignItems:'center',
    justifyContent:'center',
  },

  riddlepuzzle:{
    fontFamily: 'genty',
    fontSize: 17,
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  hintContainer:{
    alignSelf: 'flex-end',
  },
  hintstyle:{
    fontFamily: 'mottci',
    fontSize:10,
  },
  hinttext:{
    color: 'green',
    fontSize: 12
  }
});


