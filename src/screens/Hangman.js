import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView} from 'react-native';
import { COLORS, ROUTES, IMGS } from '../constants';

export default function Hangman ({ navigation }) {

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        resizeMode="stretch"
        style={styles.bgpic}
        source={require('../assets/images/bg-transparent.png')}>

        <View style={styles.first}>

          <Text style={styles.category}> LEVELS </Text>
        </View>

        <View style={styles.second}>

        <View style={styles.levelnumber}>
          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.HANGMANLEVEL)}>
            <Text style={styles.fontmodes}> 1 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL2)}>
            <Text style={styles.fontmodes}> 2 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL3)}>
            <Text style={styles.fontmodes}> 3 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL4)}>
            <Text style={styles.fontmodes}> 4 </Text>
          </TouchableOpacity>
          
        </View> 
        
        <View style={styles.levelnumber}>
          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL5)}>
            <Text style={styles.fontmodes}> 5 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL6)}>
            <Text style={styles.fontmodes}> 6 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL7)}>
            <Text style={styles.fontmodes}> 7 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL8)}>
            <Text style={styles.fontmodes}> 8 </Text>
          </TouchableOpacity>
        </View>  
         
         <View style={styles.levelnumber}>
          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL9)}>
            <Text style={styles.fontmodes}> 9 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL10)}>
            <Text style={styles.fontmodes}> 10 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL11)}>
            <Text style={styles.fontmodes}> 11 </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.levels}
            onPress={() => navigation.navigate(ROUTES.LEVEL12)}>
            <Text style={styles.fontmodes}> 12 </Text>
          </TouchableOpacity>

        </View>
            
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
    backgroundColor: COLORS.hangman,
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
  
  category: {
    backgroundColor: COLORS.categories,
    padding: 5,
    fontSize: 18,
    borderRadius: 10,
    color: COLORS.headercolor,
    borderWidth: 2,
    fontWeight: 'bold',
    width: '90%',
    textAlign: 'center',
  },

  second: {
    flex: 4.5,
  },
  levelnumber:{
    flexDirection:'row',
    justifyContent: 'center'
  },
  levels: {
    alignItems: 'center',
    marginHorizontal: 10,
    width: 60,
    height: 65,
    borderRadius: 10,
    padding: 8,
    borderWidth: 3,
    backgroundColor: COLORS.hangmanlevel,
    borderColor: 'white',
    marginBottom: 30,
  },
  
  fontmodes: {
    fontSize: 30,
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


