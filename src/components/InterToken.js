import React from 'react';
import {
    StatusBar, View, StyleSheet, Platform, BackHandler, ScrollView, Alert, ImageBackground,
    Image, TouchableNativeFeedback, TouchableWithoutFeedback
} from "react-native";
import {
    Body, Button, Container, Content, Header, Icon, Input, Item, Left, ListItem, Radio, Right,
    Title, Text, Form, Footer, Picker, FooterTab
} from "native-base";
import {Actions} from 'react-native-router-flux';
export default class InterToken extends React.PureComponent{

    componentWillMount() {
    }
    constructor() {
        super();
        this.state = {
            numbercheck:[],
            phone : {
                value: '',
                error : ''

            },
            forgeterror :{
                error : ''
            },


        }
    }


    sendtoken(){
        let { phone  } = this.state;
        if(phone.value === '') {
            Alert.alert(
                'خطا',
                ' فیلد شماره همراه نمیتواند خالی باشد ',
                [


                    {text: 'باشه'},
                ],
                { cancelable: false }
            )
            return;
        }
        this.requrestNewPassFromApi({
            phone : phone.value,
        })
    }
    changePhoneInput(text) {
        this.setState({
            phone : {
                value : text,
                error : ''
            }
        })
    }
    async requrestNewPassFromApi(params) {
        try {
            let { phone } = params;

            fetch(`http://easy-food.ir/api/sendtoken3z/${phone}/Foodino/Social/Foodino`)
                .catch()

            Actions.intertoken({phone})

        } catch(error) {

        }
    }
    componentDidMount () {
        BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
    }

    componentWillUnmount () {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
    }

    onBackPress () {


      
        Actions.pop();
        return true;
    }
    render(){
        return(
            <ScrollView style={{backgroundColor:'#f0f3f6'}}>
            <Container style={{backgroundColor:'#f0f3f6'}}>

<StatusBar translucent={true} backgroundColor={'transparent'} />



<View style={{height:90,backgroundColor:'#fff',flexDirection:'row',justifyContent:'space-between'}}>

<View style={{marginLeft:20,marginTop:35}}>
<Text style={{fontSize:25,marginTop:-6}}>Inno</Text>
</View>

<View style={{marginRight:20,marginTop:35,flexDirection:'row'}}>
   <Image source={require('./../assets/img/chat.png')} style={{height:23,width:23,marginTop:2,marginRight:20}} ></Image> 
   <Image source={require('./../assets/img/bell.png')} style={{height:25,width:25}} ></Image> 
</View>

</View>
                  <Content>
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


                  </Content>






            </Container>
    </ScrollView>
        )
    }



}
const styles = StyleSheet.create({

    error:{
        fontSize:12,
        ...Platform.select({

            ios :{
                fontFamily:'IRANSansMobile',
            },
            android:{
                fontFamily:'IRANSansMobile_Bold',
            }
        }),
        color:'red'


    },


});