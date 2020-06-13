/**
 *
 * FlatButton
 *
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TouchFeedback from 'theme/TouchFeedback';
import { StyleSheet } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import elevation from 'theme/elevation';

const style = StyleSheet.create({
  button: {
    backgroundColor: Colors.accentColor,
    borderRadius: Dimensions.radius3x,
    margin: Dimensions.space1x,
    padding: Dimensions.space2x,
    paddingVertical: Dimensions.space1x,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 55,
    ...elevation(1),
  },
  secondaryButton: {
    backgroundColor: Colors.accent2Color,
  },
  activeButton: {
    borderWidth: 1,
    borderColor: Colors.accent1Color,
  },
  flex: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: Colors.black,
    fontWeight: 'bold',
    maxWidth: Dimensions.screenWidth - Dimensions.space6x - 40,
  },
  secondaryLabel: {
    color: Colors.black,
  },
  activeLabel: {
    color: Colors.accent1Color,
  },
  elevated: {
    ...elevation(2),
  },
  icon: {
    minWidth: 18,
    maxWidth: 18,
    height: 16,
    fontSize: 16,
    marginRight: Dimensions.space1x,
    color: Colors.black,
  },
  secondaryIcon: {
    color: Colors.primary1Color,
  },
  activeIcon: {
    color: Colors.accent1Color,
  },
});

function FlatButton(props) {
  const animationValue = useRef(new Animated.Value(props.disabled ? 0 : 1))
    .current;

  useEffect(() => {
    Animated.timing(animationValue, {
      toValue: props.disabled ? 0 : 1,
      duration: 500,
      easing: Easing.inOut(Easing.cubic),
    }).start();
  }, [props.disabled]);

  return (
    <TouchFeedback
      animated
      style={[
        style.button,
        props.flex ? style.flex : {},
        props.secondary ? style.secondaryButton : {},
        props.active ? style.activeButton : {},
        props.elevated ? style.elevated : null,
        {
          opacity: Animated.interpolate(animationValue, {
            inputRange: [0, 1],
            outputRange: [0.5, 1],
          }),
        },
      ]}
      onPress={props.disabled ? () => null : props.onPress}
    >
      {props.icon({
        animated: true,
        style: [
          style.icon,
          props.secondary ? style.secondaryIcon : {},
          props.active ? style.activeIcon : {},
        ],
      })}
      {props.label({
        animated: true,
        style: [
          style.label,
          props.secondary ? style.secondaryLabel : {},
          props.active ? style.activeLabel : {},
        ],
        numberOfLines: 1,
      })}
    </TouchFeedback>
  );
}

FlatButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  label: PropTypes.func.isRequired,
  icon: PropTypes.func,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  flex: PropTypes.bool,
  elevated: PropTypes.bool,
  active: PropTypes.bool,
};

FlatButton.defaultProps = {
  secondary: false,
  disabled: false,
  elevated: true,
  icon: () => null,
  flex: false,
  active: false,
};
export default FlatButton;
