import React from 'react';

import {
    Image, ScrollView, StatusBar, Text, View, AsyncStorage, ImageBackground,Dimensions,StyleSheet,
    TouchableWithoutFeedback,BackHandler,Alert,FlatList,Platform,TextInput,TouchableNativeFeedback,Modal,Pressable
} from "react-native";
import {
    Badge,
    Body,
    Button, Card, CardItem, Container, Content, Footer, FooterTab, Form, Header, Icon, Input, Item, Left, Right,
    Thumbnail,
    Title,Spinner,Fab, Textarea,Toast
} from "native-base";
import {Actions} from 'react-native-router-flux';
import { TouchableOpacity } from 'react-native-gesture-handler';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Contactus extends React.PureComponent{

    //GoPost(){Actions.posts()}
 
    componentWillMount() {
    }
    constructor() {
        super();
        this.state = {

            modalVisible:false,
            modalVisible2:false,
            modalVisible3:false,
            title:"",
            content:""


        }
    }
    changetitle(text) {
      this.setState({
          title :text
      })
  }
  changecontent(text) {
      this.setState({
        content :text
      })
  }


  save = () => { 
    let title = this.state.title;
    let content = this.state.content;


   if(title == '' || content == '') {
       Alert.alert(
           'خطا',
           ' فیلد های ورود نمیتوانند خالی باشند',
           [


               {text: 'باشه'},
           ],
           { cancelable: false }
       )

   }else{
    this.setState({
               
        loading:true
      })


      AsyncStorage.getItem('access_token', (error, result) => {
    fetch(`https://api.ebtekargheshm.ir/api/Account/NewMessage`, {
        method: 'POST',
        headers : {
            Accept: 'application/json',
            'content-type': 'application/json',
            Authorization:`Bearer ${result}`
        },
        body: JSON.stringify({
          Message : this.state.title,
          RepliedMessageId : 2,
          Subject : this.state.content,
          RecieverUserId: 0

        })
     })
        .then((response) => response.json())
        .then((response) => {
            setTimeout(() => { 
                this.setState({
               
                    loading:true
                  })
              console.log(response);
             
            
            }, 3000) 
     
            Toast.show({
              text: "با موفقیت ارسال شد",
              textStyle: { color: "#fff",textAlign:'center',fontFamily:'IRANYekanMobileRegular' },
              duration: 3000,
              type: "success"
            })
          
          
         })
        .done();

        })  

           
        Actions.home();  
          
         
   }


}
 
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
      }
      setModalVisible2 = (visible) => {
        this.setState({ modalVisible2: visible });
      }
      setModalVisible3 = (visible) => {
        this.setState({ modalVisible3: visible });
      }
    render(){
        const { modalVisible ,modalVisible2,modalVisible3} = this.state;
      
        return(
          
            <Container style={{ backgroundColor: '#FAFAFA' }}>
    

                <StatusBar backgroundColor="#420688" barStyle="dark-content"/>
                                <Content>
                <View style={{backgroundColor:'#7703fc',width:windowWidth,height:210,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                <View style={{height:60,backgroundColor:'#7703fc',flexDirection:'row-reverse',justifyContent:'space-between'}}>

                <Text style={{color:'#fff',textAlign:'center',marginTop:13,fontFamily:'IRANYekanMobileExtraBold',fontSize:20}}></Text>
                <Pressable
                        onPress={() => Actions.home()}>
                <Image source={require('./../assets/img/inno/download-arrow.png')} style={{ height: 23, width: 23 ,marginTop:26,marginLeft:15}} />
                </Pressable>
                </View>


                </View>
                <Text style={{fontFamily:'IRANYekanMobileBold',fontSize:28,marginTop:-140,marginLeft:18,color:'#fff'}}>ارتباط با شرکت</Text>

         
                <View style={{backgroundColor:'#fff',width:'95%',borderRadius:10,elevation:2,alignSelf:'center',marginTop:10,marginBottom:5}}>
                <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:16,marginTop:20,color:'#000',textAlign:'left',lineHeight:20,marginBottom:20,marginLeft:10,marginRight:10}}>فرم ارتباط با ما </Text>
                <TextInput
          returnKeyType="next"
          style={{textAlign:'right',fontSize:16,borderColor:'#ccc',borderWidth:1,marginLeft:15,marginRight:15,borderRadius:10,}} placeholder="موضوع" placeholderTextColor="#ccc"
          onChangeText={this.changetitle()}
 />
                <Textarea multiline
                onChangeText={this.changecontent()}
                 style={{height:150,textAlign:'right',fontSize:18,borderColor:'#ccc',borderWidth:1,fontFamily:'IRANYekanMobileRegular',alignSelf:'center',width:'95%',borderRadius:10,marginTop:10
                 ,marginBottom:10}} placeholder="پیام" placeholderTextColor="#ccc"
                 />
<TouchableOpacity onPress={this.save.bind(this)}>
<View style={{height:37,width:80,borderRadius:6,backgroundColor:'#7505ff',marginRight:11,alignSelf:'flex-end',marginBottom:10}}><Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',marginTop:6,color:'#fff',}}>ثبت</Text></View>
</TouchableOpacity>            

                </View>
              



              </Content>
     
            </Container>
         

        )
    }


}
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
  
      width:'100%',
      height:'80%',
      bottom:'-25%',
      backgroundColor: "white",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 6
    },
    modalView2: {
  
        width:'100%',
        height:'100%',

        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 6
      },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });