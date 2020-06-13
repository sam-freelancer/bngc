import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';

import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  userIconImage: {
    width: 100,
    height: 100,
  },
  underReviewHeadingWrapper: {
    padding: Dimensions.space2x,
    borderWidth: 2,
    borderColor: Colors.accent1Color,
    borderRadius: Dimensions.radius3x,
    marginVertical: Dimensions.space2x,
  },
  underReviewHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent1Color,
    textAlign: 'center',
  },
  description: {
    fontSize: 12,
    color: Colors.white,
    textAlign: 'left',
    lineHeight: 18,
    margin: Dimensions.space2x,
  },
  termsConditions: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: Colors.lightTextGrey,
  },
  dashboardButtonHolder: {
    width: Dimensions.screenWidth - 20,
  },
});

export default style;
