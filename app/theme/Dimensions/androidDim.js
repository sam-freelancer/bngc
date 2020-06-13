import { Dimensions } from 'react-native';
import ExtraDimensions from 'react-native-extra-dimensions-android';

import commons from './commons';

const window = Dimensions.get('window');
const screen = Dimensions.get('screen');

const statusBarHeight = ExtraDimensions.getStatusBarHeight();
const headerHeight = statusBarHeight;
const inputHeight = 56;

const screenHeight = screen.height;
const bottomSpacing = ExtraDimensions.getSoftMenuBarHeight() + 30;

const dim = {
  ...commons,
  headerHeight,
  screenWidth: window.width,
  screenHeight,
  statusBarHeight,
  bottomSpacing,
  inputHeight,
};

export default dim;
