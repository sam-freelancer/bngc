import React, { useState } from 'react';
// import PropTypes from "prop-types";
import { View } from 'react-native';

import CountryPicker, {
  Flag,
  DARK_THEME,
} from 'react-native-country-picker-modal';

import TouchFeedback from 'theme/TouchFeedback';
import Input from 'components/Input';
import Icon from 'components/Icon';

import style from './style';

const initialState = {
  showCountryPicker: false,
  phoneNumber: '',
  countryCode: 'GB',
  callingCode: '+44',
};
function PhoneNumberInput() {
  const [state, set] = useState({
    ...initialState,
    phoneNumber: '',
  });
  const setState = (nextState) => set({ ...state, ...nextState });

  const { phoneNumber, countryCode, showCountryPicker, callingCode } = state;
  return (
    <>
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
    </>
  );
}

PhoneNumberInput.propTypes = {
  // navigation: PropTypes.object
};
// PhoneNumberInput.defaultProps = {
//   navigation: {}
// };

export default React.memo(PhoneNumberInput);
