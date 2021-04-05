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
export default class InterNumber extends React.PureComponent{

    componentWillMount() {
    }
    constructor() {
        super();
        this.state = {
            numbercheck:[],
            phone : '',
            name:'',
            pass:'',
            code:'98',
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
    changePass(text) {
        this.setState({
            pass :text
        })
    }
   

    SaveUserCode = () => { 
        
       
        const formData = new FormData();
        
        let phone = this.state.phone;
       
        let password = this.state.password;

       if(password == null || phone == null) {
           Alert.alert(
               'خطا',
               ' فیلد های ورود نمیتوانند خالی باشند',
               [


                   {text: 'باشه'},
               ],
               { cancelable: false }
           )

       }else{

        formData.append('username', phone)
        formData.append('password', password)
        formData.append('grant_type', 'password')
        formData.append('client_id', 'MobileApp#1234135532323232245#Samsung S20#1#1')
        
        fetch('http://79.175.148.70:6060/token', {
            method: 'POST',
            headers : {
            'Content-Type': 'multipart/form-data',
            },
            body: formData,
            })
            .then((response) => response.json())
            .then((response) => {
             
            
          
                console.log(response)
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
   <Image source={require('./../assets/img/user.png')} style={{ height: 80, width: 80,alignSelf:'center',marginTop:50 }} />
<Text style={{fontFamily:'IRANYekanMobileRegular',color:'#000',fontSize:25,marginTop:10,textAlign:'center'}}>نام اپلیکیشن</Text>


<View style={{backgroundColor:'#fff',borderRadius:5,marginTop:10,width:'90%',alignSelf:'center',elevation:4.5,marginBottom:5}} >
<Form style={{alignSelf:'center',padding:20}} >
<Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:18,width:330}} >نام کاربری (شماره همراه یا ایمیل)</Text>



       
          
          <TextInput
          returnKeyType="next"
          style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="09121231212" placeholderTextColor="#ccc"
          onChangeText={this.changePhone.bind(this)}
           />
     
      
           
    
            
            <Text style={{fontFamily:'IRANYekanMobileRegular',textAlign:'center',color:'#6a007e',fontSize:18,marginTop:15}} >رمز عبور</Text>
           
              <TextInput
              style={{textAlign:'center',fontSize:20,borderBottomColor:'#ccc',borderBottomWidth:1}} placeholder="********" placeholderTextColor="#ccc"
               onChangeText={this.changePass.bind(this)}
               secureTextEntry={true} />
        


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
<Text style={{fontFamily:'IRANYekanMobileBold',textAlign:'center',color:'#fff',fontSize:24,marginTop:-8}} >ورود</Text>
</View>
</TouchableWithoutFeedback>
      }
       
       })()} 
</View>


<Text style={{fontSize:13,fontFamily:'IRANYekanMobileRegular',lineHeight:20,color:'#988620',margin:20,textAlign:'left',marginRight:30}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>

          <TouchableWithoutFeedback onPress={()=>{Actions.register()}}>
          <Text style={{fontFamily:'IRANYekanMobileRegular',direction:'rtl',textAlign:'center',color:'#000',fontSize:16,marginTop:10}} > حساب کاربری ندارید؟ <Text style={{fontFamily:'IRANYekanMobileRegular',color:'#6a007e',fontSize:16,marginRight:10,paddingRight:10,paddingLeft:10}}> ثبت نام کنید </Text></Text>
          </TouchableWithoutFeedback>
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