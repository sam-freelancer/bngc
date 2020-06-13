import { Platform } from 'react-native';
import androidDimensions from './androidDim';
import iosDimensions from './iosDim';

const dim = {
  ...Platform.select({
    ios: { ...iosDimensions },
    android: { ...androidDimensions },
  }),
};

export default dim;
