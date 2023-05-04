import React,{useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, BackHandler, SafeAreaView} from 'react-native';
import {useFonts} from 'expo-font';
import { ROUTES, COLORS } from '../constants';


export default function Home({navigation}) {

  let [fontsLoaded] = useFonts({
      'chewy' :require('../assets/fonts/Chewy-Regular.ttf'),
      'fredoka' :require('../assets/fonts/FredokaOne-Regular.ttf'),
      'genty' :require('../assets/fonts/GentySans-Regular.ttf'),
      'mottci' :require('../assets/fonts/MOTTCI.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground
        resizeMode="stretch"
        style={styles.bgpic}
        source={require('../assets/images/bg-transparent.png')}>

            <View style={styles.first}> 
                <Image style={styles.tinyLogo}
                    source={require('../assets/images/logo.png')}/>
                <Text style={styles.title}> Riddle Quiz Game </Text>
            </View>

            <View style={styles.second}> 

                <TouchableOpacity style={styles.english}
                  onPress={() => navigation.navigate(ROUTES.RIDDLE)}>
                <Text style={styles.modes}> Riddle </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tagalog}
                 onPress={() => navigation.navigate(ROUTES.BUGTONG)}>
                <Text style={styles.modes}> Bugtong </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.hangm}
                 onPress={() => navigation.navigate(ROUTES.HANGMAN)}>
                <Text style={styles.modes}> Hangman </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.exit} onPress={()=> BackHandler.exitApp()}>
                <Text style={styles.exittext}> Exit </Text>
                </TouchableOpacity>
            </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAD4AF',
    flexDirection: 'column',
  },
  bgpic: {
    flex: 1,
    width: '100%',
    height:'100%'
  },
  first:{
    flex:2.5,
    alignItems:'center',
    justifyContent:'center',
  },
  tinyLogo:{
    width: 170,
    height: 150,
    marginTop:100,
    marginBottom: 10
  },
  title:{
    fontSize: 46,
    fontFamily: 'chewy',
    marginTop:10,
  },
  second:{
    flex:3.5,
  },
  english:{
    backgroundColor: COLORS.riddle,
    padding:10,
    marginTop:100,
    marginHorizontal:30,
    borderRadius: 40,
    borderWidth: 3,
   },
  modes:{
    textAlign: 'center',
    fontSize: 28,
    fontFamily: 'chewy',
   },
  tagalog:{
    backgroundColor: COLORS.bugtongbutton,
    padding:10,
    marginTop:10,
    marginHorizontal:30,
    borderRadius: 40,
    borderWidth: 3,
   },
  hangm:{
    backgroundColor: COLORS.hangman,
    padding:10,
    marginTop:10,
    marginHorizontal:30,
    borderRadius: 40,
    borderWidth: 3,
   },
  exit:{
    backgroundColor: '#000000',
    padding:10,
    marginTop:10,
    marginHorizontal:30,
    borderRadius: 40,
    borderWidth: 3,
   },
  exittext:{
    color: 'white',
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'chewy',
  }, 
  third:{
    flex:0.5,
  },
});
