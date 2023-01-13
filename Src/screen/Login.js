import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, ImageBackground ,ToastAndroid, ScrollView} from "react-native";
import Imagepath from "../Assets/Images/Imagepath";
import CustomLoader from "../Assets/Common.js/CustomLoader";
import Toast from 'react-native-simple-toast';

const Login = (props) => {

 
    const [change, setchange] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [loader,setloader]=useState(false)



    const changer = () => {
        setchange(!change)
    }

    
    const loginapi = async () => {
        setloader(true)
        const Response = await fetch('https://product-l2rq.onrender.com/user/get', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: Email,
                password: Password,
            })

        })
        const json = await Response.json()
        console.log('>>>>>>', json);
    setloader(false)
        if (json.status == true) {
         Toast.show('login successfully')
            props.navigation.navigate('Home')
            
        } else (
            Toast.show('Wrong password or email'))



    }
   

    return (
        <ImageBackground source={Imagepath.mountain2bg} style={{flex:1}} resizeMode={'cover'}>
            {/* <View style={{ flex: 1, backgroundColor: 'rgba(150, 148, 149, 0.15)' }}> */}
            <ScrollView style={{ flex: 1,}}>
                <View style={{ width: '100%', padding: 20 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Welcome')} style={{ width: 50, }}>
                        <Image source={Imagepath.back} style={{ height: 50, width: 50, tintColor: 'white' }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Imagepath.p} style={{ width: 200, height: 200 }} />
                </View>
                <View style={{ width: '100%', alignItems: 'center' }}><Text style={{ color: 'white', fontSize: 20 }}>Welcome Back!</Text></View>
                <View style={{ width: '100%', alignItems: 'center', marginTop: 30, padding: 20 }}>

                    <View style={{ position: 'relative', width: '100%', alignItems: 'center', justifyContent: 'center', }}>
                        <TextInput style={{ width: '90%', borderBottomColor: 'white', borderBottomWidth: 2, paddingLeft: 40, fontSize: 18, alignSelf: 'center', textAlign: 'center', paddingRight: 40, fontWeight: '400' }} placeholder={'Email'} placeholderTextColor={'white'} onChangeText={(text) => { setEmail(text) }} />
                        <Image source={Imagepath.email} style={{ position: 'absolute', width: 30, height: 30, alignSelf: 'flex-start', left: 20, tintColor: 'white', }} />
                    </View>

                    <View style={{ position: 'relative', width: '100%', alignItems: 'center', justifyContent: 'center', marginTop: 40 }}>
                        <TextInput style={{ width: '90%', borderBottomColor: 'white', borderBottomWidth: 2, paddingLeft: 40, paddingRight: 40, fontSize: 18, textAlign: 'center', fontWeight: '400' }} placeholder={'Password'} placeholderTextColor={'white'} secureTextEntry={change ? false : true} onChangeText={(text) => { setPassword(text) }} />
                        <Image source={Imagepath.lock} style={{ position: 'absolute', width: 30, height: 30, alignSelf: 'flex-start', left: 20, tintColor: 'white', }} />
                        <TouchableOpacity onPress={() => changer()} style={{ position: 'absolute', alignSelf: 'flex-end', right: 18, alignItems: 'center', justifyContent: 'center', height: 50, width: 40, }}>
                            <Image source={change ? Imagepath.openeye : Imagepath.closeeye} style={{ width: 25, height: 25, tintColor: 'white', }} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: 50, }}>
                    <TouchableOpacity onPress={()=> loginapi()} style={{ width: 200, height: 60, backgroundColor: 'rgba(255, 255, 255, 0.70)', borderRadius: 30, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 25, color: 'black', fontWeight: '900' }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ width: '100%', alignItems: 'center', marginTop: 10 }}>
                        <TouchableOpacity onPress={()=> props.navigation.navigate('Forget')}>
                            <Text style={{ fontSize: 15 }}>Forgot Password?</Text>
                            </TouchableOpacity>
                    </View>
                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'center', marginTop: 100, alignItems: 'center' }}>
                        <Text>Don't have an account? </Text>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')} style={{ width: 70, height: 35, backgroundColor: 'black', borderRadius: 10, alignItems: 'center', justifyContent: 'center',borderColor:'white',borderWidth:1 }}>
                            <Text style={{ color: 'white', fontWeight: '500' }}>Signup</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                </ScrollView>
            {/* </View> */}
<CustomLoader loaderVisible={loader}/>

        </ImageBackground>
    )
};
export default Login;
