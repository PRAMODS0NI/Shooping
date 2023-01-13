import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ScrollView, } from "react-native";
import Imagepath from "../Assets/Images/Imagepath";
import CustomLoader from "../Assets/Common.js/CustomLoader";
import Toast from 'react-native-simple-toast';



const Forget = (props) => {
    const [loader, setloader] = useState(false)
    const [change, setchange] = useState()
    const [Email, setEmail] = useState()


    const changer = () => {
        setchange(!change)
    }

    const Forgetapi = async () => {
        changer()
        setloader(true)
        const Response = await fetch('https://product-l2rq.onrender.com/user/emailsendotp', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: Email,
            })
        })
        const json = await Response.json()
        console.log('>>>>>>>>>>', json);
        setloader(false)
        if (json.status) {
            Toast.show('otp sent')
            props.navigation.navigate('Otp', { userdata: json.data, type: 'forget' })

        } else (
            Toast.show('Wrong email'))

    }


    return (
        <ScrollView style={{ flex: 1, backgroundColor: 'black', padding: 15 }}>
            <View style={{ width: '100%', }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Login')} style={{ width: 50 }}>
                    <Image style={{ tintColor: 'white', width: 50, height: 50 }} source={Imagepath.back} />
                </TouchableOpacity>
            </View>

            <View style={{ width: '80%', marginTop: 50 }}>
                <Text style={{ fontSize: 50, fontWeight: '600', color: 'whitesmoke' }}>Forgot Password?</Text>
            </View>
            <View style={{ width: '100%', backgroundColor: 'black', alignItems: 'center', marginTop: 50 }}>
                <Image source={Imagepath.p} style={{ width: 200, height: 200 }} />
            </View>

            <View style={{ width: '100%', alignItems: 'center', marginTop: 40 }}>
                <Text style={{ fontSize: 15 }}>Please enter your Registered email ID.</Text>
                <TextInput style={{ backgroundColor: 'white', width: '85%', borderRadius: 15, padding: 10, color: 'black', fontSize: 15, fontWeight: '500', marginTop: 10 }} placeholder={'example@gmail.com'} placeholderTextColor={'grey'} onChangeText={(text) => { setEmail(text) }} />
                <TouchableOpacity onPress={() => Forgetapi()} style={{ width: 150, height: 60, backgroundColor: change ? 'red' : 'green', borderRadius: 50, marginTop: 20, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: 'white' }}>
                    <Text style={{ fontSize: 20, fontWeight: '800', color: 'whiter' }}>Send</Text>
                </TouchableOpacity>
            </View>
            <CustomLoader loaderVisible={{ loader }} />
        </ScrollView>
    )
};
export default Forget;