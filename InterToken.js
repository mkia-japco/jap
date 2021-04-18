import React from 'react';
import {
    StatusBar, View, StyleSheet, Platform, BackHandler, ScrollView, Alert, ImageBackground,
    Image,AsyncStorage,TouchableWithoutFeedback,TextInput,Dimensions
} from "react-native";
import {
    Body, Button, Container, Content, Header, Icon, Input, Item, Left, ListItem, Radio, Right,
    Title, Text, Form, Footer,Toast,Spinner
} from "native-base";
import {Actions} from 'react-native-router-flux';

const width = Dimensions.get('window').width; //full width
export default class InterToken extends React.PureComponent{

    componentWillMount() {
    }
    constructor() {
        super();
        this.state = {
            numbercheck:[],
            phone : '',
            name:'',
            email:'',
            fname:'',
            loading:false


        }
    }
    _checkDisplay(field) {
        return { display: field === '' ? 'none' : 'flex'}
    }
    changecode(text) {
        this.setState({
            code :text
        })
    }
    changePhone(text) {
        this.setState({
            phone :text
        })
    }
    changeemail(text) {
        this.setState({
            email :text
        })
    }
    changename(text) {
        this.setState({
            name :text
        })
    }
    changefamily(text) {
        this.setState({
            fname :text
        })
    }
   

    requestlogin = () =>{

       

    }

    SaveUserCode = () => { 
        
       
        const formData = new FormData();


       if(phone == '' || email == '') {
           Alert.alert(
               'خطا',
               ' فیلد های ورود نمیتوانند خالی باشند',
               [


                   {text: 'باشه'},
               ],
               { cancelable: false }
           )

       }else{
                
        fetch(`https://api.ebtekargheshm.ir/api/Account/ActiveUserInfo?mobileOrEmail=${this.state.phone}&code=${this.state.email}`)
        .then((response) => response.json())
        .then((response) => {
         
            setTimeout(() => {
                this.setState({
               
                  loading:false
                })
     


                if(response.Data === true){
                 
                    Actions.reset('root');

                }else{
                    Toast.show({
                        text: response.Message,
                        textStyle: { color: "#fff",textAlign:'center',fontFamily:'IRANYekanMobileRegular' },
                        duration: 3000,
                        type: "danger"
                      })
                }
                
                    

                
            }, 2500) 
      
         })

               
               
              
              
             
       }
   
   
   }

    componentDidMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
            Actions.pop() // works best when the goBack is async
          return true;
        });

      }
    
      componentWillUnmount() {
        this.backHandler.remove();
      }
    onBackPress () {


      
        return true;
    }
    render(){
        return(
           
               <Container style={{backgroundColor:'#fafafa'}}>
   
               <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
   
   
   
   
                      
   
   
   
   
   
   <Content>
       <View style={{height:300,backgroundColor:'#6a007e',borderBottomRightRadius:30,borderBottomLeftRadius:30}}>
       <Text style={{alignSelf:'center',fontFamily:'IRANYekanMobileBold',color:'#fff',fontSize:25,marginTop:80}}>فعالسازی حساب کاربری</Text>
       </View>

            <View style={{backgroundColor:'#fff',borderRadius:5,marginTop:-160,width:'90%',alignSelf:'center',elevation:4.5,marginBottom:5}} >
            <Form style={{alignSelf:'center',padding:20}} >
            <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:15,width:330}} >شماره همراه یا ایمیل</Text>



       
          
          <TextInput
          returnKeyType="next"
          style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="9121231212" placeholderTextColor="#ccc"
          onChangeText={this.changePhone.bind(this)}
          keyboardType = 'numeric'
          value={this.state.phone} />
          <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:15,width:330,marginTop:15}} >کد فعال سازی</Text>

<TextInput
          returnKeyType="next"
          style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="example@gmail.com" placeholderTextColor="#ccc"
          onChangeText={this.changeemail.bind(this)}
          />

     
      
           
    
            
          
        


          </Form>
        
          {(() => {
       if(this.state.loading == true){
return  <TouchableWithoutFeedback >


<View style={{width:325,height:60,borderRadius:4,backgroundColor:'#6a007e',justifyContent:'center',alignSelf:'center',marginTop:40,marginBottom:40}}>
<Spinner color="#fff" style={{alignSelf:'center',marginTop:-10}}></Spinner>
</View>
</TouchableWithoutFeedback>
      }else{
return <TouchableWithoutFeedback onPress={this.SaveUserCode.bind(this)}>


<View style={{width:325,height:60,borderRadius:4,backgroundColor:'#6a007e',justifyContent:'center',alignSelf:'center',marginTop:40,marginBottom:40}}>
<Text style={{fontFamily:'IRANYekanMobileBold',textAlign:'center',color:'#fff',fontSize:24,marginTop:-8}} >ثبت نام</Text>
</View>
</TouchableWithoutFeedback>
      }
       
       })()} 
       </View>



       <View style={{marginBottom:40}}>
          <TouchableWithoutFeedback onPress={()=>{Actions.login()}}>
          <Text style={{fontFamily:'IRANYekanMobileRegular',direction:'rtl',textAlign:'center',color:'#000',fontSize:16,marginTop:27}} > حساب کاربری دارید؟ <Text style={{fontFamily:'IRANYekanMobileRegular',color:'#7703fc',fontSize:16,marginRight:10,paddingRight:10,paddingLeft:10}}> وارد شوید </Text></Text>
          </TouchableWithoutFeedback>
          </View>
   </Content>
   
               </Container>
               
  

        )
    }



}
const styles = StyleSheet.create({

    error:{
        fontSize:12,
        ...Platform.select({

            ios :{
                fontFamily:'Shabnam',
            },
            android:{
                fontFamily:'Shabnam-Bold',
            }
        }),
        color:'red'


    },


});