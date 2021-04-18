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
export default class Register extends React.PureComponent{

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
            token:'',
            loading:false,
            loadingtoken:false,
            showtoken:false


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
    changeToken(text) {
        this.setState({
            token :text
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
        console.log("login function");
        const urlencoded = new URLSearchParams();
        urlencoded.append("username", this.state.phone);
        urlencoded.append("password", '123456');
        urlencoded.append("grant_type", "password");
        urlencoded.append("client_id", `MobileApp#${phone}#Samsung S20#1#1`);
        
        fetch('https://api.ebtekargheshm.ir/token', {
            method: 'POST',
            headers : {
            'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:urlencoded.toString(),
            })
            .then((response) => response.json())
            .then((response) => {
             
                setTimeout(() => {
                    this.setState({
                   
                      loading:false
                    })
         

                    if(response.error_description){
                        Toast.show({
                            text: "response.error_description",
                            textStyle: { color: "#fff",textAlign:'center',fontFamily:'IRANYekanMobileRegular' },
                            duration: 3000,
                            type: "danger"
                          })


                    }else if(response.userName == this.state.phone){


                        Toast.show({
                            text: "در حال بارگزاری",
                            textStyle: { color: "#fff",textAlign:'center',fontFamily:'IRANYekanMobileRegular' },
                            duration: 3000,
                            type: "success"
                          })

                          AsyncStorage.setItem('access_token',`${response.access_token}`);
                          AsyncStorage.setItem('client_secret',`${response.client_secret}`);
                          AsyncStorage.setItem('refresh_token',`${response.refresh_token}`);
                          AsyncStorage.setItem('user_phone',`${response.userName}`);
                          if(response.error_description){
                              Toast.show({
                                  text: response.error_description,
                                  textStyle: { color: "#fff",textAlign:'center',fontFamily:'IRANYekanMobileRegular' },
                                  duration: 3000,
                                  type: "danger"
                                })
      
      
                          }
                          console.log("token request");
                          this.setState({
                   
                            showtoken:true
                          })
                       

                    }


    
             
                        
                        
                    
                }, 1500) 
          
                console.log(response)
             })
            .done();

    }
   active_user() {

    this.setState({
               
        loadingtoken:true
      })

            fetch(`https://api.ebtekargheshm.ir/api/Account/ActiveUserInfo?mobileOrEmail=${this.state.phone}&code=${this.state.token}`)
            .catch()

            setTimeout(() => { 
              
                  Actions.reset('root');
            
            }, 3000) 

          

    }
    SaveUserCode = () => { 
        console.log("register function");
       
        const formData = new FormData();
        let phone = this.state.phone;
        let email = this.state.email;
        let name = this.state.name;
        let fname = this.state.fname;

       if(phone == '' || name == '' || fname == '') {
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
        console.log("register function 2 2 2 ");   
        fetch(`https://api.ebtekargheshm.ir/api/Account/SimpleRegister`, {
            method: 'POST',
            headers : {
                Accept: 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                Mobile : this.state.phone,
                Email : 'example@gmail.com',
                Name : this.state.name,
                LastName : this.state.lname,
                Password : '123456',
            })
         })
            .then((response) => response.json())
            .then((response) => {
                setTimeout(() => { 
                    this.setState({
                   
                        loading:true
                      })
                  console.log("login request");
                  this.requestlogin();
                
                }, 3000) 
         
              
              
             })
            .done();

               
               
              
              
             
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
       <Text style={{alignSelf:'center',fontFamily:'IRANYekanMobileBold',color:'#fff',fontSize:25,marginTop:80}}>ثبت نام در سیستم</Text>
       </View>

<View style={{backgroundColor:'#fff',borderRadius:5,marginTop:-160,width:'90%',alignSelf:'center',elevation:4.5,marginBottom:5}} >
{(() => {
       if(this.state.showtoken == true){
return  <>
<Form style={{alignSelf:'center',padding:20}} >
<Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:15,width:330}} >توکن را وارد کنید</Text>



       
          
          <TextInput
          returnKeyType="next"
          style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="_ _ _ _ _ " placeholderTextColor="#ccc"
          onChangeText={this.changeToken.bind(this)}
          keyboardType = 'numeric'
          value={this.state.token} />
         


        


          </Form>
        
          {(() => {
       if(this.state.loadingtoken == true){
return  <TouchableWithoutFeedback >


<View style={{width:325,height:60,borderRadius:4,backgroundColor:'#6a007e',justifyContent:'center',alignSelf:'center',marginTop:40,marginBottom:40}}>
<Spinner color="#fff" style={{alignSelf:'center',marginTop:-10}}></Spinner>
</View>
</TouchableWithoutFeedback>
      }else{
return <TouchableWithoutFeedback onPress={this.active_user.bind(this)}>


<View style={{width:325,height:60,borderRadius:4,backgroundColor:'#6a007e',justifyContent:'center',alignSelf:'center',marginTop:40,marginBottom:40}}>
<Text style={{fontFamily:'IRANYekanMobileBold',textAlign:'center',color:'#fff',fontSize:24,marginTop:-8}} >فعال سازی توکن</Text>
</View>
</TouchableWithoutFeedback>
      }
       
       })()} 

</>
      }else{
return <>

<Form style={{alignSelf:'center',padding:20}} >
<Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:15,width:330}} >شماره همراه</Text>



       
          
          <TextInput
          returnKeyType="next"
          style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="9121231212" placeholderTextColor="#ccc"
          onChangeText={this.changePhone.bind(this)}
          keyboardType = 'numeric' />


<Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:15,width:330,marginTop:15}} >نام</Text>

<TextInput
          returnKeyType="next"
          style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="علی" placeholderTextColor="#ccc"
          onChangeText={this.changename.bind(this)}
           />

<Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:15,width:330,marginTop:15}} >نام خانوادگی</Text>

<TextInput
          returnKeyType="next"
          style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="محمدی" placeholderTextColor="#ccc"
          onChangeText={this.changefamily.bind(this)}
           />
     
      
           
    
            
          
        


          </Form>
        
          {(() => {
       if(this.state.loading === true){
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

</>
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