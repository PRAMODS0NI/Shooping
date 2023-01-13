import React from 'react';
import { StyleSheet,Text,ActivityIndicator, View, Modal,Animated,Easing, } from 'react-native';

export default class CustomLoader extends React.Component {
    constructor() {
        super();
        this.spinValue = new Animated.Value(0);

    }
    componentDidMount() {
        this.spin();

    }
    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 1600,
            useNativeDriver: true,
            easing: Easing.linear,
        }).start(() => this.spin()
        );
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });
        return (
            <View style={{flex:1,position:'absolute'}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.loaderVisible}
                onRequestClose={() => {}}>
                <View style={styles.container}>
                 <View  style={{backgroundColor:'rgba(0, 0, 0, 0.4)',paddingHorizontal:40,paddingVertical:40,borderRadius:30,borderWidth:2,borderColor:'white',  transform: [
          { rotateZ: "45deg" },
        ]}}>
                     {/* <Text style={{color:'red'}}>Please wait</Text> */}
                     <ActivityIndicator size="large" color="white" />

                    {/* <Animated.Image
                        style={[styles.ImgCss, { tintColor:'red', transform: [{ rotate: spin }] }]}
                        source={ImagePath.phone} />                     */}
                 </View>   
                </View>
               
            </Modal> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: "#00000090"},
    ImgCss: {width: 50, height: 50, resizeMode: "contain"},
    Img: {width: 40, height: 40, resizeMode: "contain"},

});