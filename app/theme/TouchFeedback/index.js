import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

import Animated from 'react-native-reanimated';
import Colors from 'theme/Colors';

const AnimatedOpacity = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedNative = Animated.createAnimatedComponent(
  TouchableNativeFeedback,
);

const RIPPLE = Platform.OS === 'android' && Platform.Version >= 21;

function TouchFeedback(props) {
  let Component = RIPPLE ? TouchableNativeFeedback : TouchableOpacity;
  let NativeChild = View;
  if (props.animated) {
    Component = RIPPLE ? AnimatedNative : AnimatedOpacity;
    if (RIPPLE) {
      NativeChild = Animated.View;
    }
  }
  if (RIPPLE) {
    return (
      <Component
        {...props}
        background={TouchableNativeFeedback.Ripple(
          Colors.rippleColor,
          props.ripple,
        )}
      >
        <NativeChild style={props.style}>{props.children}</NativeChild>
      </Component>
    );
  }
  return <Component {...props}>{props.children}</Component>;
}

TouchFeedback.propTypes = {
  style: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.array,
  ]),
  children: PropTypes.node,
  ripple: PropTypes.bool,
  animated: PropTypes.bool,
};

TouchFeedback.defaultProps = {
  style: {},
  ripple: false,
  animated: false,
};

export default TouchFeedback;
