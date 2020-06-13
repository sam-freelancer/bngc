import React, { useState } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import FormattedMessage from 'components/FormattedMessage';
import Screen from 'components/Screen';
import Input from 'components/Input';
import FlatButton from 'theme/FlatButton';
import messages from './messages';
import style from './style';
import axios, { post } from 'axios';
import TouchFeedback from 'theme/TouchFeedback';
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.OnSubmitbtn= this.OnSubmitbtn.bind(this);
    this.state = {
      kr_usr_email:null,
      kr_usr_pwd: null,
      JsonResponseMsg: '',
      placeholder : '',
      navigation: PropTypes.object.isRequired,
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

  render() {
  
    return (
      <Screen useScroll={false}>
        <View style={style.container}>
          <View style={style.inputHolder}>
            <Input
              onChange={this.handleAdd.bind(this)}
              keyboardType="email-address"
              id="kr_usr_email"
              name="kr_usr_email"
              value={this.state.kr_usr_email}
              inputStyle={style.input}
              placeholder={(placeholderProps) => (
                <FormattedMessage
                {...messages.emailPlaceHolder}
                {...placeholderProps}
                />
              )}
              onFocus={() => this.setState((placeholderProps) => (
                <FormattedMessage
                {...messages.emailPlaceHolderfFocus}
                {...placeholderProps}
                />
              ))
            
            
            }
            />
          </View>
          <View style={style.inputHolder}>
            <Input
              onChange={this.handleAdd.bind(this)}
              keyboardType="default"
              id="kr_usr_pwd"
              name="kr_usr_pwd"
              value={this.state.kr_usr_pwd}
              inputStyle={style.input}
              placeholder={(placeholderProps) => (
                <FormattedMessage
                {...messages.passwordPlaceHolder}
                {...placeholderProps}
                />
              )}
              secureTextEntry
            />
          </View>
          <FormattedMessage
            {...messages.formDescription}
            style={style.formDescription}
          />
          <View style={style.signInButtonHolder} >
            <FlatButton
              secondary
              onPress = {this.handleSubmit.bind(this)}
             
              label={(p) => <FormattedMessage {...p} {...messages.signIn} />}
            />
          </View>
              <Text style={style.formDescription}>{this.state.JsonResponseMsg}</Text>

              <TouchFeedback onPress={() => this.props.navigation.navigate('MainExchange')}>
              <Text style={style.formDescription}>Don't havee an account ? register</Text>

        </TouchFeedback>
        </View>
      </Screen>
    );
  }
}


export default React.memo(LoginScreen);
