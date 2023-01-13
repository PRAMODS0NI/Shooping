import React from "react";
import { View,Text,TouchableOpacity,Image,TextInput, ImageBackground } from "react-native";
import Imagepath from "../Assets/Images/Imagepath";
const Welcome=(props)=>{

    return(
        <ImageBackground source={Imagepath.mountainbg} style={{flex:1,padding:'5%'}}>
            {/* <View style={{flex:1,backgroundColor:'rgba(150, 148, 149, 0.25)',padding:'5%'}}> */}
                <View style={{height:200,}}>
                <Text style={{fontSize:40,marginTop:70,alignSelf:'center'}}>𝐖𝐄𝐋𝐂𝐎𝐌𝐄</Text>
                </View>
        <View style={{width:'100%',alignSelf:'center',height:'50%',alignItems:'center'}}>
        <Image source={Imagepath.p} style={{height:200,width:200,bottom:50}}/>
        </View>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Signup')} style={{backgroundColor:'rgba(0, 0, 0, 0.5)',height:60,width:250,alignSelf:'center',borderRadius:20,marginTop:20,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:25,fontWeight:'700',color:'white',}}>Signup</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> props.navigation.navigate('Login')} style={{backgroundColor:'rgba(255, 255, 255, 0.40)',height:60,width:250,alignSelf:'center',borderRadius:20,justifyContent:'center',alignItems:'center',marginTop:20,}}>
            <Text style={{fontSize:25,fontWeight:'700',color:'black',}}>Login</Text>
            </TouchableOpacity>   

            {/* </View> */}
        </ImageBackground>
    )
};
export default Welcome;