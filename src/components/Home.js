import React from 'react';

import {
    Image, ScrollView, StatusBar, Text, View, AsyncStorage, ImageBackground,Dimensions,StyleSheet,TouchableOpacity,
    TouchableWithoutFeedback,BackHandler,Alert,FlatList,Platform,TextInput,TouchableNativeFeedback,Modal,Pressable
} from "react-native";
import {
    Badge,
    Body,
    Button, Card, CardItem, Container, Content, Footer, FooterTab, Form, Header, Icon, Input, Item, Left, Right,
    Thumbnail,
    Title,Spinner,Fab
} from "native-base";
import Drawer from 'react-native-drawer';
import {Actions} from 'react-native-router-flux';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default class Home extends React.PureComponent{

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
      closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };
    render(){
        const { modalVisible ,modalVisible2,modalVisible3} = this.state;
      
        return(
          <Drawer
          ref={(ref) => this._drawer = ref}
          type="overlay"
          tapToClose={true}
          openDrawerOffset={0.4}
          panCloseMask={0.4}
          closedDrawerOffset={-4}
          content={<ScrollView style={styles.container}>
           
            <View style={{ flexDirection: 'row', marginTop: 20}}>
              <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 13, marginRight: 8, color: '#A7ACC0', marginLeft: 15, lineHeight: 22, }}>اپلیکیشن خرید سیم</Text>
      
            </View>
           
            
            
            
  
            <TouchableOpacity >
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Image source={require('./../assets/img/test/send.png')} style={{ height: 15, width: 19, marginLeft: 15 }} />
              <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#526171', marginLeft: 19, marginTop: -2.5 }}>وفاداری</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.chargebuy()}>
              <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <Image source={require('./../assets/img/test/sent.png')} style={{ height: 20, width: 20, marginLeft: 15 }} />
                <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#526171', marginLeft: 19, marginTop: -2.5 }}>خرید شارژ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.netbuy()}>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Image source={require('./../assets/img/test/poll2.png')} style={{ height: 20, width: 18, marginLeft: 15 }} />
              <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#526171', marginLeft: 19, marginTop: -2.5 }}>خرید بسته</Text>
            </View>
            </TouchableOpacity>
           
           
            <TouchableOpacity onPress={() => Actions.simbuy()}>
              <View style={{ flexDirection: 'row', marginTop: 25 }}>
                <Image source={require('./../assets/img/test/customers.png')} style={{ height: 17, width: 20, marginLeft: 15 }} />
                <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#526171', marginLeft: 19, marginTop: -2.5 }}>خرید سیم کارت</Text>
              </View>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={() => Actions.orderlist()}>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Image source={require('./../assets/img/test/birth.png')} style={{ height: 18.5, width: 20, marginLeft: 15 }} />
              <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#526171', marginLeft: 19, marginTop: -2.5 }}>سفارشات</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.contactus()}>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Image source={require('./../assets/img/test/gift.png')} style={{ height: 20, width: 20, marginLeft: 15 }} />
              <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#526171', marginLeft: 19, marginTop: -2.5 }}> ارتباط با ما</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Actions.about()}>
            <View style={{ flexDirection: 'row', marginTop: 25 }}>
              <Image source={require('./../assets/img/test/instagram.png')} style={{ height: 20, width: 20, marginLeft: 15 }} />
              <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#526171', marginLeft: 19, marginTop: -2.5 }}>درباره شرکت</Text>
            </View>
            </TouchableOpacity>
          
            
            <TouchableOpacity onPress={() => Actions.profile()}>
              <View style={{
                width: 160, height: 40,
                backgroundColor: '#D3F9D7',
                borderRadius: 3,
                alignItems: 'center',
                marginLeft: 15,
                flexDirection: 'row'
                , marginTop: 25
              }}>
                <Image source={require('./../assets/img/test/money.png')} style={{ height: 18, width: 18, marginLeft: 15 }} />
                <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#1CA520', marginTop: -3, marginLeft: 8 }}>حساب کاربری</Text>
              </View>
            </TouchableOpacity>
            <TouchableNativeFeedback >
            <View style={{
              width: 160, height: 40,
              backgroundColor: '#D9ECFF',
              borderRadius: 3,
              alignItems: 'center',
              marginLeft: 15,
              flexDirection: 'row'
              , marginTop: 10
            }}>
              <Image source={require('./../assets/img/test/question.png')} style={{ height: 18, width: 18, marginLeft: 15 }} />
              <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'left', color: '#0083D4', marginTop: -3, marginLeft: 8 }}>پشتیبانی </Text>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback >
              <View style={{
                width: 160, height: 40,
                backgroundColor: '#374DFF',
                borderRadius: 3,
                alignItems: 'center',
                justifyContent:'center',
                flexDirection: 'row',
                marginLeft: 15
                , marginTop: 10,marginBottom:50
              }}>
   
                <Text style={{ fontFamily: 'IRANYekanMobileRegular', fontSize: 14, textAlign: 'center', color: '#fff', marginTop:-3 }}>خروج</Text>
                <Image source={require('./../assets/img/test/return.png')} style={{ height: 18, width: 18, marginLeft: 15 }} />
              </View>
            </TouchableNativeFeedback>
          </ScrollView>}
          styles={{ mainOverlay: { backgroundColor: 'black', opacity: 0 } }}
          tweenHandler={(percent) => ({ mainOverlay: { opacity: percent * 0.6 } })}
  
        >
            <Container style={{ backgroundColor: '#fff' }}>


 
           

              <StatusBar backgroundColor="#420688" barStyle="dark-content"/>
                              <Content>
                              <ImageBackground source={require('./../assets/img/cirbg.png')} style={{height:190,windowWidth}} >
                              <View style={{height:60,flexDirection:'row',justifyContent:'space-between'}}>
                              <Pressable onPress={this.openControlPanel.bind(this)}>
                                <Image source={require('./../assets/img/menu.png')} style={{ height: 25, width: 25 ,marginTop:26,marginLeft:15}} />
                                </Pressable>
                                <Text style={{color:'#fff',textAlign:'center',marginTop:13,fontFamily:'IRANYekanMobileExtraBold',fontSize:20}}></Text>
                                <Pressable
                                          onPress={() => this.setModalVisible2(!modalVisible2)}>
                                <Image source={require('./../assets/img/settings.png')} style={{ height: 25, width: 25 ,marginTop:26,marginRight:15}} />
                                </Pressable>
                                
                                </View>
                                </ImageBackground>
           <View style={{height:70,width:70,borderRadius:60,backgroundColor:'red',alignSelf:'center',marginTop:-60}}>

           </View>
           <ScrollView  showsHorizontalScrollIndicator={false}   horizontal={true} decelerationRate={0}  style={{flexDirection:'row',elevation:6,marginTop:15}}>
 

             

<View style={{height:90,width:160,borderRadius:8,borderColor:'#ccc',borderWidth:1,margin:10,marginLeft:15,flexDirection:'row',justifyContent:'space-between'}}>

<View style={{marginTop:10,marginLeft:10}}>
<Text style={{fontFamily:'IRANYekanMobileRegular',}}>افزایش اعبتار</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:10.08}}>سیم کارت اعتباری</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:10.08}}>همه اپراتور ها</Text>

</View>
<Image source={require('./../assets/img/inno/sim1.png')} style={{ height: 70, width:45 ,marginTop:11,marginRight:9}} />

</View>
<View style={{height:90,width:160,borderRadius:8,borderColor:'#ccc',borderWidth:1,margin:10,flexDirection:'row',justifyContent:'space-between'}}>

<View style={{marginTop:10,marginLeft:10}}>
<Text style={{fontFamily:'IRANYekanMobileRegular',}}>افزایش اعبتار</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:10.08}}>پرداخت قبض سیم</Text>
<Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:10.08}}>کارت دایمی ایرانسل</Text>

</View>
<Image source={require('./../assets/img/inno/sim2.png')} style={{ height: 70, width:45 ,marginTop:11,marginRight:9}} />


</View>
<View style={{height:90,width:160,borderRadius:8,borderColor:'#ccc',borderWidth:1,margin:10}}></View>
               </ScrollView>
            <TouchableOpacity onPress={() => Actions.simbuy()}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:40}}>
            <View style={{flexDirection:'row'}}>
            <View style={{height:60,width:60,borderRadius:50,backgroundColor:'#6c0080',marginLeft:15}}><Image source={require('./../assets/img/inno/remote.png')} style={{ height: 60, width: 60,borderRadius:50 }} /></View>
            <View style={{marginLeft:15}}>
            <Text style={{fontFamily:'IRANYekanMobileBold',textAlign:'left',fontSize:18}}>خرید سیم کارت</Text>
            <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'left',fontSize:12,marginTop:3,color:'#666'}}>ایرانسل</Text>
            </View>
            </View>
               <View style={{width:90,height:45,borderRadius:30,backgroundColor:'#eee',marginRight:15,marginTop:6}}>
               <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:16,marginTop:6,color:'#000'}}>خرید</Text>
               </View>

           </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => Actions.chargebuy()}>
           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
          
            <View style={{flexDirection:'row'}}>
            <View style={{height:60,width:60,borderRadius:50,backgroundColor:'#6c0080',marginLeft:15}}><Image source={require('./../assets/img/inno/share.png')} style={{ height: 60, width: 60,borderRadius:50 }} /></View>
            <View style={{marginLeft:15}}>
            <Text style={{fontFamily:'IRANYekanMobileBold',textAlign:'right',fontSize:18}}>شارز سیم کارت</Text>
            <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'left',fontSize:12,marginTop:3,color:'#666'}}>شارژ همه اپراتور ها</Text>
            </View>
            </View>
               <View style={{width:90,height:45,borderRadius:30,backgroundColor:'#eee',marginRight:15,marginTop:6}}>
               <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:16,marginTop:6,color:'#000'}}>خرید</Text>
               </View>
          
           </View>
           </TouchableOpacity>
           <TouchableOpacity onPress={() => Actions.netbuy()}>
           <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
            <View style={{flexDirection:'row'}}>
            <View style={{height:60,width:60,borderRadius:50,backgroundColor:'#6c0080',marginLeft:15}}><Image source={require('./../assets/img/inno/database.png')} style={{ height: 60, width: 60,borderRadius:50 }} /></View>
            <View style={{marginLeft:15}}>
            <Text style={{fontFamily:'IRANYekanMobileBold',textAlign:'right',fontSize:18}}>بسته اینترنتی</Text>
            <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'left',fontSize:12,marginTop:3,color:'#666'}}>خرید بسته اینترنتی</Text>
            </View>
            </View>
               <View style={{width:90,height:45,borderRadius:30,backgroundColor:'#eee',marginRight:15,marginTop:6}}>
               <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:16,marginTop:6,color:'#000'}}>خرید</Text>
               </View>

           </View>
           </TouchableOpacity>
            
           <View style={{width:'90%',height:140,borderRadius:17,backgroundColor:'#000',alignSelf:'center',marginTop:50}}>
                    <Image source={require('./../assets/img//inno/bnn.png')} style={{ height: 140,width:'100%',borderRadius:17 }} />
                    </View>
                    <View style={{width:'90%',height:85,borderRadius:17,backgroundColor:'#000',alignSelf:'center',marginTop:20}}>
                    <Image source={require('./../assets/img/5840.jpg')} style={{ height: 85,width:'100%',borderRadius:17 }} />
                    </View>
                    <View style={{width:'90%',height:85,borderRadius:17,backgroundColor:'#000',alignSelf:'center',marginTop:20}}>
                    <Image source={require('./../assets/img/5840.jpg')} style={{ height: 85,width:'100%',borderRadius:17 }} />
                    </View>

             

             


                




             
              </Content>
              <Footer>
          <FooterTab style={{backgroundColor:'#Fafafa',borderTopColor:'#ccc',borderTopWidth:1,elevation:2,flexDirection:'row-reverse'}}>
            
          <Button>
           <Image source={require('./../assets/img/inno/user.png')} style={{ height: 25,width:25 }} />
            </Button>
            <Button >
            <Image source={require('./../assets/img/inno/menu.png')} style={{ height: 25,width:25 }} />
            </Button>
            
            <Button>
         <Image source={require('./../assets/img/inno/show.png')} style={{ height: 25,width:25 }} />
            </Button>
            <Button>
            <Image source={require('./../assets/img/inno/home.png')} style={{ height: 25,width:25 }} />
            </Button>
          </FooterTab>
        </Footer>
            </Container>

         </Drawer>

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
    img: {
      width: '82%',
      elevation: 2.5,
  
    },
    container: {
      flex: 1,
      padding: 10,
  
      backgroundColor: '#fff',
    },
    controlText: {
      color: '#000',
      textAlign: 'left',
      marginLeft: 15,
      fontSize: 22
    },
    button: {
      backgroundColor: '#000',
      borderWidth: 1,
      borderColor: '#fff',
      padding: 10,
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