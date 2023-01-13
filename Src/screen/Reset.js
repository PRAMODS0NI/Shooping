import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, } from "react-native";
import Imagepath from "../Assets/Images/Imagepath";
import CustomLoader from "../Assets/Common.js/CustomLoader";
import Toast from 'react-native-simple-toast';



const Reset = (props) => {
    const [loader,setloader] = useState(false)
    const [change, setchange] = useState()
    const [Email,setEmail] = useState()
    const [otp,setotp] = useState(props.route.params.resetdata.otp)
    const [Password,setPassword] = useState()


    const changer = () => {
        setchange(!change)
    }

    const Resetapi = async () => {
        setloader(true)
        const Response = await fetch('https://product-l2rq.onrender.com/user/forgot', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: Email,
                otp:otp,
                password:Password,
            })
        })
        const json = await Response.json()
        console.log('>>>>>>>>>>', json);
        setloader(false)
        if (json.status) {
            Toast.show('password changed')
            props.navigation.navigate('Login')

        } else (
            Toast.show('wrong details'))

    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black', padding: 15 }}>
            <View style={{ width: '100%', }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ width: 50 }}>
                    <Image style={{ tintColor: 'white', width: 50, height: 50 }} source={Imagepath.back} />
                </TouchableOpacity>
            </View>

            <View style={{ width: '80%', marginTop: 50 }}>
                <Text style={{ fontSize: 50, fontWeight: '600', color: 'whitesmoke' }}>Create new password</Text>
            </View>
            <View style={{ width: '100%', backgroundColor: 'black', alignItems: 'center', marginTop: 50 }}>
                <Image source={Imagepath.p} style={{ width: 200, height: 200 }} />
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginTop: 40 }}>
                <Text style={{ fontSize: 15 }}>Please enter your Registered email ID.</Text>

                <TextInput style={{ backgroundColor: 'white', width: '85%', borderRadius: 15, padding: 10, color: 'black', fontSize: 15, fontWeight: '500', marginTop: 10,marginBottom:10 }} placeholder={'example@gmail.com'} placeholderTextColor={'grey'} onChangeText={(text) => { setEmail(text) }} />
                <Text style={{ fontSize: 15 }}>Please enter a new password</Text>

                <TextInput style={{ backgroundColor: 'white', width: '85%', borderRadius: 15, padding: 10, color: 'black', fontSize: 15, fontWeight: '500', marginTop: 10 }} placeholder={'New Password'} placeholderTextColor={'grey'} onChangeText={(text) => { setPassword(text) }} />

                <TouchableOpacity onPress={()=> Resetapi()} style={{ width: 100, height: 60, backgroundColor: 'red', borderRadius: 50, marginTop: 20, alignItems: 'center', justifyContent: 'center',borderWidth:1,borderColor:'white' }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'whiter' }}>Send</Text>
                </TouchableOpacity>
            </View>
        <CustomLoader loaderVisible={{loader}}/>
        </ScrollView>   
    )
};
export default Reset;