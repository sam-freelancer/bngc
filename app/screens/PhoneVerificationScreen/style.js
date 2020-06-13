import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';

import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  verificationHeadingWrapper: {
    padding: Dimensions.space2x,
    borderWidth: 2,
    borderColor: Colors.accent1Color,
    borderRadius: Dimensions.radius3x,
    marginVertical: Dimensions.space2x,
  },
  otpImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginLeft: Dimensions.space8x,
    marginBottom: Dimensions.space4x,
  },
  verificationHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent1Color,
  },
  phoneDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.white,
    marginHorizontal: Dimensions.space3x,
  },
  pickerContainer: {
    marginHorizontal: Dimensions.space2x,
    paddingVertical: Dimensions.space4x,
    flexDirection: 'row',
  },
  flagHolder: {
    flexDirection: 'row',
    marginLeft: Dimensions.space1x,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.black,
    borderWidth: 2,
    borderColor: Colors.primary1Color,
    height: 40,
    borderRadius: Dimensions.radius2x,
    padding: Dimensions.space1x,
  },
  countryPickerIcon: {
    fontSize: 16,
    marginLeft: 3,
    marginRight: -3,
    color: Colors.white,
  },
  inputHolder: {
    flex: 1,
  },
  submitButtonHolder: {
    width: Dimensions.screenWidth - 200,
  },
  actionButtonsHolder: {
    flexDirection: 'row',
    marginVertical: Dimensions.space3x,
  },
  codeInputWrapper: {
    marginVertical: Dimensions.space4x,
  },
  cellStyle: {
    borderBottomWidth: 2,
    borderColor: Colors.primary1Color,
  },
  cellStyleFocused: {
    borderColor: Colors.white,
  },
  cellTextStyle: {
    fontSize: 44,
    fontFamily: 'Montserrat',
    color: Colors.accent1Color,
  },
  errorWrapper: {
    padding: Dimensions.space2x,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    fontSize: 16,
    color: Colors.errorBackground,
    textAlign: 'center',
  },
  buttonLabel: {
    fontSize: 18,
    color: Colors.white,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Dimensions.space2x,
    borderRadius: Dimensions.radius3x,
    marginVertical: Dimensions.space1x,
  },
  codeInputDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: Colors.white,
    marginHorizontal: Dimensions.space3x,
  },
});

export default style;
