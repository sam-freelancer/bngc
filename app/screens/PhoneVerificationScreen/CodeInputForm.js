import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import TouchFeedback from 'theme/TouchFeedback';
import FlatButton from 'theme/FlatButton';
import Countdown from 'components/Countdown';

import Icon from 'components/Icon';
import FormattedMessage from 'components/FormattedMessage';

import messages from './messages';
import style from './style';

class CodeInputForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCountryPicker: false,
      phoneNumber: '',
      confirmResult: PropTypes.any,
      onSubmit: PropTypes.func.isRequired,
      onBackPress: PropTypes.func.isRequired,
      onResend: PropTypes.func.isRequired,
      navigate: PropTypes.func.isRequired,
    }


  }

  render() {
    const {
      props,
    } = this;

    const [otpCode, setOtpCode] = useState('');
    const [allowResend, setAllowResend] = useState(false);

    return (
      <>
        <FormattedMessage
          {...messages.codeInputDescription}
          style={style.codeInputDescription}
        />
        <View style={style.codeInputWrapper}>
          <SmoothPinCodeInput
            cellSize={50}
            codeLength={4}
            cellStyle={style.cellStyle}
            cellStyleFocused={style.cellStyleFocused}
            value={otpCode}
            textStyle={style.cellTextStyle}
            onTextChange={(otp) => setOtpCode(otp)}
            autoFocus
          />
        </View>
        {allowResend ? (
          <TouchFeedback
            onPress={() => setAllowResend(false)}
            style={style.button}
          >
            <Icon name="refresh-ccw" />
            <FormattedMessage style={style.buttonLabel} {...messages.resend} />
          </TouchFeedback>
        ) : (
          <Countdown
            seconds={60}
            onComplete={() => {
              setAllowResend(true);
            }}
          />
        )}
        <FlatButton
          disabled={otpCode.length < 4}
          secondary
          onPress={() => {
            this.state.onSubmit(otpCode);
            this.state.navigate('photoVerification');
          }}
          label={(p) => <FormattedMessage {...p} {...messages.verifyCode} />}
        />
        <TouchFeedback onPress={this.state.onBackPress} style={style.button}>
          <Icon name="arrow-left" />
          <FormattedMessage style={style.buttonLabel} {...messages.back} />
        </TouchFeedback>
      </>
    );
  }
}

CodeInputForm.propTypes = {
  confirmResult: PropTypes.any,
  onSubmit: PropTypes.func.isRequired,
  onBackPress: PropTypes.func.isRequired,
  onResend: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default React.memo(CodeInputForm);
