import React,{useState} from 'react';
import {StatusBar, View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity, Modal, Animated} from 'react-native';
import { COLORS, ROUTES, IMGS } from '../../constants';
import {MatematikaModeData} from './TagalogData';

export default function Matematika({ navigation }) {
  
  const allQuestions = MatematikaModeData;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionsDisabled, setIsOptionsDisabled] = useState(false);
  const [score, setScore] = useState(0)
  const [showNextButton, setShowNextButton] = useState(false)
  const [showScoreModal, setShowScoreModal] = useState(false)

  const validateAnswer = (selectedOption) => {
    let correct_option = allQuestions[currentQuestionIndex]['correct_option'];
    setCurrentOptionSelected(selectedOption);
    setCorrectOption(correct_option);
    setIsOptionsDisabled(true);
    if(selectedOption==correct_option){
            // Set Score
            setScore(score+1)
        }
        // Show Next Button
        setShowNextButton(true)
    }
  const handleNext = () => {
        if(currentQuestionIndex== allQuestions.length-1){
            // Last Question
            // Show Score Modal
            setShowScoreModal(true)
        }else{
            setCurrentQuestionIndex(currentQuestionIndex+1);
            setCurrentOptionSelected(null);
            setCorrectOption(null);
            setIsOptionsDisabled(false);
            setShowNextButton(false);
        }
        Animated.timing(progress, {
            toValue: currentQuestionIndex+1,
            duration: 1000,
            useNativeDriver: false
        }).start(); 
    }

    const restartQuiz = () => {
        setShowScoreModal(false);

        setCurrentQuestionIndex(0);
        setScore(0);

        setCurrentOptionSelected(null);
        setCorrectOption(null);
        setIsOptionsDisabled(false);
        setShowNextButton(false);
        Animated.timing(progress, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false
        }).start(); 
    }

  const renderQuestion = () => {
    return (
    <View style={styles.puzzle}> 
        {/* QUESTION COUNT */}
        <View style={styles.numquestion}> 
          <Text style={styles.qcount}>{currentQuestionIndex+1}</Text>
          <Text style={styles.allq}>/ {allQuestions.length}</Text>
        </View>
      {/* QUESTION */}
        <View style={styles.puzzles}>
          <Text style={styles.riddlepuzzle}>{allQuestions[currentQuestionIndex]?.question}</Text>
        </View>
      </View>
    )
  }
  const renderOptions = () => {
    return (
      <View >
        {
          allQuestions[currentQuestionIndex]?.options.map(option => (
            <TouchableOpacity style={{marginHorizontal: 20,
                  borderRadius: 40,
                  borderColor:  option==correctOption 
                                ? COLORS.rightborder
                                : option==currentOptionSelected 
                                ? COLORS.wrongborder
                                : COLORS.black,
                  backgroundColor: option==correctOption 
                                ? COLORS.right 
                                : option==currentOptionSelected 
                                ? COLORS.wrong  
                                : COLORS.confusing,
                  padding:8,
                  borderWidth: 3,
                  marginBottom: 6,
                  flexDirection: 'row',
                  alignItems: 'center', 
                  justifyContent: 'space-between'}} 
              key={option}  onPress={()=> validateAnswer(option)} disabled={isOptionsDisabled}>
                <Text style={styles.textoption}> {option} </Text>

                {/* Show Check Or Cross Icon based on correct answer*/}
                {
                  option==correctOption ? (
                    <View style={{marginRight: 10}}>
                    <Image style={styles.check}
                       source={require('../../assets/images/check-mark-64px.png')}/>
                    
                    </View>
                    ): option == currentOptionSelected ? (
                    <View style={{marginRight: 15}}>
                    <Image style={styles.cross}
                       source={require('../../assets/images/cross-64px.png')}/>
                    </View>
                    ) : null
                  }                
            </TouchableOpacity>
          ))
        }
        
      </View>
    )
  }

  const renderNextButton = () => {
        if(showNextButton){
            return (
              <View style={styles.buttonunder}>
                  <TouchableOpacity style={styles.next} onPress={handleNext}>
                  <Image style={styles.logobelow}
              source={require('../../assets/images/logo.png')} />
                      <Text style={styles.nexttext}>NEXT</Text>
                      <Image style={styles.nextimg}
                source={require('../../assets/images/next.png')} />
                  </TouchableOpacity>
              </View>
            )
        }else{
            return null
        }
    }

    const [progress, setProgress] = useState(new Animated.Value(0));
    const progressAnim = progress.interpolate({
        inputRange: [0, allQuestions.length],
        outputRange: ['0%','100%']
    })
    const renderProgressBar = () => {
        return (
            <View style={{
                width: '100%',
                height: 30,
                borderRadius: 10,
                backgroundColor: COLORS.confusing,
                borderWidth: 2,
                marginTop: 15
            }}>
                <Animated.View style={[{
                    height: 27,
                    borderRadius: 8,
                    backgroundColor: COLORS.math,
                    borderWidth: 1
                },{
                    width: progressAnim
                }]}>

                </Animated.View>

            </View>
        )
    }


return (
    <View style={styles.container}>
      <ImageBackground
          resizeMode="stretch"
          style={styles.bgpic}
          source={require('../../assets/images/bg-transparent.png')}>

{/*PROGRESS BAR */}
{renderProgressBar()}

{/*RIDDLE QUESTION */}
{renderQuestion()}

{/*RIDDLE OPTIONS */}
{renderOptions()}
            
{/* NEXT BUTTON */}
{renderNextButton()}   

{/* SCORE MODAL */}
      <Modal animationType="slide"
               transparent={true}
               visible={showScoreModal}>
        <View style={styles.modalContainer}>
          <ImageBackground resizeMode="stretch" style={styles.bgpic}
            source={require('../../assets/images/bg-transparent.png')}>

            <View style={styles.half}>
                  <Image style={styles.Logo}
                          source={require('../../assets/images/logo.png')}/>
                  <Text style={styles.title}>Riddle Quiz {'\n'} Game</Text>   
            </View>

            <View style={styles.popup}>
              <View style={styles.popupcontainer}>
                  <Text style={styles.scoretext}>{ score> (allQuestions.length/2) ? 'Your score is' : 'Your score is' }</Text>

                <View style={styles.score}>
                      <Text style={{
                          fontSize: 30,
                          fontFamily: 'mottci',
                          color: score> (allQuestions.length/2) ? COLORS.rightborder : COLORS.wrongborder
                      }}>{score}</Text>
                      <Text style={{fontFamily: 'mottci',
                          fontSize: 20, color: COLORS.black
                      }}> / { allQuestions.length }</Text>
                </View>
              </View>

                  {/* Retry Quiz button */}
              <View style={styles.buttons}>

                <TouchableOpacity style={styles.buttonstyle} 
                onPress={() => navigation.navigate(ROUTES.HOME)}>
                    <Image style={styles.mainmenuimage} source={require('../../assets/images/main-menu.png')}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonstyle} 
                onPress={() => navigation.navigate(ROUTES.BUGTONG)}>
                    <Image style={styles.homeimage} source={require('../../assets/images/home.png')}/>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={restartQuiz}
                    style={styles.buttonstyle}>
                        <Image style={styles.statusimage} source={require('../../assets/images/reload.png')}/>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>
      </Modal>

       </ImageBackground>
    </View>   
  )
}


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
    height:'100%',
  },
  qcount:{
    fontFamily: 'genty',
    fontSize: 18,
    opacity: 0.6,
    marginRight: 2,
  },
  allq:{
    fontFamily: 'genty',
    fontSize: 16,
    opacity: 0.6,
  },
  puzzle:{
    marginHorizontal: 10,
    height: 250,
    backgroundColor: COLORS.confusing,
    borderRadius: 10,
    borderWidth: 3,
    marginVertical: 10,
    marginBottom: 20,
  },
  puzzles:{
    alignItems: 'center',
    justifyContent: 'center',
    height: '90%',
  },
  riddlepuzzle:{
    padding: 5,
    fontFamily: 'genty',
    fontSize: 24,
    textAlign: 'center',
    
  },
  numquestion:{
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  
  textoption:{
    fontFamily: 'chewy',
    fontSize: 24,
    marginLeft: 20,
  },


  check:{
    width: 25,
    height:30,
    justifyContent: 'space-between'
  },
  cross:{
    width: 18,
    height:18,
    justifyContent: 'space-between'
  },


  buttonunder:{
    alignItems: 'center',
    marginTop: 5,
  },
  logobelow: {
    width: 35,
    height: 30,
    alignItems: 'flex-start'
  },
  next:{
    width: '90%',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 3,
    backgroundColor: COLORS.math,
    flexDirection: 'row',
    marginTop: 10,
  },
  nexttext:{
    fontFamily: 'genty',
    fontSize: 18,
    marginRight:15,
  },
  nextimg:{
    width: 26,
    height: 18,
    marginRight: 30
  },


  modalContainer:{
    flex: 1,
    backgroundColor: COLORS.bugtong,
  },
  half:{
    flex:1.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap-reverse'
  },
  Logo:{
    width:'30%',
    height:'50%',
  },
  title:{
    fontFamily: 'chewy',
    fontSize: 35,
    textAlign: 'center'
  },
  popup:{
    flex:3.5,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }, 
  popupcontainer:{
    backgroundColor: COLORS.confusing,
    borderRadius: 10,
    borderWidth: 3,
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },


  scoretext:{
    fontSize: 24,
    fontFamily: 'mottci'
  },
  score:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 20,
    
  },

  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonstyle:{
    backgroundColor: COLORS.homebg,
    borderRadius: 10,
    borderWidth: 3,
    height: '25%',
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  mainmenuimage:{
    height: '80%',
    width: '70%',
  },
  homeimage:{
    height: '80%',
    width: '70%',
  },
  statusimage:{
    height: '80%',
    width: '70%',
  },
});


