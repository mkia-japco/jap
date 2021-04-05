import React, { Component } from 'react';
import {
    StatusBar, View, StyleSheet, Platform, BackHandler, ScrollView, Alert, ImageBackground,
    Image, TouchableNativeFeedback, TouchableWithoutFeedback
} from "react-native";
import {
    Body, Button, Container, Content, Header, Icon, Input, Item, Left, ListItem, Radio, Right,
    Title, Text, Form, Footer, Picker, FooterTab, Tab, Tabs
} from "native-base";

export default class register extends Component {
  render() {
    return (
      <>
                        <View style={{flexDirection:'row',justifyContent:'space-evenly',marginTop:30}}>

<Text style={{fontFamily:'IRANYekanMobileExtraBold',fontSize:23,color:'#356b8c',marginRight:20}}>ثبت نام</Text>
<TouchableNativeFeedback onPress={()=>Actions.replace('internumber')}>
<Text style={{fontFamily:'IRANYekanMobileExtraBold',fontSize:23,color:'#c9d1d6',marginLeft:20}}>ورود</Text>
</TouchableNativeFeedback>
</View>

<View style={{flexDirection:'row',marginTop:15,width:'90%',height:5,backgroundColor:'#c9d1d6',alignSelf:'center'}}>

</View>
<View style={{flexDirection:'row',alignSelf:'center'}}>
<View style={{flexDirection:'row',marginTop:-5,width:'45%',height:5,backgroundColor:'#356b8c',}}>

</View>
<View style={{flexDirection:'row',marginTop:-5,width:'45%',height:5,backgroundColor:'#c9d1d6',}}>

</View>
</View>

<View style={{marginRight:20,marginLeft:20}}>
<Text style={{fontSize:19,color:'#356b8c',fontFamily:'IRANYekanMobileBold',textAlign:'right',marginRight:10,marginTop:30}}>نام</Text>
<Item regular style={{backgroundColor:'#fff',borderRadius:4,elevation:0.5,marginTop:5,height:55}}>
<Input style={{fontSize:16,fontFamily:'IRANYekanMobileRegular',backgroundColor:'#fff',textAlign:'right',borderRadius:8,height:55,elevation:0.5}}
  placeholder='مثال: نیما'
  placeholderTextColor='#c9d1d6'
  keyboardType='numeric'
 />
                            
</Item>

<Text style={{fontSize:19,color:'#356b8c',fontFamily:'IRANYekanMobileBold',textAlign:'right',marginRight:10,marginTop:10}}>نام خانوادگی</Text>
<Item regular style={{backgroundColor:'#fff',borderRadius:4,elevation:0.5,marginTop:5,height:55}}>
<Input style={{fontSize:16,fontFamily:'IRANYekanMobileRegular',backgroundColor:'#fff',textAlign:'right',borderRadius:8,height:55,elevation:0.5}}
  placeholder='مثال: نیما'
  placeholderTextColor='#c9d1d6'
  keyboardType='numeric'
 />
                            
</Item>
<Text style={{fontSize:19,color:'#356b8c',fontFamily:'IRANYekanMobileBold',textAlign:'right',marginRight:10,marginTop:10}}>ایمیل</Text>
<Item regular style={{backgroundColor:'#fff',borderRadius:4,elevation:0.5,marginTop:5,height:55}}>
<Input style={{fontSize:16,fontFamily:'IRANYekanMobileRegular',backgroundColor:'#fff',textAlign:'right',borderRadius:8,height:55,elevation:0.5}}
  placeholder='مثال: نیما'
  placeholderTextColor='#c9d1d6'
  keyboardType='numeric'
 />
                            
</Item>
<Text style={{fontSize:19,color:'#356b8c',fontFamily:'IRANYekanMobileBold',textAlign:'right',marginRight:10,marginTop:10}}>رمز عبور</Text>
<Item regular style={{backgroundColor:'#fff',borderRadius:4,elevation:0.5,marginTop:5,height:55}}>
<Input style={{fontSize:16,fontFamily:'IRANYekanMobileRegular',backgroundColor:'#fff',textAlign:'right',borderRadius:8,height:55,elevation:0.5}}
  placeholder='مثال: نیما'
  placeholderTextColor='#c9d1d6'
  keyboardType='numeric'
 />
                            
</Item>
<Text style={{fontSize:19,color:'#356b8c',fontFamily:'IRANYekanMobileBold',textAlign:'right',marginRight:10,marginTop:10}}>تکرار رمز عبور</Text>
<Item regular style={{backgroundColor:'#fff',borderRadius:4,elevation:0.5,marginTop:5,height:55}}>
<Input style={{fontSize:16,fontFamily:'IRANYekanMobileRegular',backgroundColor:'#fff',textAlign:'right',borderRadius:8,height:55,elevation:0.5}}
  placeholder='مثال: نیما'
  placeholderTextColor='#c9d1d6'
  keyboardType='numeric'
 />
                            
</Item>

<View style={{flexDirection:'row',justifyContent:'space-between'}}>
 <Text style={{color:'#009afa',fontFamily:'IRANYekanMobileRegular',marginTop:20,fontSize:16}}>
  قبلا ثبت نام کرده اید؟
 </Text>
 <View style={{flexDirection:'row'}}>
 <Text style={{color:'#6c6c6c',fontFamily:'IRANYekanMobileRegular',marginTop:20,fontSize:16,marginRight:10}}>
قوانین را میپذیرم
 </Text>
     <View style={{height:25,width:25,borderRadius:8,borderColor:'#20c08d',borderWidth:1,marginTop:20,backgroundColor:'#fff'}}>
         <View style={{height:14,width:14,borderRadius:5,marginTop:5,backgroundColor:'#20c08d',alignSelf:'center'}}>

         </View>

     </View>


 </View>

</View>

</View>

<View style={{width:'70%',height:60,borderRadius:8,backgroundColor:'#044771',alignSelf:'center',marginTop:50}}>
<Text style={{color:'#fff',fontFamily:'IRANYekanMobileBold',fontSize:22,textAlign:'center',marginTop:9}}>ثبت نام</Text>
</View>
<View style={{width:'70%',height:60,borderRadius:8,backgroundColor:'#fff',alignSelf:'center',marginTop:10,borderColor:'#044771',borderWidth:1}}>
<Text style={{color:'#044771',fontFamily:'IRANYekanMobileBold',fontSize:22,textAlign:'center',marginTop:9}}>ثبت نام با گوگل</Text>
</View>                    

      </>
    );
  }
}