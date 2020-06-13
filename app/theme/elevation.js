import { Platform } from 'react-native';

export default function elevation(
  level = 1,
  shadowColor = '#779AF1',
  showBorders = true,
) {
  if (Platform.OS === 'android') {
    if (Platform.Version >= 21) {
      return {
        elevation: level * 2,
        overflow: 'hidden',
      };
    }
    if (showBorders) {
      return {
        borderWidth: 1,
        borderColor: '#779AF1',
      };
    }
  }
  if (Platform.OS === 'ios') {
    return {
      shadowColor,
      shadowOpacity: level * 0.08,
      shadowRadius: level * 2,
      shadowOffset: {
        width: 0,
        height: level * 2,
      },
      overflow: 'visible',
    };
  }
  return {};
}
