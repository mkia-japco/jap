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
export default class InterLan extends React.PureComponent{

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
                      <Text style={{fontSize:28,color:'#356b8c',fontFamily:'IRANYekanMobileExtraBold',textAlign:'center',marginTop:20}}>فراموشی رمز عبور</Text>
                    <View style={{marginRight:20,marginLeft:20}}>
                    <Text style={{fontSize:19,color:'#356b8c',fontFamily:'IRANYekanMobileBold',textAlign:'right',marginRight:10,marginTop:30}}>رمز عبور جدید</Text>
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
                     
                    

</View>
<TouchableNativeFeedback onPress={()=>Actions.replace('internumber')}>
<View style={{width:'70%',height:60,borderRadius:8,backgroundColor:'#044771',alignSelf:'center',marginTop:280}}>
<Text style={{color:'#fff',fontFamily:'IRANYekanMobileBold',fontSize:22,textAlign:'center',marginTop:9}}>تایید</Text>
</View>
</TouchableNativeFeedback>
                 


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