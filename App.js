import React from 'react';
import {Text, View,Image} from "react-native";
import {Router, Scene,Stack} from "react-native-router-flux";
import {
  Badge,
  Body,
  Button, Card, CardItem, Container, Content, Footer, FooterTab, Form, Header, Icon, Input, Item, Left, Right,
  Thumbnail,
  Title,Spinner,Root
} from "native-base";

import Login from "./src/components/Login";
import InterToken from "./src/components/InterToken";
import InterCity from "./src/components/InterCity";
import InterLan from "./src/components/InterLan";

import Splash from "./src/components/Splash";
import Home from "./src/components/Home";




import Register from './src/components/Register';
import SimBuy from './src/components/SimBuy';
import ChargeBuy from './src/components/ChargeBuy';
import ChargeBuyPrice from './src/components/BuyChargePrice';
import NetBuy from './src/components/NetBuy';
import NetBuyPlan from './src/components/NetBuyPlan';
import WalletAdd from './src/components/WalletAdd';
import About from './src/components/About';
import Contactus from './src/components/Contactus';
import Profile from './src/components/Profile';
import OrderList from './src/components/OrderList';




export default class App extends React.PureComponent{


    render(){

  
     
     
        return(
          
          <Root>
            <Router >
              <Stack hideNavBar>
                <Stack  key="root" hideNavBar>
                

                 <Scene
                    tabBarPosition={'bottom'}
                    hideNavBar
                    key="tabbar" 
                    showLabel={false}
                    tabBarStyle={{backgroundColor:'#fff'}} >

                
                <Scene hideNavBar showLabel={false}  initial>
                <Scene  key="home" component={Home} initial />
                <Scene  key="simbuy" component={SimBuy}  />
                <Scene  key="chargebuy" component={ChargeBuy}  />
                <Scene  key="chargebuyprice" component={ChargeBuyPrice}  />
                <Scene  key="netbuy" component={NetBuy}  />
                <Scene  key="netbuyplan" component={NetBuyPlan}  />
                <Scene  key="walletadd" component={WalletAdd}  />
                <Scene  key="about" component={About}  />
                <Scene  key="contactus" component={Contactus}  />
                <Scene  key="profile" component={Profile}  />
                <Scene  key="orderlist" component={OrderList}  />
                </Scene>
              

                </Scene>
               
 
                </Stack>

                <Stack key="auth" hideNavBar>
                  <Scene key="login" component={Login} initial  back/>
                  <Scene key="register" component={Register} back/>

                </Stack>
                <Scene key="splash" component={Splash} initial back/>
                
              </Stack>
            </Router>
</Root>
        )
    }

}
