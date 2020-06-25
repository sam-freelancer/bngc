import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';

import PhoneNumberForm from './PhoneNumberForm';
import CodeInputForm from './CodeInputForm';
import messages from './messages';
import style from './style';

function PhoneVerification(props) {
  const [showCodeInput, setShowCodeInput] = useState(false);
  return (
    <Screen>
      <View style={style.container}>
        <View style={style.verificationHeadingWrapper}>
          <FormattedMessage
            {...messages.verificationHeading}
            style={style.verificationHeading}
          />
        </View>
        {showCodeInput ? (
          <CodeInputForm
            confirmResult={() => null}
            onSubmit={() => null}
            onBackPress={() => setShowCodeInput(false)}
            onResend={() => null}
            navigate={props.navigation.navigate}
          />
        ) : (
          <PhoneNumberForm
            onSubmit={() => setShowCodeInput(true)}
            initialPhoneNumber={''.toString()}
          />
        )}
      </View>
    </Screen>
  );
}

PhoneVerification.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(PhoneVerification);
