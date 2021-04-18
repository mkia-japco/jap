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
    Title,Spinner,Fab
} from "native-base";
import {Actions} from 'react-native-router-flux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class OrderList extends React.PureComponent{

    //GoPost(){Actions.posts()}
 
    componentWillMount() {
    }
    constructor() {
        super();
        this.state = {

            modalVisible:false,
            modalVisible2:false,
            modalVisible3:false


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
                <View style={{backgroundColor:'#7703fc',width:windowWidth,height:170,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
                <View style={{height:60,backgroundColor:'#7703fc',flexDirection:'row',justifyContent:'space-between'}}>

                <Text style={{color:'#fff',textAlign:'center',marginTop:13,fontFamily:'IRANYekanMobileExtraBold',fontSize:20}}></Text>
                <Pressable
                        onPress={() => Actions.home()}>
                <Image source={require('./../assets/img/inno/download-arrow.png')} style={{ height: 23, width: 23 ,marginTop:26,marginRight:15}} />
                </Pressable>
                </View>


                </View>
                <Text style={{fontFamily:'IRANYekanMobileBold',fontSize:28,marginTop:-100,marginRight:18,color:'#fff'}}> سفارشات</Text>

         
                <View style={{backgroundColor:'#fff',width:'95%',borderRadius:10,elevation:2,alignSelf:'center',marginTop:10,marginBottom:5}}>

                <View style={{flexDirection:'row-reverse',marginTop:10,marginBottom:10}}>
                    <View style={{height:37,width:80,borderRadius:6,borderWidth:1,borderColor:'#ccc',marginRight:11}}><Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',marginTop:6}}>گزینه یک</Text></View>
                    <View style={{height:37,width:80,borderRadius:6,borderWidth:1,borderColor:'#ccc',marginRight:10}}><Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',marginTop:6}}>گزینه دو</Text></View>
                    <View style={{height:37,width:80,borderRadius:6,borderWidth:1,borderColor:'#ccc',marginRight:10}}><Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',marginTop:6}}>گزینه سه</Text></View>
                </View>
                </View>

                <View style={{backgroundColor:'#fff',width:'95%',borderRadius:10,elevation:2,alignSelf:'center',marginTop:5,marginBottom:5,height:80}}>
<Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15,marginTop:10}}>نام سفارش</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15}}>تاریخ سفارش</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15}}>وضعیت سفارش</Text>
                </View>
                <View style={{backgroundColor:'#fff',width:'95%',borderRadius:10,elevation:2,alignSelf:'center',marginTop:5,marginBottom:5,height:80}}>
<Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15,marginTop:10}}>نام سفارش</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15}}>تاریخ سفارش</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15}}>وضعیت سفارش</Text>
                </View>
                <View style={{backgroundColor:'#fff',width:'95%',borderRadius:10,elevation:2,alignSelf:'center',marginTop:5,marginBottom:5,height:80}}>

                </View>
                <View style={{backgroundColor:'#fff',width:'95%',borderRadius:10,elevation:2,alignSelf:'center',marginTop:5,marginBottom:5,height:80}}>

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