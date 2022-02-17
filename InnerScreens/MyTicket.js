import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    Image,
    useColorScheme,
    View,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    BackHandler,
    KeyboardAvoidingView,
    FlatList,
    
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import DropDownPicker from 'react-native-dropdown-picker'
import { Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { color } from 'react-native-elements/dist/helpers';

const MyTicket = ({navigation}) => {
    const [open, setOpen] = useState(false);
  const [value, setValue] = useState(true);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
   return(
    <SafeAreaView>
        <View style={styles.header}>
            <Icon name='arrow-left' style={styles.headerIcon} onPress={() => navigation.goBack()}/>
            <Text style={styles.headerText}>Submit your Ticket </Text>
        </View>
        <View>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:18, top:'10%',  maxWidth:'90%', alignSelf:'center', color:'lightGrey'}}  numberOfLines={5}>We want your experience to be a perfect if you have any issue with the app or any technical problem, please submit your issues below </Text>
        </View>
        <View style={{top:'10%',borderRadius:1, borderColor:'black',width:'90%', alignSelf:'center'}}>
        <DropDownPicker
        dropDownContainerStyle={{
            backgroundColor: "#dfdfdf"
          }}
          placeholder={'select subject'}
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
</View>
           
           <TextInput style={styles.feild} underlineColor={{color:'white'}} placeholder='Describe Your Issue' placeholderTextColor={'black'}/>
           
           
           <TouchableOpacity>
           <View style={{backgroundColor:'#0fd3bb', width:'90%', height:'30%', alignSelf:'center', borderRadius:10, top:'102%'}}>
                <Text style={{alignSelf:'center', top:'20%', color:'white', fontSize:25, fontFamily:'Montserrat-Regular', }}>Submit</Text>
           </View>
           </TouchableOpacity>
    </SafeAreaView>
    )
}

export default MyTicket

const styles = StyleSheet.create({
    feild:{
    
        width:320,
        height:90,
        top:'20%',
        backgroundColor:'white',
        alignSelf:'center',
        borderWidth:1,
        padding:10,
        paddingVertical:-10,
        borderRadius:7,
        
       
      },
    todayText:{
        marginLeft:20,
        marginTop:20,
        fontSize:15,
        fontFamily:'Montserrat-Regular',
        color:'grey',
    },
    header:{
        width:"100%",
        height:"10%",
        backgroundColor:'#0fd3bb'
    },
    headerText:{
        position:'absolute',
        bottom:'30%',
        fontSize:20,
        marginLeft:'12%',
        fontWeight:'bold',
        
    },
    headerIcon:{
        position:'absolute',
        bottom:'32%',
        fontSize:20,
        marginLeft:15,
        fontWeight:'bold',
    }
}
)