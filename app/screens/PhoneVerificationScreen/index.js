import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';

import PhoneNumberForm from './PhoneNumberForm';
import CodeInputForm from './CodeInputForm';
import messages from './messages';
import style from './style';
import axios from "axios";

class PhoneVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCodeInput:'',
      setShowCodeInput:'',
      country:'+213',
      setPhoneNumber:'',
      navigation: PropTypes.object.isRequired,
    };
  }

  

  handleChangePhone(){
    this.setState({ setPhoneNumber: target.value });
  }


  HandlePhoneNumber(){
    
    const CountryCode = {
      country: this.state.country
    };
    const kr_usr_phone_number = {
      kr_usr_phone_number: this.state.setPhoneNumber
    };


    axios.post(`https://sandbox.amberlly.co/krak/api/PhoneVerificator.php`, { CountryCode,kr_usr_phone_number })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })

  }


  render() {
    const {
      props,
    } = this;

    const HandlePhonechange = text => {
      setPhoneNumber(text);
      }


 

    return (
      <Screen>
        <View style={style.container}>
          <View style={style.verificationHeadingWrapper}>
            <FormattedMessage
              {...messages.verificationHeading}
              style={style.verificationHeading}
            />
          </View>
          {this.state.showCodeInput ? (
            <CodeInputForm
              confirmResult={() => null}
              onSubmit={() => null}
              onBackPress={() => this.state.setShowCodeInput(false)}
              onResend={() => null}
              navigate={this.state.navigation.navigate}
            />
          ) : (
            <PhoneNumberForm
              onSubmit={() => this.state.setShowCodeInput(true),this.HandlePhoneNumber()}
              initialPhoneNumber={''.toString()}
            />
          )}
        </View>
      </Screen>
    );
  }
}

PhoneVerification.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(PhoneVerification);
