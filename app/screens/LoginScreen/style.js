import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';

import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  container: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputHolder: {
    width: '110%',
    marginVertical: Dimensions.space1x,
  },
  formDescription: {
    fontSize: 14,
    color: Colors.white,
  },
  signInButtonHolder: {
    marginTop: Dimensions.space2x,
    width: '105%',
  },
});

export default style;
