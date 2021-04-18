import React from 'react';

import {
    Image, ScrollView, StatusBar, Text, View, AsyncStorage, ImageBackground,Dimensions,StyleSheet,
    TouchableWithoutFeedback,BackHandler,Alert,FlatList,Platform,TextInput,TouchableNativeFeedback,Modal,Pressable,TouchableOpacity
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
export default class NetBuyPlan extends React.PureComponent{

    //GoPost(){Actions.posts()}
 
    componentWillMount() {
      console.log(this.props.text)
      this.getpackdata();
    }
    constructor() {
        super();
        this.state = {

            modalVisible:false,
            modalVisible2:false,
            modalVisible3:false,
            data:[],
            nets:[],
            listtitle:''


        }
    }

    getpackdata(){

      fetch(`https://api.ebtekargheshm.ir/api/Topup/GetInternetPackages?opr=${this.props.text}`)
      .then(response => response.json())
      .then(json => {
        console.log(json.Data)
          this.setState({
            data : json.Data,
          })
      })
      .catch()

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

      renderItemHour(){
        let items=[];
        let plans=this.state.data;
        //console.log(hour)
        for(let item of hour){
            items.push(
                <TouchableOpacity   onPress={() => {
                    this.setState({
                        foodlist : []
                    })
                    this.setState({
                        foodlist : item
                    })
                  


                }}>
                 <View style={{height:70,width:70,borderRadius:15,borderColor:'#ccc',borderWidth:0.5,marginTop:15}}>
                     <Image source={require('./../assets/img/inno/internet.png')} style={{ height: 35, width: 35 ,marginTop:18,alignSelf:'center'}} />
                     <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:21,marginBottom:15}}>روزانه</Text>
                </View>
                </TouchableOpacity >)
        }
        return items;
    }
    render(){
        const { data,nets} = this.state;

       
        return(
          
            <Container style={{ backgroundColor: '#FAFAFA' }}>
    

<StatusBar backgroundColor="#420688" barStyle="dark-content"/>
                <Content>
 <View style={{backgroundColor:'#7703fc',width:windowWidth,height:210,borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
<View style={{height:60,backgroundColor:'#7703fc',flexDirection:'row-reverse',justifyContent:'space-between'}}>

<Text style={{color:'#fff',textAlign:'center',marginTop:13,fontFamily:'IRANYekanMobileExtraBold',fontSize:20}}></Text>
<Pressable
           onPress={() => Actions.netbuy()}>
<Image source={require('./../assets/img/inno/download-arrow.png')} style={{ height: 23, width: 23 ,marginTop:26,marginLeft:15}} />
</Pressable>
</View>


</View>
<Text style={{fontFamily:'IRANYekanMobileBold',fontSize:28,marginTop:-140,marginLeft:18,color:'#fff'}}>خرید بسته اینترنت</Text>

<Text style={{fontFamily:'IRANYekanMobileBold',fontSize:18,marginTop:2,marginLeft:18,color:'#fff'}}>همه بسته های ایرانسل</Text>

<View style={{backgroundColor:'#fff',width:'95%',height:358,borderRadius:10,elevation:4,alignSelf:'center',marginTop:10,marginBottom:10}}>

<View style={{flexDirection:'row',marginTop:25,marginRight:15,marginLeft:15,flexWrap:'wrap',alignSelf:'center'}}>
  
{data.map((prop, key) => {
            return (
                <TouchableOpacity   onPress={() => {
                  this.setState({
                    nets : prop.m_Item2,
                    listtitle: prop.m_Item3
                })
              
                  


                }}>
                  <View style={{height:70,width:70,borderRadius:15,borderColor:'#ccc',borderWidth:0.5,margin:'3.2%',alignSelf:'center',marginBottom:27}}>
                  {(() => {
                    if(this.props.text === "MTN" ){
                      return <Image source={require('./../assets/img/inno/internet.png')} style={{ height: 35, width: 35 ,marginTop:18,alignSelf:'center'}} />
                    }else if(this.props.text === "MCI"){
                      return <Image source={require('./../assets/img/inno/internet-mci.png')} style={{ height: 35, width: 35 ,marginTop:18,alignSelf:'center'}} />
                    }else if(this.props.text === "RTT"){
                      return<Image source={require('./../assets/img/inno/internet-rt.png')} style={{ height: 35, width: 35 ,marginTop:18,alignSelf:'center'}} />
                    }
              
              })()} 
                   
                   
                     <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',fontSize:12,marginTop:21,marginBottom:15}}>{prop.m_Item3}</Text>
                </View>
           </TouchableOpacity>
          
            );
            })}
            <View style={{marginTop:50}}>

            </View>

</View>

</View>
<Text style={{marginLeft:15,marginTop:15,marginBottom:15,fontFamily:'IRANYekanMobileRegular',fontSize:20}}>{this.state.listtitle}</Text>

  
{nets.map((prop, key) => {
            return (
      

<TouchableOpacity   onPress={() => {
          
              
                  


}}>
  <View style={{width:'100%',backgroundColor:'#fff',borderColor:'#ccc',borderWidth:1}}>
 <View style={{flexDirection:'row-reverse',justifyContent:'space-between',}}>

   
                     <View style={{height:35,width:90,borderRadius:10,backgroundColor:'#cacaca',marginRight:15,marginTop:12}}>
                        <Text style={{textAlign:'center',color:'#000',fontFamily:'IRANYekanMobileRegular',marginTop:4}}>{prop.PackageCost} ریال</Text>
                    </View>
  

    
        
       

    <View style={{marginRight:15,marginTop:20,flexDirection:'row-reverse'}}>
    <Text style={{color:'#000',fontFamily:'IRANYekanMobileRegular',marginLeft:10}}>{prop.Name} - {prop.SystemName}</Text>
        {(() => {
          if(this.props.text === "MTN" ){
            return   <Image source={require('./../assets/img/inno/internet.png')} style={{ height: 25, width: 25 ,marginTop:1,alignSelf:'center',marginLeft:15}} />
          }else if(this.props.text === "MCI"){
            return   <Image source={require('./../assets/img/inno/internet-mci.png')} style={{ height: 25, width: 25 ,marginTop:1,alignSelf:'center',marginLeft:15}} />
          }else if(this.props.text === "RTT"){
            return   <Image source={require('./../assets/img/inno/internet-rt.png')} style={{ height: 25, width: 25 ,marginTop:1,alignSelf:'center',marginLeft:15}} />
          }
        })()} 
    </View> 




    </View>
    <Text style={{color:'#666',fontFamily:'IRANYekanMobileRegular',flexWrap:'wrap',marginLeft:35,marginRight:15,marginTop:10,marginBottom:15}}>{prop.PackageDesc}</Text>
    </View>
</TouchableOpacity>
          
            );
            })}
     
       






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