import React, { useState,Fragment } from 'react';
import { Keyboard,
  View,
   Text,
   StyleSheet,
   SafeAreaView,
   Platform,
   KeyboardAvoidingView,
   TouchableWithoutFeedback,
   StatusBar,
   ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import FormattedMessage from 'components/FormattedMessage';
import Screen from 'components/Screen';
import Input from 'components/Input';
import FlatButton from 'theme/FlatButton';
import messages from './messages';
import style from './style';
import axios, { post } from 'axios';
import TouchFeedback from 'theme/TouchFeedback';
import { WebView } from 'react-native-webview';
import { KeyboardAwareView } from 'react-native-keyboard-aware-view'

class MainExchangeScreen extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      kr_usr_email:null,
      kr_usr_pwd: null,
      JsonResponseMsg: '',
      placeholder : '',
      messageForm : '',
      navigation: PropTypes.object.isRequired,
      visible: true,
      webViewOpacity: 0, content: '',
      webviewState:{
        canGoBack: true,
        canGoForward: true,
        loading: true,
        title: "Login",
        url: "http://140.82.46.55/control/api/graph-render.php",
      }
      
    };
   
  }
OnSubmitbtn(){
  this.setState({
    JsonResponseMsg:'Chokomani'
  });
}

handleAdd = async e =>{
await this.setState({
  placeholder: '',
  kr_usr_email : event.target.value,
  kr_usr_pwd : event.target.value
})
}

handleSubmit = e => {
  e.preventDefault();
  this.setState({JsonResponseMsg:'Chokomani'});
  let formData = new FormData();
  formData.append("kr_usr_email",this.state.kr_usr_email)
  formData.append("kr_usr_pwd",this.state.kr_usr_email)
  const url = "http://140.82.46.55/control/api/login.php";
  axios.get(url,formData)
  .then(res=> console.log(res.data,this.state.kr_usr_email,this.state.kr_usr_email))
  .catch(err=> console.log(err));
  
}
displaySpinner() {
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#000000'}}>
   <Text>AZENAZEAZJEAO</Text>
      
    </View>
  );
}


HandleUrlSettings() {
  this.props.navigation.navigate('settingsPage')
 }

 NotloggedInRedirect() {
  this.props.navigation.navigate('LoginWebError')
 }
 
 WalletRequested() {
  this.props.navigation.navigate('walletScreen')
 }


_onNavigationStateChange(webViewState){
  const WebLoginurl = "http://140.82.46.55/control/api/login.php";
  const WebLoginurlsuccess = "http://140.82.46.55/control/api/successLogin.php";
  const SettingsPage = "http://140.82.46.55/control/api/settings.php";
  const NotloggedInRedirect = "http://140.82.46.55/control/dashboard.php";
  const RedirectedDash = "http://140.82.46.55/control/";
  const WalletRequested = "http://140.82.46.55/control/wallet-requested.php";
  if (webViewState.url == SettingsPage) {
              console.log('Setting page triggered')
              console.log(webViewState.url)
              this.HandleUrlSettings()
            } else if (webViewState.url == NotloggedInRedirect) {

              console.log('User detected is not logged in redirecting to login')
              console.log(webViewState.url)
              this.NotloggedInRedirect()

               } else if (webViewState.url == RedirectedDash) {
                console.log('User detected is not logged in redirecting to login')
                console.log(webViewState.url)
                this.RedirectedDash()
               } else if (webViewState.url == WalletRequested) {
                console.log('Detected wallet page request')
                console.log(webViewState.url)
                this.WalletRequested()
               }
}


  render() {
   
    return (
      <Fragment>
  
                
    
     <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1A1A' }}>
     
      <WebView
      onLoadStart={() => this.setState({ visible: true })}
      onLoadEnd={() => this.setState({ visible: false })}
        source={{uri:this.state.webviewState.url}}
        scrollEnabled={true}
        startInLoadingState={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mixedContentMode="always"
        thirdPartyCookiesEnabled= {true}
        automaticallyAdjustContentInsets={false}
        style={{width:'100%',height:600,flexDirection: 'row',marginTop:50,backgroundColor:'black',opacity:this.state.webViewOpacity}}
        renderLoading={() => (
          <ActivityIndicator
            color='white'
            size='large'
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              jusityContent: "space-around",
              flexWrap: "wrap",
              alignContent: "center",
            }}
          />
        )}
        onLoadEnd={() => this.setState({webViewOpacity: 1})}
        onNavigationStateChange={this._onNavigationStateChange.bind(this)}
      />
    </SafeAreaView>
    
    </Fragment>
    );
  }
}

export default React.memo(MainExchangeScreen);
