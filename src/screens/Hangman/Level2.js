import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import { COLORS, ROUTES, IMGS } from '../../constants';
import Manfigure from './Manfigure';
import WordBox from './WordBox';
import { level2 } from './hangmandata';
import InputBox from './InputBox';
import Keyboard from './Keyboard';
import StatusPopUp from './StatusPopUp';


export default function Level2() {
  const [input, setInput] = useState('')
  const [correctLetters, setCorrectLetters] = useState('');
  const [wrongLetters, setWrongLetters] = useState('');
  const [status, setStatus] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const correctWord = level2[currentIndex].answer;

  const storeCorrectLetters = (keyInput) => {
    const ans = correctWord.toUpperCase();
    if (ans.includes(keyInput)){
      const cl = correctLetters + keyInput;
      setCorrectLetters(cl);
      //win
      updateStatus(cl);
    } 
    else {
      const wl = wrongLetters + keyInput;
      setWrongLetters(wl);
        if (wl.length > 5){
          //lost
          setStatus('lost')
          console.log('you lost');
        }
    }
  }
  const updateStatus = (cl) => {
    let status = 'win';
    const correctWordArray = Array.from(correctWord.toUpperCase());
    correctWordArray.forEach(letter => {
      if(!cl.includes(letter)){
        status = '';
      }
    })
    if (status === 'win' && currentIndex === level2.length-1){
      setStatus('completed')
      return
    }
    setStatus(status);
  }

  const handlePopUpButton = () => {
    if (status === 'win'){
      // go to next level
      setCurrentIndex(i => i + 1)
    }
      //clear all stored data 
      setCorrectLetters('')
      setWrongLetters('')
      setStatus('')
      if (status === 'completed'){
        setCurrentIndex(0);
      }
  }
  console.log(correctLetters, wrongLetters, 'status->', status);

  
  return (
    <View style={styles.container}>
     <ImageBackground
        resizeMode="stretch"
        style={styles.bgpic}
        source={require('../../assets/images/bg-transparent.png')}>
      <Image style={styles.Logo}
        source={require('../../assets/images/logo.png')}
      />

          <View style={styles.row}>
            <Manfigure wrongWord={wrongLetters.length}/>
            <WordBox wordData={level2[currentIndex]} />
          </View>
          <InputBox correctLetters={correctLetters} answer={correctWord}/>
          <Keyboard correctLetters={correctLetters} wrongLetters={wrongLetters}  onPress={(input) => storeCorrectLetters(input)}/>
          <StatusPopUp status={status} onPress={handlePopUpButton}/>
       </ImageBackground>
    </View>
  )
}



const styles = StyleSheet.create({

  container: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: COLORS.hangman,
  },
  bgpic: {
    width: '100%',
    height:'100%',
  },
  Logo:{
    width:'13%',
    height:'6%',
    margin: 5,
  },
  row:{
    flexDirection:'row',
    margin: 10,
  },
});


