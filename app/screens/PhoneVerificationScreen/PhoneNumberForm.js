import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CountryPicker, {
  Flag,
  DARK_THEME,
} from 'react-native-country-picker-modal';

import TouchFeedback from 'theme/TouchFeedback';
import Input from 'components/Input';
import FormattedMessage from 'components/FormattedMessage';
import FlatButton from 'theme/FlatButton';
import Image from 'components/Image';
import Icon from 'components/Icon';
import messages from './messages';
import style from './style';

const initialState = {
  showCountryPicker: false,
  phoneNumber: '',
  countryCode: 'USA',
  callingCode: '+1',
};
function PhoneNumberForm(props) {
  const [state, set] = useState({
    ...initialState,
    phoneNumber: props.initialPhoneNumber,
  });
  const setState = (nextState) => set({ ...state, ...nextState });

  const { phoneNumber, countryCode, showCountryPicker, callingCode } = state;

  return (
    <>
      <Image title="otp" style={style.otpImage} resizeMode="contain" />
      <FormattedMessage
        {...messages.phoneDescription}
        style={style.phoneDescription}
      />
      <View style={style.pickerContainer}>
        <TouchFeedback
          onPress={() =>
            setState({
              showCountryPicker: true,
            })
          }
          style={style.flagHolder}
        >
          <Flag countryCode={countryCode} flagSize={24} />
          <CountryPicker
            visible={showCountryPicker}
            placeholder={callingCode}
            withFilter
            withFlag
            withAlphaFilter
            withCallingCode
            onSelect={(country) => {
              setState({
                showCountryPicker: false,
                countryCode: country.cca2,
                phoneNumber: '',
                callingCode: country?.callingCode[0]
                  ? `+${country?.callingCode[0]}`
                  : '',
              });
            }}
            theme={DARK_THEME}
          />
          <Icon name="chevron-down" style={style.countryPickerIcon} />
        </TouchFeedback>
        <View style={style.inputHolder}>
          <Input
            value={phoneNumber}
            onChangeText={(v) => {
              setState({
                phoneNumber: v,
              });
            }}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={style.submitButtonHolder}>
        <FlatButton
          secondary
          onPress={() => {
            const updatedPhone = callingCode + parseInt(phoneNumber, 10);
            props.onSubmit({
              number: updatedPhone,
              rawNumber: parseInt(phoneNumber, 10),
            });
          }}
          label={(p) => <FormattedMessage {...p} {...messages.sendCode} />}
        />
      </View>
    </>
  );
}

PhoneNumberForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialPhoneNumber: PropTypes.string,
};

export default React.memo(PhoneNumberForm);
