import { Dimensions } from 'react-native';
import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';
import commons from './commons';

const window = Dimensions.get('window');

const statusBarHeight = getStatusBarHeight(true);
const headerHeight =
  statusBarHeight === 20 ? statusBarHeight + 22 : statusBarHeight;
const inputHeight = 56;

const screenHeight = window.height;
const bottomSpacing = getBottomSpace() - 15;

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
