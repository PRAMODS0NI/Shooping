import React, { useState } from 'react'
import { View, Text, Image, Modal, TouchableOpacity, ScrollView,FlatList } from 'react-native'
import Imagepath from '../Assets/Images/Imagepath'
import Toast from 'react-native-simple-toast';


const Home = (props) => {

  const [modal1, setmodal1] = useState(true)
  const [modal2, setmodal2] = useState(false)




    
  return (

    <View style={{ flex: 1, backgroundColor: 'white ', }}>


      {/* Modal 1 */}

      <Modal
        animationType="fade"
        transparent={true}
        visible={modal1}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setmodal1(!modal1);
        }}
      >
        <View style={{ backgroundColor: "black", width: '100%', height: '100%', }}>
       
          <View style={{ width: '100%', height: '10%', backgroundColor: 'white', alignItems: "center", justifyContent: 'space-around', flexDirection: 'row' }}>

            <TouchableOpacity onPress={() => setmodal2(false)} style={{ width: '40%', height: 50, backgroundColor: 'black', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: '300' }}>WOMEN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setmodal2(true)} style={{ width: '40%', height: 50, backgroundColor: 'black', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: '300' }}>MEN</Text>
            </TouchableOpacity>

          </View>
        
          <ScrollView style={{padding:10}} showsVerticalScrollIndicator={false}>

          <View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 
          
          <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
        <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹300</Text>
        </View>
           </View>

           <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://ik.imagekit.io/oxo134/image/tr:e-sharpen-01,h-1940,w-1460,cm-pad_resize/data/Oxollo/2June2022/S21487PDR001-1.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
           <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹370</Text>
        </View>
           </View>
          
          </View>

          <View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 
          
          <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
        <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹300</Text>
        </View>
           </View>

           <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://ik.imagekit.io/oxo134/image/tr:e-sharpen-01,h-1940,w-1460,cm-pad_resize/data/Oxollo/2June2022/S21487PDR001-1.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
           <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹370</Text>
        </View>
           </View>
          
          </View>

          <View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 
          
          <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
        <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹300</Text>
        </View>
           </View>

           <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://ik.imagekit.io/oxo134/image/tr:e-sharpen-01,h-1940,w-1460,cm-pad_resize/data/Oxollo/2June2022/S21487PDR001-1.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
           <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹370</Text>
        </View>
           </View>
          
          </View>

          <View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 
          
          <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
        <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹300</Text>
        </View>
           </View>

           <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://ik.imagekit.io/oxo134/image/tr:e-sharpen-01,h-1940,w-1460,cm-pad_resize/data/Oxollo/2June2022/S21487PDR001-1.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
           <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹370</Text>
        </View>
           </View>
          
          </View>

          <View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 
          
          <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
        <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹300</Text>
        </View>
           </View>

           <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://ik.imagekit.io/oxo134/image/tr:e-sharpen-01,h-1940,w-1460,cm-pad_resize/data/Oxollo/2June2022/S21487PDR001-1.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
           <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹370</Text>
        </View>
           </View>
          
          </View>

          <View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 
          
          <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220303/gPoS/621fd5e4f997dd03e2fdcb73/purvaja_black_%26_peach_striped_round-neck_empire_dress.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
        <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹300</Text>
        </View>
           </View>

           <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
           <Image source={{uri:('https://ik.imagekit.io/oxo134/image/tr:e-sharpen-01,h-1940,w-1460,cm-pad_resize/data/Oxollo/2June2022/S21487PDR001-1.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
           <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
           <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
           <Text style={{fontSize:14,fontWeight:'400'}}>₹370</Text>
        </View>
           </View>
          
          </View>
          </ScrollView>
        </View>
      </Modal>


      {/* MOdal 2 */}



      <Modal
        animationType="fade"
        transparent={true}
        visible={modal2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setmodal2(!modal2);
        }}
      >
        <View style={{ backgroundColor: "black", width: '100%', height: '100%', }}>

          <View style={{ width: '100%', height: '10%', backgroundColor: 'white', alignItems: "center", justifyContent: 'space-around', flexDirection: 'row' }}>

            <TouchableOpacity onPress={() => setmodal2(false)} style={{ width: '40%', height: 50, backgroundColor: 'black', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: '300' }}>WOMEN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setmodal2(true)} style={{ width: '40%', height: 50, backgroundColor: 'black', borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontSize: 25, fontWeight: '300' }}>MEN</Text>
            </TouchableOpacity>

          </View>

           
          <ScrollView style={{padding:10}} showsVerticalScrollIndicator={false}>

<View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 

<View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/-473Wx593H-461150256-green-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
<View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹450</Text>
</View>
 </View>

 <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20221220/iIHF/63a0dcf6aeb269659cf6cf4f/-473Wx593H-465465599-black-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
 <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹540</Text>
</View>
 </View>

</View>

<View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 

<View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/-473Wx593H-461150256-green-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
<View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹450</Text>
</View>
 </View>

 <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20221220/iIHF/63a0dcf6aeb269659cf6cf4f/-473Wx593H-465465599-black-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
 <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹540</Text>
</View>
 </View>

</View>

<View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 

<View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/-473Wx593H-461150256-green-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
<View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹450</Text>
</View>
 </View>

 <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20221220/iIHF/63a0dcf6aeb269659cf6cf4f/-473Wx593H-465465599-black-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
 <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹540</Text>
</View>
 </View>

</View>

<View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 

<View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/-473Wx593H-461150256-green-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
<View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹450</Text>
</View>
 </View>

 <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20221220/iIHF/63a0dcf6aeb269659cf6cf4f/-473Wx593H-465465599-black-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
 <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹540</Text>
</View>
 </View>

</View>

<View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 

<View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/-473Wx593H-461150256-green-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
<View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹450</Text>
</View>
 </View>

 <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20221220/iIHF/63a0dcf6aeb269659cf6cf4f/-473Wx593H-465465599-black-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
 <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹540</Text>
</View>
 </View>

</View>

<View  iew style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}> 

<View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20220818/22eZ/62fde1bdf997dd394c018b73/-473Wx593H-461150256-green-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
<View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹450</Text>
</View>
 </View>

 <View style={{width:180,height:230,borderWidth:2,borderColor:'white',borderRadius:10,padding:10,justifyContent:'center',alignItems:'center'}}>
 <Image source={{uri:('https://assets.ajio.com/medias/sys_master/root/20221220/iIHF/63a0dcf6aeb269659cf6cf4f/-473Wx593H-465465599-black-MODEL.jpg')}} style={{width:180,height:180,}} resizeMode={'contain'}/>
 <View style={{width:"100%",margin:10,justifyContent:'space-around',flexDirection:'row',alignItems:'center'}}>
 <Text style={{fontSize:15,fontWeight:'700'}}>Price</Text>
 <Text style={{fontSize:14,fontWeight:'400'}}>₹540</Text>
</View>
 </View>

</View>
</ScrollView>

        </View>
      </Modal>

    </View>
  )
}

export default Home