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
class RemoteRegisterScreen extends React.Component {
  constructor(props) {
    super(props);
    this.OnSubmitbtn= this.OnSubmitbtn.bind(this);
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
        url: "https://sandbox.amberlly.co/krak/api/register-wrapper.php",
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
  const url = "https://sandbox.amberlly.co/krak/api/login.php";
  axios.get(url,formData)
  .then(res=> console.log(res.data,this.state.kr_usr_email,this.state.kr_usr_email))
  .catch(err=> console.log(err));
  
}
displaySpinner() {
  return (
    <View style={{width:'100%',height:'100%',backgroundColor:'#000000'}}>
   <Text>AZENAZEAZJEAO</Text>
      
    </View>
  )
}


hideSpinner() {
  this.setState({ visible: false });
}

HandleUrlChangeForward() {
 this.props.navigation.navigate('phoneVerification')
}

HandleUrlChangeReLogin() {
  this.props.navigation.navigate('LoginWebError')
 }

 HandleUrlSettings(){
  this.props.navigation.navigate('register')
 } 

_onNavigationStateChange(webViewState){
  const WebLoginurl = "https://sandbox.amberlly.co/krak/api/login.php";
  const RegisterFail = "https://sandbox.amberlly.co/krak/api/RegistrationFail.php";
  const RegistrationSuccess = "https://sandbox.amberlly.co/krak/api/RegistrationSuccess.php";
  const IpRegistrationFail ="https://sandbox.amberlly.co/krak/api/RegistrationFail.php";
  const IpRegistrationSuccess = "https://sandbox.amberlly.co/krak/api/RegistrationSuccess.php";
  if (webViewState.url == RegistrationSuccess) {
    console.log('Successfull registration')
    console.log(webViewState.url)
    this.HandleUrlChangeForward()
  } else if (webViewState.url == RegisterFail) {
    console.log('Fail on registration')
    console.log(webViewState.url)
    this.HandleUrlSettings()
  }else if (webViewState.url == IpRegistrationFail) {
    console.log('Fail on registration')
    console.log(webViewState.url)
    this.HandleUrlSettings()
  }else if (webViewState.url == IpRegistrationSuccess) {
    console.log('Successfull registration')
    console.log(webViewState.url)
    this.HandleUrlChangeForward()
  }

  
  
}



render() {
   
  return (
    
    <Fragment>
  
                
      <SafeAreaView style={{ flex: 0, backgroundColor: 'black' }} />
     <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
     
                 


                          <WebView
                          onLoadStart={() => this.setState({ visible: true })}
                          onLoadEnd={() => this.setState({ visible: false })}
                            source={{uri:this.state.webviewState.url}}
                            bounces={false}
                            scrollEnabled={false}
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
                  <TouchFeedback onPress={() => this.props.navigation.navigate('register')}>
              <Text style={{flex:1,justifyContent: "center",alignItems: "center",color:'white'}}>Don't havee an account ? register</Text>

        </TouchFeedback>
    </SafeAreaView>
    
    </Fragment>
    
  );
}
}


export default React.memo(RemoteRegisterScreen);
