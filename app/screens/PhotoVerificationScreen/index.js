import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';
import Image from 'components/Image';
import FlatButton from 'theme/FlatButton';
import messages from './messages';
import style from './style';

function PhoneVerificationScreen(props) {
  return (
    <Screen>
      <View style={style.container}>
        <Image title="user" style={style.userIconImage} resizeMode="contain" />
        <View style={style.registrationHeadingWrapper}>
          <FormattedMessage
            {...messages.registrationHeading}
            style={style.registrationHeading}
          />
        </View>
        <FormattedMessage {...messages.description} style={style.description} />
        <View style={style.imagesWrapper}>
          <View style={style.imageView}>
            <FormattedMessage
              {...messages.userImageLabel}
              style={style.imageLabel}
            />
          </View>
          <View style={style.imageView}>
            <FormattedMessage
              {...messages.idCardImageLabel}
              style={style.imageLabel}
            />
          </View>
        </View>
        <View style={style.cameraViewWrapper}>
          <View style={style.cameraView}>
            <Image
              title="camera"
              style={style.cameraIconImage}
              resizeMode="contain"
            />
            <FormattedMessage
              {...messages.takePhotoLabel}
              style={style.takePhotoLabel}
            />
          </View>
          <View style={style.cameraView}>
            <FormattedMessage {...messages.photoName} style={style.photoName} />
            <FormattedMessage
              {...messages.reTakePhotoLabel}
              style={style.takePhotoLabel}
            />
          </View>
        </View>
        <View style={style.finishButtonHolder}>
          <FlatButton
            secondary
            onPress={() => props.navigation.navigate('applicationReview')}
            label={(p) => <FormattedMessage {...p} {...messages.finish} />}
          />
        </View>
      </View>
    </Screen>
  );
}

PhoneVerificationScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(PhoneVerificationScreen);
