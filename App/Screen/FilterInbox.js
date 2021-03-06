import React from 'react';
import { View,StyleSheet, Image, Text, Button, TouchableOpacity, TouchableHighlight } from 'react-native';
import MainScreen from '../Components/MainScreen';
import PopupScreen from '../Components/PopupScreen';
import Color from '../config/Color';

function FilterInbox({props,navigation}) {
    return (
        <MainScreen>
            <View style={styles.content}>
                <Image style={styles.back}  source={require('../assets/back.png')} onPress={()=>navigation.goBack()}/>
                <Text style={styles.text}>Filter Inbox</Text>
            </View>
            <PopupScreen>
                <View style={styles.textalign}>
                <TouchableOpacity>
                <Text style={styles.text}>Inbox</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.subtext} >All</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.subtext} >Unread</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.subtext} >Sent</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                <Text style={styles.subtext} >Spam</Text>
                </TouchableOpacity>
                </View>
                
            </PopupScreen>
        </MainScreen>
    );
}
const styles = StyleSheet.create({
    content:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:40,

        },
    text:{
        fontFamily:'Montserrat-Regular',
        fontSize:23,
        color:Color.black,
        top:'-5%'
    },
    back:{
        width:70,
        height:70,
        top:'-4%'
    },
    subtext:{
        fontFamily:'Montserrat-Regular',
        fontSize:20,
        color:Color.black,
        marginTop:30
        
    },
    textalign:{
        marginLeft:20,
        justifyContent:'center',
        marginTop:25
        
    }
})

export default FilterInbox;