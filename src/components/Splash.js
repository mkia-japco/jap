import React from 'react';
import {Container, Spinner, Text, View} from "native-base";
import {Image, StatusBar, AsyncStorage, ImageBackground,Alert,NetInfo,Platform,Linking } from "react-native";
import {Actions} from 'react-native-router-flux';

export default class Splash extends React.Component{
    constructor() {
        super();
        this.state = {

            version:'',
       




        }

    }
    
    componentDidMount(){
   
       
     
       
                setTimeout(() => {
            
            
                    Actions.reset('auth');
                }, 2000)
        
       
      

    }
    GoToApp() {
        const versionName = '4.3.5';
        const versionCode = 60;
       
            
            fetch(`http://easy-food.ir/api/get/ver/info/all/arrayz/vername/${versionName}/vercode/${versionCode}`)
                .then(response => response.json())
                .then(json => {this.setState({version : json.data})

                 


                })
                .catch()
      
      
        const version = this.state.version;
      
        AsyncStorage.getItem('user_Phone', (error , result) => {
         

                if (result) {
                  
                    if( this.state.version == "1" ){
                      
                       
                       

                    }else if( version == "2" ){
                   
                        Alert.alert(
                            'بروزرسانی',
                            'برای فودینو نسخه جدید منتشر شده است در صورت نیاز آن را دریافت کنید',
                            [
                                {text: 'بعدا', onPress: () =>  Actions.reset('root')},
                                {text: 'کافه بازار',onPress: () =>  Linking.openURL(`https://cafebazaar.ir/app/ir.foodinoapp.foodino`),style: 'cancel',},
                                {text: 'گوگل پلی',onPress: () =>  Linking.openURL(`https://play.google.com/store/apps/details?id=ir.foodinoapp.foodino`),style: 'cancel',},
            
            
                            ],
                            { cancelable: false }
                        )
                    }else if( version == "3" ){
                     
                        Alert.alert(
                            'بروزرسانی مهم',
                            'برای فودینو نسخه جدید و مهمی منتشر شده است لطفا آن را دریافت و نصب کنید.',
                            [
                                
                              {text: 'کافه بازار',onPress: () =>  Linking.openURL(`https://cafebazaar.ir/app/ir.foodinoapp.foodino`),style: 'cancel',},
                              {text: 'گوگل پلی',onPress: () =>  Linking.openURL(`https://play.google.com/store/apps/details?id=ir.foodinoapp.foodino`),style: 'cancel',},
                              
                            ],
                            {cancelable: false},
                          );
                          
                          
                   
        
                    }else{
                        setTimeout(() => {
            
            
                            Actions.reset('root');
                        }, 1000)
                    }
                   
                } else {
                    setTimeout(() => {
            
            
                        Actions.reset('auth');
                    }, 2000)
                    
                    
                }
           

           
         
        })
    }
    getUsernameRequest() {
        const versionName = '4.3.5';
        const versionCode = 60;
       
            console.log('m1-0')
            fetch(`http://easy-food.ir/api/get/ver/info/all/arrayz/vername/${versionName}/vercode/${versionCode}`)
                .then(response => response.json())
                .then(json => {this.setState({version : json.data})

                    console.log('m1-1')
                    console.log(this.state.version)


                })
                .catch()
      




    }
    render(){
        return(
            <Container > 
                <StatusBar translucent={true} backgroundColor={'transparent'} />
               <View>
               <Spinner color='#000' style={{marginTop:'90%'}} />  
               </View>
            </Container>

        )
    }
 


}
