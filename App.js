import React from 'react';
import Home from './src/screens/Home';
import Riddle from './src/screens/RiddleCategory';
import Easy from './src/screens/EnglishCategories/EasyMode';
import Funny from './src/screens/EnglishCategories/FunnyMode';
import Math from './src/screens/EnglishCategories/MathMode';
import Word from './src/screens/EnglishCategories/WordMode';
import Hard from './src/screens/EnglishCategories/HardMode';
import Random from './src/screens/EnglishCategories/RandomMode';
import Bugtong from './src/screens/BugtongCategory';
import Madali from './src/screens/TagalogCategories/MadaliMode';
import Nakakatawa from './src/screens/TagalogCategories/NakakatawaMode';
import Matematika from './src/screens/TagalogCategories/MatematikaMode';
import Salita from './src/screens/TagalogCategories/SalitaMode';
import Mahirap from './src/screens/TagalogCategories/MahirapMode';
import Random_tagalog from './src/screens/TagalogCategories/RandomTagalogMode';
import Hangman from './src/screens/Hangman';
import HangmanLevel from './src/screens/Hangman/HangmanLevel';
import Level2 from './src/screens/Hangman/Level2';
import Level3 from './src/screens/Hangman/Level3';
import Level4 from './src/screens/Hangman/Level4';
import Level5 from './src/screens/Hangman/Level5';
import Level6 from './src/screens/Hangman/Level6';
import Level7 from './src/screens/Hangman/Level7';
import Level8 from './src/screens/Hangman/Level8';
import Level9 from './src/screens/Hangman/Level9';
import Level10 from './src/screens/Hangman/Level10';
import Level11 from './src/screens/Hangman/Level11';
import Level12 from './src/screens/Hangman/Level12';
import { ROUTES, COLORS } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerBackImageSource: require('./src/assets/images/left-arrow.png'),
        headerStyle: {
          backgroundColor: COLORS.confusing,
        },
        headerTitleAlign: 'center',
        headerTintColor: COLORS.headercolor,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,

        },        
      }}>
        <Stack.Screen name={ROUTES.HOME} component={Home} options={{headerShown: false}}/>
        <Stack.Screen name={ROUTES.RIDDLE} component={Riddle} options={{ title: 'RIDDLE' }}/>
        <Stack.Screen name={ROUTES.EASY} component={Easy} options={{ title: 'EASY' }}/>
        <Stack.Screen name={ROUTES.FUNNY} component={Funny} options={{ title: 'FUNNY' }}/>
        <Stack.Screen name={ROUTES.MATH} component={Math} options={{ title: 'MATH' }}/>
        <Stack.Screen name={ROUTES.WORD} component={Word} options={{ title: 'WORD' }}/>
        <Stack.Screen name={ROUTES.HARD} component={Hard} options={{ title: 'HARD' }}/>
        <Stack.Screen name={ROUTES.RANDOM} component={Random} options={{ title: 'RANDOM' }}/>
        <Stack.Screen name={ROUTES.BUGTONG} component={Bugtong} options={{ title: 'BUGTONG' }}/>
        <Stack.Screen name={ROUTES.MADALI} component={Madali} options={{ title: 'MADALI' }}/>
        <Stack.Screen name={ROUTES.NAKAKATAWA} component={Nakakatawa} options={{ title: 'NAKAKATAWA' }}/>
        <Stack.Screen name={ROUTES.MATEMATIKA} component={Matematika} options={{ title: 'MATEMATIKA' }}/>
        <Stack.Screen name={ROUTES.SALITA} component={Salita} options={{ title: 'SALITA' }}/>
        <Stack.Screen name={ROUTES.MAHIRAP} component={Mahirap} options={{ title: 'MAHIRAP' }}/>
        <Stack.Screen name={ROUTES.RANDOMTAGALOG} component={Random_tagalog} options={{ title: 'RANDOM' }} />
        <Stack.Screen name={ROUTES.HANGMAN} component={Hangman} options={{ title: 'HANGMAN' }}/>
        
        <Stack.Screen name={ROUTES.HANGMANLEVEL} component={HangmanLevel} options={{ title: 'HANGMAN' }}/>
        <Stack.Screen name={ROUTES.LEVEL2} component={Level2} options={{ title: 'Level 2' }}/>
        <Stack.Screen name={ROUTES.LEVEL3} component={Level3} options={{ title: 'Level 3' }}/>
        <Stack.Screen name={ROUTES.LEVEL4} component={Level4} options={{ title: 'Level 4' }}/>
        <Stack.Screen name={ROUTES.LEVEL5} component={Level5} options={{ title: 'Level 5' }}/>
        <Stack.Screen name={ROUTES.LEVEL6} component={Level6} options={{ title: 'Level 6' }}/>
        <Stack.Screen name={ROUTES.LEVEL7} component={Level7} options={{ title: 'Level 7' }}/>
        <Stack.Screen name={ROUTES.LEVEL8} component={Level8} options={{ title: 'Level 8' }}/>
        <Stack.Screen name={ROUTES.LEVEL9} component={Level9} options={{ title: 'Level 9' }}/>
        <Stack.Screen name={ROUTES.LEVEL10} component={Level10} options={{ title: 'Level 10' }}/>
        <Stack.Screen name={ROUTES.LEVEL11} component={Level11} options={{ title: 'Level 11' }}/>
        <Stack.Screen name={ROUTES.LEVEL12} component={Level12} options={{ title: 'Level 12' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
