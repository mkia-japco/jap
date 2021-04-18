import React from 'react';
import {
    StatusBar, View, StyleSheet, Platform, BackHandler, ScrollView, Alert, ImageBackground,
    Image, TouchableNativeFeedback, TouchableWithoutFeedback,AsyncStorage,PermissionsAndroid
} from "react-native";
import {
    Body, Button, Container, Content, Header, Icon, Input, Item, Left, ListItem, Radio, Right,
    Title, Text, Form, Footer, Picker, FooterTab
} from "native-base";
import {Actions} from 'react-native-router-flux';
export default class InterCity extends React.PureComponent{

    componentWillMount() {
    }
    constructor() {
        super();
        this.state = {
        
            selected2: 'urmia'


        }
    }
    onValueChange2(value) {
        this.setState({
            selected2: value
        });
        //console.log(this.state.selected2)

    }
    

     sendtoken(){
         console.log('asdasd');
        let {selected2 } = this.state;

        if(selected2 === undefined) {
            Alert.alert(
                'خطا',
                ' شهر خود را انتخاب کنید ',
                [


                    {text: 'باشه'},
                ],
                { cancelable: false }
            )
            return;
        }
        this.requrestLoginFromApi({
            city : selected2,
            
        })
        
       
    }
    requrestLoginFromApi() {
    
            const city = this.state.selected2;
            // await AsyncStorage.setItem('user_Phone',phone);
            console.log(this.state.selected2)
            AsyncStorage.setItem('user_City',this.state.selected2);
            Actions.interlan();
    }
  

    componentDidMount () {
     
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            Actions.pop() // works best when the goBack is async
          return true;
        });
    }


    render(){
        return(
            <ScrollView style={{backgroundColor:'#fff'}}>
            <Container style={{backgroundColor:'#fff'}} >



<StatusBar backgroundColor="#fff" barStyle="dark-content"/>




                 

                           
                            <View style={{elevation:4,margin:20,marginTop:140,marginBottom:80}}>



                            <Text style={{fontFamily:'Shabnam-Bold',marginRight:30,color:'#9E9E9E'}}>شهر خودتو انتخاب کن</Text>
                            <Text style={{fontSize:40,fontFamily:'Shabnam-Bold',marginRight:30}}>کدوم شهری؟</Text>
                            
                            <Form style={{padding:30}}>
                            
                            <Text style={{textAlign:'center',color:'#000',fontSize:10,fontFamily:'Shabnam',marginBottom:10}}>
                           ایزی فود در چندین شهر فعال هست و بزودی به شهر شما هم میاد
                            </Text>
                          <View style={{backgroundColor:'#fff',fontFamily:'Shabnam',flexDirection:'row',flexWrap:'wrap'}}>
                              <TouchableNativeFeedback onPress={()=>{
                                  this.setState({
                                    selected2:'urmia'
                                  })
                                  this.requrestLoginFromApi();
                              }}><View style={{padding:7,backgroundColor:'#fff',borderRadius:20,borderColor:'#ccc',borderWidth:1,paddingLeft:20,paddingRight:20,margin:5}}><Text style={{fontFamily:'Shabnam',}}>ارومیه</Text></View></TouchableNativeFeedback>
                              <TouchableNativeFeedback onPress={()=>{
                                  this.setState({
                                    selected2:'tabriz'
                                  })
                                  this.requrestLoginFromApi();
                              }}><View style={{padding:7,backgroundColor:'#fff',borderRadius:20,borderColor:'#ccc',borderWidth:1,paddingLeft:20,paddingRight:20,margin:5}}><Text style={{fontFamily:'Shabnam',}}>تبریز</Text></View></TouchableNativeFeedback>
                              <TouchableNativeFeedback onPress={()=>{
                                  this.setState({
                                    selected2:'tehran'
                                  })
                                  this.requrestLoginFromApi();
                              }}><View style={{padding:7,backgroundColor:'#fff',borderRadius:20,borderColor:'#ccc',borderWidth:1,paddingLeft:20,paddingRight:20,margin:5}}><Text style={{fontFamily:'Shabnam',}}>تهران</Text></View></TouchableNativeFeedback>

                            
                               </View>
                              




                            </Form>
                        </View>


                






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