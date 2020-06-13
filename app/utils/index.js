import { Dimensions } from 'react-native';
export function isInt(n) {
  return Number(n) === n && n % 1 === 0;
}

export function isFloat(n) {
  return Number(n) === n && n % 1 !== 0;
}

export const isPortrait = () => {
  const dim = Dimensions.get('screen');
  return dim.height >= dim.width;
};
