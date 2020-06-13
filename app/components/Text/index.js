/**
 *
 * Text
 *
 */

import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';
import Colors from 'theme/Colors';

const defaultStyle = StyleSheet.create({
  fontFamily: {
    fontFamily: 'Montserrat',
    backgroundColor: Colors.transparent,
  },
});

function Text({ animated, style: componentStyles, ...props }) {
  const Component = animated ? Animated.Text : RNText;
  let style = [defaultStyle.fontFamily];
  if (componentStyles && Array.isArray(componentStyles)) {
    style = style.concat(componentStyles);
  } else if (componentStyles) {
    style.push(componentStyles);
  }
  return <Component style={style} allowFontScaling={false} {...props} />;
}

Text.propTypes = {
  children: PropTypes.any,
  animated: PropTypes.bool,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.number,
  ]),
};
Text.defaultProps = {
  children: null,
  animated: false,
};

export default Text;
