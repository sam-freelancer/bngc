/**
 *
 * Icon
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Animated from 'react-native-reanimated';
import Feather from 'react-native-vector-icons/Feather';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

function IconWrapper({ animated, font, ...props }) {
  let Icon = font === 'feather' ? Feather : SimpleLineIcons;
  if (font === 'ionicons') {
    Icon = Ionicons;
  }
  const AnimatedIcon = Animated.createAnimatedComponent(Icon);
  if (animated) {
    return <AnimatedIcon {...props} />;
  }
  return <Icon {...props} />;
}

IconWrapper.propTypes = {
  animated: PropTypes.bool,
  font: PropTypes.oneOf(['feather', 'simpleLine', 'ionicons']),
};

IconWrapper.defaultProps = {
  animated: false,
  font: 'feather',
};

export default IconWrapper;
