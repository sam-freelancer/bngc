import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';
import TouchFeedback from 'theme/TouchFeedback';
import Icon from 'components/Icon';
import messages from './messages';
import style from './style';

function QRScreen(props) {
  const camera = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  return (
    <Screen useScroll={false}>
      <View style={style.container}>
        {showCamera ? (
          <>
            <RNCamera
              ref={camera}
              style={style.preview}
              type={RNCamera.Constants.Type.back}
              flashMode={RNCamera.Constants.FlashMode.on}
              androidCameraPermissionOptions={{
                title: 'Permission to use camera',
                message: 'We need your permission to use your camera',
                buttonPositive: 'Ok',
                buttonNegative: 'Cancel',
              }}
              ratio="4:4"
            />
            <TouchFeedback
              onPress={() => {
                setShowCamera(false);
                props.navigation.navigate('remoteRegister');
              }}
              style={style.scanButton}
            >
              <Icon name="check-square" style={style.scanIcon} />
              <FormattedMessage style={style.scanLabel} {...messages.scan} />
            </TouchFeedback>
          </>
        ) : (
          <TouchFeedback
            style={style.qrScannerWrapper}
            onPress={() => setShowCamera(true)}
          />
        )}

        <TouchFeedback onPress={() => props.navigation.navigate('register')}>
          <FormattedMessage
            {...messages.qrScanLabel}
            style={style.qrScanLabel}
          />
        </TouchFeedback>
        <TouchFeedback
          onPress={() => props.navigation.navigate('LoginWeb')}
          style={style.loginLabelHolder}
        >
          <FormattedMessage {...messages.loginLabel} style={style.loginLabel} />
        </TouchFeedback>
      </View>
    </Screen>
  );
}

QRScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(QRScreen);
