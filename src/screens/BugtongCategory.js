import React, { useState } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';
import { COLORS, ROUTES, IMGS } from '../constants';

export default function Bugtong({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.bgpic}
        source={require('../assets/images/bg-transparent.png')}>

        <View style={styles.first}>
          <Text style={styles.game}> 10 nakalilitong tanong sa bawat kategorya</Text>

          <Text style={styles.category}> Mga Kategorya:</Text>
        </View>

        <View style={styles.second}>

          <TouchableOpacity style={styles.easy}
            onPress={() => navigation.navigate(ROUTES.MADALI)}>
            <Text style={styles.fontmodes}> Madali </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.funny}
            onPress={() => navigation.navigate(ROUTES.NAKAKATAWA)}>
            <Text style={styles.fontmodes}> Nakakatawa </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.math}
            onPress={() => navigation.navigate(ROUTES.MATEMATIKA)}>
            <Text style={styles.fontmodes}> Matematika </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.word}
            onPress={() => navigation.navigate(ROUTES.SALITA)}>
            <Text style={styles.fontmodes}> Salita </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.hard}
            onPress={() => navigation.navigate(ROUTES.MAHIRAP)}>
            <Text style={styles.fontmodes}> Mahirap </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.random}
            onPress={() => navigation.navigate(ROUTES.RANDOMTAGALOG)}>
            <Text style={styles.fontmodes}> Random </Text>
          </TouchableOpacity>


          
        </View>

          <View style={styles.logobottom}>
            <Image style={styles.logobelow}
              source={require('../assets/images/logo.png')} />
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
    backgroundColor: COLORS.bugtong,
    flexDirection: 'column',
  },
  bgpic: {
    flex: 1,
    width: '100%',
    height: '100%'
  },

  first: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  game: {
    backgroundColor: COLORS.confusing,
    padding: 8,
    fontSize: 16,
    marginVertical: 20,
    textAlign: 'center',
    borderRadius: 10,
    color: COLORS.headercolor,
    borderWidth: 2,
    fontWeight: 'bold',
  },
  category: {
    backgroundColor: COLORS.categories,
    padding: 5,
    fontSize: 16,
    borderRadius: 10,
    color: COLORS.headercolor,
    borderWidth: 2,
    fontWeight: 'bold',
    paddingRight: 200,
  },

  second: {
    flex: 4.5,
    alignItems: 'center'
  },
  easy: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    padding: 8,
    borderWidth: 3,
    borderStyle: 'dashed',
    backgroundColor: COLORS.easy,
    marginTop: 30,
  },
  funny: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    padding: 8,
    borderWidth: 3,
    borderStyle: 'dashed',
    backgroundColor: COLORS.funny,
    marginTop: 13,
  },
  math: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    padding: 8,
    borderWidth: 3,
    borderStyle: 'dashed',
    backgroundColor: COLORS.math,
    marginTop: 13,
  },
  word: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    padding: 8,
    borderWidth: 3,
    borderStyle: 'dashed',
    backgroundColor: COLORS.word,
    marginTop: 13,
  },
  hard: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    padding: 8,
    borderWidth: 3,
    borderStyle: 'dashed',
    backgroundColor: COLORS.hard,
    marginTop: 13,
  },
  random: {
    backgroundColor: 'white',
    width: '80%',
    borderRadius: 30,
    padding: 8,
    borderWidth: 3,
    borderStyle: 'dashed',
    backgroundColor: COLORS.random,
    marginTop: 13,
  },
  fontmodes: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'chewy'
  },
  logobelow: {
    width: 70,
    height: 60,
    margin: 20,
  },
  logobottom:{
    bottom:0,
    alignItems: 'flex-end'
  },
});


