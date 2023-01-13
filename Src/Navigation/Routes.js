import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screen/Welcome';
import Signup from '../screen/Signup';
import Login from '../screen/Login';
import Otp from '../screen/Otp';
import Forget from '../screen/Forget';
import Reset from '../screen/Reset';
import Home from '../screen/Home';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator> 

        <Stack.Screen name="Welcome" component={Welcome} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Otp" component={Otp} options={{headerShown:false}} />
        <Stack.Screen name="Forget" component={Forget} options={{headerShown:false}} />
        <Stack.Screen name="Reset" component={Reset} options={{headerShown:false}} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;