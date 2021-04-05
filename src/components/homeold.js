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
    render(){
        const { modalVisible ,modalVisible2,modalVisible3} = this.state;
      
        return(
          
            <Container style={{ backgroundColor: '#FAFAFA' }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible}
                presentationStyle={'pageSheet'}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    this.setModalVisible(!modalVisible);
                  }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView}>
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
                  <Pressable
                  onPress={() => this.setModalVisible(!modalVisible)}>
          <Image source={require('./../assets/img/close.png')} style={{ height: 17, width: 17 }} />
                  </Pressable>
            <View style={{flexDirection:'row-reverse'}}>
            <Image source={require('./../assets/img/menu.png')} style={{ height: 20, width: 20 }} />
            <Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15,fontSize:15}}>خدمات</Text>
            </View>
            
              </View>
              <View style={{width:'100%',height:1,backgroundColor:'#ccc'}}></View>
                  <ScrollView>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                  <View style={{height:70,width:70,borderRadius:25,marginLeft:20,marginTop:15}}>
                  <Image source={require('./../assets/img/inno/offline.png')} style={{ height: 70, width: 70 }} />
                  <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>محصول</Text>
                  </View>
                  <View style={{height:70,width:70,borderRadius:25,borderColor:'#ccc',borderWidth:0.5,marginTop:15}}>
                  <Image source={require('./../assets/img/inno/database.png')} style={{ height: 70, width: 70 }} />
                  <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>بسته اینترنت</Text>
                  </View>
                  <View style={{height:70,width:70,borderRadius:25,borderColor:'#ccc',borderWidth:0.5,marginTop:15}}>
                  <Image source={require('./../assets/img/inno/share.png')} style={{ height: 70, width: 70 }} />
                  <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>خرید  شارژ</Text>
                  </View>
                  <View style={{height:70,width:70,borderRadius:25,marginRight:20,marginTop:15}}>
                  <Image source={require('./../assets/img/inno/remote.png')} style={{ height: 70, width: 70 }} />
                  <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}> سیم کارت</Text>
                  </View>
                  </View>
                  <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:30}}>
                  <View style={{height:70,width:70,borderRadius:18,marginLeft:20,marginTop:15,borderColor:'#ccc',borderWidth:0.5,}}>

                  </View>
                  <View style={{height:70,width:70,borderRadius:18,borderColor:'#ccc',borderWidth:0.5,marginTop:15,borderColor:'#ccc',borderWidth:0.5,}}>

                  </View>
                  <View style={{height:70,width:70,borderRadius:18,borderColor:'#ccc',borderWidth:0.5,marginTop:15,borderColor:'#ccc',borderWidth:0.5,}}>

                  </View>
                  <View style={{height:70,width:70,borderRadius:18,marginRight:20,marginTop:15,borderColor:'#ccc',borderWidth:0.5,}}>

                  </View>
                  </View>
                  </ScrollView>
                  
                  </View>
                </View>
              </Modal>

              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible2}
                presentationStyle={'pageSheet'}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    this.setModalVisible2(!modalVisible2);
                  }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView2}>
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
                  <Pressable
                  onPress={() => this.setModalVisible2(!modalVisible2)}>
                <Image source={require('./../assets/img/close.png')} style={{ height: 17, width: 17 }} />
                        </Pressable>
                  <View style={{flexDirection:'row-reverse'}}>
                  <Image source={require('./../assets/img/tabbar/settings.png')} style={{ height: 20, width: 20 }} />
                  <Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15,fontSize:15}}>تنظیمات</Text>
                  </View>
            
                  </View>
                  <View style={{width:'100%',height:1,backgroundColor:'#ccc'}}></View>
                  <View style={{flexDirection:'row-reverse'}}>
                  <Image source={require('./../assets/img/inno/paper-plane.png')} style={{marginTop:20, height: 20, width: 20,marginRight:15 }} />
                  <Pressable onPress={()=>{
                this.setModalVisible2(!modalVisible2),
                Actions.contactus()
                }
                 } >
                    <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:17,marginTop:15,marginRight:15}}>ارتباط با شرکت</Text>
</Pressable>


                  </View>
                  <View style={{flexDirection:'row-reverse'}}>
                  <Image source={require('./../assets/img/inno/info.png')} style={{marginTop:20, height: 20, width: 20,marginRight:15 }} />
                  <Pressable onPress={()=>{
                this.setModalVisible2(!modalVisible2),
                Actions.about()
                }
                 } >
                  <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:17,marginTop:15,marginRight:15}}>درباره شرکت</Text>  
                  </Pressable>
                  </View>
                      </View>
                    </View>
              </Modal>
              <Modal
                animationType="slide"
                transparent={true}
                visible={this.state.modalVisible3}
                presentationStyle={'pageSheet'}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    this.setModalVisible3(!modalVisible3);
                  }}
              >
                <View style={styles.centeredView}>
                  <View style={styles.modalView2}>
              <View style={{flexDirection:'row',justifyContent:'space-between',margin:20}}>
                  <Pressable
                  onPress={() => this.setModalVisible3(!modalVisible3)}>
                <Image source={require('./../assets/img/close.png')} style={{ height: 17, width: 17 }} />
                        </Pressable>
                  <View style={{flexDirection:'row-reverse'}}>
                  <Image source={require('./../assets/img/inno/profile.png')} style={{ height: 20, width: 20 }} />
                  <Text style={{fontFamily:'IRANYekanMobileRegular',marginRight:15,fontSize:15}}>حساب کاربری</Text>
                  </View>
            
              </View>
              <View style={{width:'100%',height:1,backgroundColor:'#ccc'}}></View>
              <View style={{width:'100%',height:1,backgroundColor:'#ccc'}}></View>
                <View style={{flexDirection:'row-reverse'}}>
                <Image source={require('./../assets/img/inno/pie-chart.png')} style={{marginTop:20, height: 20, width: 20,marginRight:15 }} />
                <Pressable onPress={()=>{
                this.setModalVisible3(!modalVisible3),
                Actions.orderlist()
                }
                 } >
                  <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:17,marginTop:15,marginRight:15}}>گزارش خرید</Text>
                  </Pressable>
                </View>
             
                <View style={{flexDirection:'row-reverse'}}>
                <Image source={require('./../assets/img/inno/walletx.png')} style={{marginTop:20, height: 20, width: 20,marginRight:15 }} />
                <Pressable onPress={()=>{
                this.setModalVisible3(!modalVisible3),
                Actions.walletadd()
                }
                 } >
                  <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:17,marginTop:15,marginRight:15}}>افزایش اعتبار کیف</Text>
                  </Pressable>
                </View>
               
                <View style={{flexDirection:'row-reverse'}}>
                <Image source={require('./../assets/img/inno/userx.png')} style={{marginTop:20, height: 20, width: 20,marginRight:15 }} />
                <Pressable onPress={()=>{
                this.setModalVisible3(!modalVisible3),
                Actions.profile()
                }
                 } >
                  <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:17,marginTop:15,marginRight:15}}>ویرایش پروفایل</Text>
                  </Pressable>
                </View>
                  
                  </View>
                </View>
              </Modal>

              <StatusBar backgroundColor="#420688" barStyle="dark-content"/>
                              <Content>
              <View style={{backgroundColor:'#7703fc',width:windowWidth,height:250,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
              <View style={{height:60,backgroundColor:'#7703fc',flexDirection:'row',justifyContent:'space-between'}}>
              <Pressable
                        onPress={() => this.setModalVisible2(!modalVisible2)}>
              <Image source={require('./../assets/img/settings.png')} style={{ height: 25, width: 25 ,marginTop:26,marginLeft:15}} />
              </Pressable>
              <Text style={{color:'#fff',textAlign:'center',marginTop:13,fontFamily:'IRANYekanMobileExtraBold',fontSize:20}}></Text>
              <Pressable
                        onPress={() => this.setModalVisible3(!modalVisible3)}>
              <Image source={require('./../assets/img/inno/user.png')} style={{ height: 23, width: 23 ,marginTop:26,marginRight:15}} />
              </Pressable>
              </View>


              </View>
              <Text style={{fontFamily:'IRANYekanMobileBold',fontSize:28,marginTop:-180,marginRight:18,color:'#fff'}}></Text>
              <View style={{backgroundColor:'#fff',width:'95%',height:200,borderRadius:10,elevation:4,alignSelf:'center',marginTop:10,marginBottom:10}}>
                  <ImageBackground source={require('./../assets/img/inno/bg.jpg')} style={{height:200,width:'100%'}} imageStyle={{borderRadius:10}}>
                      <View style={{marginLeft:'5%',flexDirection:'row-reverse'}}>
                          <View style={{height:38,width:38,borderRadius:25,backgroundColor:'#420688',marginTop:15}}></View>
                      <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:19,marginTop:15,marginBottom:15,color:'#fff',marginRight:'15%'}}>کیف پول من</Text>
                      </View>
                      <View style={{flexDirection:'row-reverse',alignSelf:'center'}}>
                        
                      <Text style={{fontFamily:'IRANYekanMobileBold',fontSize:24,marginTop:15,marginBottom:15,color:'#fff'}}>18500000 ریال</Text>
                      </View>

                      <View style={{flexDirection:'row',}}>
                        
                      <Text style={{fontFamily:'IRANYekanMobileRegular',fontSize:15,marginTop:38,color:'#000',marginLeft:15}}>افزایش اعتبار</Text>
                      </View>
                  
                  </ImageBackground>
        
                      

                    </View>


                    <View style={{backgroundColor:'#fff',width:'100%',height:600,marginTop:20,marginBottom:10,borderTopColor:'#ccc',borderTopWidth:0.5,}}>

                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View style={{height:70,width:70,borderRadius:25,marginLeft:20,marginTop:15}}>
                    <Image source={require('./../assets/img/inno/offline.png')} style={{ height: 70, width: 70 }} />
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>محصول</Text>
                    </View>
                    <View style={{height:70,width:70,borderRadius:25,borderColor:'#ccc',borderWidth:0.5,marginTop:15}}>
                    <Pressable onPress={()=>Actions.netbuy()}>
                    <Image source={require('./../assets/img/inno/database.png')} style={{ height: 70, width: 70 }} />
                    </Pressable>
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>بسته اینترنت</Text>
                    </View>
                    <View style={{height:70,width:70,borderRadius:25,borderColor:'#ccc',borderWidth:0.5,marginTop:15}}>
                    <Pressable onPress={()=>Actions.chargebuy()}>
                    <Image source={require('./../assets/img/inno/share.png')} style={{ height: 70, width: 70 }} />
                    </Pressable>
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>خرید  شارژ</Text>
                    </View>
                    <View style={{height:70,width:70,borderRadius:25,marginRight:20,marginTop:15}}>
                      <Pressable onPress={()=>Actions.simbuy()}>
                        
                    <Image source={require('./../assets/img/inno/remote.png')} style={{ height: 70, width: 70 }} />
                    </Pressable>
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}> سیم کارت</Text>
                    </View>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:25}}>
                    <Pressable

                            onPress={() => this.setModalVisible(true)}
                          >
                    <View style={{height:70,width:70,borderRadius:15,borderColor:'#ccc',borderWidth:0.5,marginLeft:20,marginTop:15}}>
                    <Image source={require('./../assets/img/inno/menu.png')} style={{ height: 40, width: 40 ,marginTop:15,alignSelf:'center'}} />
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:21,marginBottom:15}}>بیشتر</Text>
                    </View>
                    </Pressable>
                    <View style={{height:70,width:70,borderRadius:25,marginTop:15}}>
                    <Image source={require('./../assets/img/inno/setting.png')} style={{ height: 70, width: 70 }} />
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>سرویس</Text>
                    </View>
                    <View style={{height:70,width:70,borderRadius:25,marginTop:15}}>
                    <Image source={require('./../assets/img/inno/credit-card.png')} style={{ height: 70, width: 70 }} />
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>سرویس</Text>
                    </View>
                    <View style={{height:70,width:70,borderRadius:25,marginRight:20,marginTop:15}}>
                    <Image source={require('./../assets/img/inno/release.png')} style={{ height: 70, width: 70 }} />
                    <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:5,marginBottom:15}}>سرویس</Text>
                    </View>
                    </View>


                    <View style={{width:'90%',height:85,borderRadius:17,backgroundColor:'#000',alignSelf:'center',marginTop:80}}>
                    <Image source={require('./../assets/img/5840.jpg')} style={{ height: 85,width:'100%',borderRadius:17 }} />
                    </View>
                    <View style={{width:'90%',height:85,borderRadius:17,backgroundColor:'#000',alignSelf:'center',marginTop:20}}>
                    <Image source={require('./../assets/img/5840.jpg')} style={{ height: 85,width:'100%',borderRadius:17 }} />
                    </View>
                    <View style={{width:'90%',height:85,borderRadius:17,backgroundColor:'#000',alignSelf:'center',marginTop:20}}>
                    <Image source={require('./../assets/img/5840.jpg')} style={{ height: 85,width:'100%',borderRadius:17 }} />
                    </View>




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