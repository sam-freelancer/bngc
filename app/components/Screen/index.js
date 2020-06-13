import React from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { isTablet } from 'react-native-device-info';
import Image from 'components/Image';
import FormattedMessage from 'components/FormattedMessage';
import messages from './messages';
import style from './style';

function Screen(props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.keyboardAvoidingViewStyle}
    >
      <ScrollView
        contentContainerStyle={[
          style.container,
          !props.useScroll ? style.withoutScroll : null,
          isTablet() ? style.tabletView : null,
        ]}
      >
        <View style={style.header}>
          <Image title="logo" style={style.logo} resizeMode="contain" />
        </View>
        {props.children}
        <View style={style.footer}>
          <FormattedMessage
            {...messages.footerLabel}
            style={style.footerLabel}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  useScroll: PropTypes.bool,
};
Screen.defaultProps = {
  useScroll: true,
};

export default Screen;
