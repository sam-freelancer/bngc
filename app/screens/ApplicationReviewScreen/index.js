import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import Screen from 'components/Screen';
import FormattedMessage from 'components/FormattedMessage';
import Image from 'components/Image';
import FlatButton from 'theme/FlatButton';
import messages from './messages';
import style from './style';

class ApplicationReviewScreen extends React.Component {
  constructor(props) {
    super(props);
  } 

  render() {
    return (
      <Screen>
        <View style={style.container}>
          <Image title="user" style={style.userIconImage} resizeMode="contain" />
          <View style={style.underReviewHeadingWrapper}>
            <FormattedMessage
              {...messages.underReviewHeading}
              style={style.underReviewHeading}
            />
          </View>
          <FormattedMessage
            {...messages.termsConditions}
            style={style.termsConditions}
          />
          <FormattedMessage {...messages.description} style={style.description} />
          <View style={style.dashboardButtonHolder}>
            <FlatButton
              secondary
              onPress={() => this.navigation.navigate('LoginWeb')}
              label={(p) => (
                <FormattedMessage {...p} {...messages.dashboardButtonLabel} />
              )}
            />
          </View>
        </View>
      </Screen>
    );
  }
}

ApplicationReviewScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(ApplicationReviewScreen);
