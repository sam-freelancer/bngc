/**
 *
 * Loader
 *
 */

import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const LOADER_WIDTH = 320;
const style = StyleSheet.create({
  container: {},
  // eslint-disable-next-line react-native/no-unused-styles
  normal: {
    width: LOADER_WIDTH,
    height: LOADER_WIDTH * 0.5,
    alignSelf: 'center',
  },
});

export default function Loader() {
  return (
    <View
      useNativeDriver
      animation="fadeIn"
      duration={400}
      easing="ease-in-out"
      style={style.container}
    >
      <ActivityIndicator size="large" color="#ffd700" />
    </View>
  );
}

Loader.propTypes = {};

Loader.defaultProps = {};
