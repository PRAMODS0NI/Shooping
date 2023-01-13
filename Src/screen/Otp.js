import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ImageBackground, } from "react-native";
import Video from "react-native-video";
import Imagepath from "../Assets/Images/Imagepath";
import OTPTextView from "react-native-otp-textinput";
import CustomLoader from "../Assets/Common.js/CustomLoader";
import Toast from 'react-native-simple-toast';


const Otp = (props) => {

    const [Email, setEmail] = useState(props.route.params.userdata.email)
    const [otp, setotp] = useState()
    const [loader, setloader] = useState(false)

    console.log(Email);
    console.log(otp);

    const Otpapi = async () => {  
        setloader(true)
        const Response = await fetch('https://product-l2rq.onrender.com/user/veryfyotp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: Email,
                otp: otp
            })
        })      
        const json = await Response.json()
        console.log('>>>>>>>>>>', json);
        setloader(false)
        if (json.status) {

            if (props.route.params.type == 'signup') {
                Toast.show('account created successfully')
                props.navigation.navigate('Login', {type:'signup'})
            }
            else {
                props.navigation.navigate('Reset',{resetdata:json.data})
                Toast.show('set new password')
            }
        } else {
            Toast.show('Wrong otp')}

    }
    return (
        <View style={{ flex: 1 ,backgroundColor:'black'}}>
            <Video
                source={require('../Assets/Video/otpvideo.mp4')}
                style={{ width: 400, height: 225, borderBottomLeftRadius: 50, borderBottomRightRadius: 50,marginTop:50,borderTopRightRadius:50,borderTopLeftRadius:50 }}
                muted={true}
                repeat={true}
                resizeMode={'cover'}
                rate={1.0}
                ignoreSilentSwitch={"obey"}
            />

            <View style={{ width: '70%', alignSelf: 'center', height: 150, marginTop: 100 }}>

            <Text style={{fontSize:20,color:'white',alignSelf:'center',marginBottom:20}}> Enter Your <Text style={{color:'lightgreen'}}>OTP</Text></Text>

                <OTPTextView
                    pinCount={4}
                    color={'white'}
                    handleTextChange={(text) => { setotp(text) }}

                />
            </View>
            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => Otpapi()} style={{ width: 150, height: 50, backgroundColor: "white", borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: 'black', fontWeight: '400' }}>Verify</Text>
                </TouchableOpacity>
            </View>
            <CustomLoader loaderVisible={loader} />
        </View>
    )
};
export default Otp;