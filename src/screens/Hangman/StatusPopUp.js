import React, {useState} from 'react';
import { View, Text, StyleSheet, Modal, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { COLORS,ROUTES } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import winImg from '../../assets/images/next.png';
import tryImg from '../../assets/images/reload.png';
import * as Animatable from 'react-native-animatable';

export default function StatusPopUp ({ status,onPress}) { 
    const src = status === 'win' ? winImg: tryImg || status === 'completed';
    const message = status === 'win' ? 'WOW! You got \nit right!' : 
        status === 'completed' ? 'Congrats you completed this level' : 'You can try \nagain!';
    const navigation = useNavigation();

    return (
    
        <Modal visible={status !== ''} animationType='fade' transparent={true}>
            <Animatable.View animation={'zoomIn'} delay={300} style={styles.modalContainer}>
                <ImageBackground
                    resizeMode="stretch"
                    style={styles.bgpic}
                    source={require('../../assets/images/bg-transparent.png')}>
                    
                    {/* <TouchableOpacity style={styles.closeButton}>
                    <Image style={styles.close}
                                source={require('../../assets/images/close.png')}/>
                    </TouchableOpacity> */}

                    <View style={styles.half}>
                        <Image style={styles.Logo}
                                source={require('../../assets/images/logo.png')}/>
                        <Text style={styles.title}>Riddle Quiz {'\n'} Game</Text>   
                        
                    </View>
                    
                    <View style={styles.popup}>
                        <View style={styles.popupcontainer}>
                            <Text style={styles.style}>{message}</Text>
                        </View>

                        <View style={styles.buttons}>

                        <TouchableOpacity style={styles.buttonstyle} 
                        onPress={() => navigation.navigate(ROUTES.HOME)}>
                            <Image style={styles.mainmenuimage} source={require('../../assets/images/main-menu.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonstyle} 
                        onPress={() => navigation.navigate(ROUTES.HANGMAN)}>
                            <Image style={styles.homeimage} source={require('../../assets/images/home.png')}/>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonstyle} onPress={onPress}>
                            <Image source={src} style={styles.statusimage}/>
                           
                        </TouchableOpacity>
                        </View>

                    </View>

                </ImageBackground>
            </Animatable.View>
        </Modal>
    
    );
}


const styles = StyleSheet.create({ 
    modalContainer:{
        flex: 1,
        backgroundColor: COLORS.hangman,
    },
    bgpic: {
        width: '100%',
        height:'100%',
    },
    half:{
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap-reverse',
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
    style:{
        fontFamily: 'mottci',
        fontSize: 24,
        textAlign: 'center',
        padding: 10
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