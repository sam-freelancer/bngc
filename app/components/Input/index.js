/**
 *
 * Input
 *
 */

import React, { PureComponent } from 'react';
import { View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
import Loader from 'theme/Loader';

const INPUT_HEIGHT = 40;
const MULTILINE_HEIGHT = 130;

const style = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: Dimensions.space1x,
    flexDirection: 'row',
    height: INPUT_HEIGHT,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  multilineContainer: {
    height: MULTILINE_HEIGHT,
  },
  input: {
    minHeight: INPUT_HEIGHT,
    flex: 1,
    marginHorizontal: Dimensions.space2x,
    padding: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
    borderRadius: Dimensions.radius3x,
    borderWidth: 2,
    borderColor: Colors.primary1Color,
    color: Colors.accent1Color,
    backgroundColor: Colors.black,
    alignSelf: 'center',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    textAlignVertical: 'center',
    position: 'relative',
  },
  label: {
    marginHorizontal: Dimensions.space2x,
    fontWeight: '500',
    fontSize: 16,
  },
  blurStyle: {
    borderColor: Colors.primary2Color,
  },
  focusStyle: {
    borderColor: Colors.accent1Color,
  },
  multiline: {
    height: MULTILINE_HEIGHT,
    padding: Dimensions.space2x,
    textAlignVertical: 'top',
  },
  placeholderContainer: {
    position: 'absolute',
    top: 10,
    left: Dimensions.space4x,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    color: Colors.textGrey,
    fontSize: 16,
    width: Dimensions.screenWidth - Dimensions.space12x,
  },
  placeholderStyleOverride: {
    height: 0,
  },
  labeledPlaceHolder: {
    color: Colors.primary2Color,
  },
  loaderContainer: {
    position: 'absolute',
    right: Dimensions.space1x,
    height: 44,
    top: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    backgroundColor: Colors.errorBackground,
    paddingHorizontal: Dimensions.space2x,
    paddingVertical: Dimensions.space1x / 3,
    borderRadius: Dimensions.radius4x,
    color: Colors.errorForeground,
    position: 'absolute',
    bottom: -Dimensions.space3x,
    right: Dimensions.space4x,
    fontWeight: '600',
    fontSize: 13,
    overflow: 'hidden',
  },
});

class Input extends PureComponent {
  static propTypes = {
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    placeholder: PropTypes.any,
    error: PropTypes.func,
    innerRef: PropTypes.func,
    label: PropTypes.func,
    loading: PropTypes.bool,
    multiline: PropTypes.bool,
    overridePlaceholderStyle: PropTypes.bool,
    value: PropTypes.any,
  };

  static defaultProps = {
    onFocus: () => null,
    onBlur: () => null,
    placeholder: null,
    error: null,
    innerRef: () => null,
    loading: false,
    multiline: false,
    overridePlaceholderStyle: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  defaultSettings = {
    multiline: false,
    clearButtonMode: 'unless-editing',
  };

  focus() {
    if (!this.input) {
      return;
    }

    this.input.focus();
  }

  render() {
    const {
      onFocus,
      onBlur,
      placeholder,
      innerRef,
      loading,
      error,
      ...props
    } = this.props;

    return (
      <>
        {this.props.label
          ? this.props.label({
              style: style.label,
              numberOfLines: 1,
            })
          : null}
        <View
          style={[
            style.container,
            this.props.multiline
              ? style.multilineContainer
              : style.singlelineContainer,
          ]}
        >
          <TextInput
            ref={(node) => {
              this.input = node;
              innerRef(node);
            }}
            underlineColorAndroid={Colors.transparent}
            placeholderTextColor={Colors.placeholderColor}
            onFocus={() => {
              this.setState({ focused: true });
              onFocus();
            }}
            onBlur={() => {
              this.setState({ focused: false });
              onBlur();
            }}
            style={[
              this.state.focused ? style.focusStyle : style.blurStyle,
              style.input,
              props.multiline ? style.multiline : {},
            ]}
            {...this.defaultSettings}
            {...props}
            editable={!loading}
          />
          {placeholder && !this.state.focused && !this.props.value ? (
            <TouchableOpacity
              style={[
                style.placeholderContainer,
                this.props.overridePlaceholderStyle
                  ? style.placeholderStyleOverride
                  : null,
              ]}
              onPress={() => this.focus()}
            >
              {placeholder({
                style: [
                  style.placeholder,
                  this.props.label ? style.labeledPlaceHolder : null,
                ],
                numberOfLines: 3,
              })}
            </TouchableOpacity>
          ) : null}
          {error && error({ style: style.error })}
          {loading && (
            <View style={style.loaderContainer}>
              <Loader />
            </View>
          )}
        </View>
      </>
    );
  }
}

export default Input;
