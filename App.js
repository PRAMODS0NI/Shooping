import { View, Text,Linking, TouchableOpacityBase, TouchableOpacity } from 'react-native'
import React from 'react'
import Routes from './Src/Navigation/Routes'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Routes/>
    </View>
  )
}

export default App