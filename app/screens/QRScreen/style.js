import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';

import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  qrScannerWrapper: {
    width: 200,
    height: 200,
    backgroundColor: Colors.primary1Color,
    marginVertical: Dimensions.space2x,
    borderRadius: Dimensions.radius2x,
  },
  qrScanLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.accent1Color,
    textAlign: 'center',
  },
  loginLabelHolder: {
    marginTop: Dimensions.space8x,
    borderBottomWidth: 1,
    borderColor: Colors.primaryLightColor,
    paddingBottom: Dimensions.space1x,
  },
  loginLabel: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '700',
  },
  preview: {
    width: 180,
    height: 200,
    backgroundColor: Colors.primary1Color,
    marginBottom: 20,
    borderRadius: Dimensions.radius2x,
  },
  scanButton: {
    flexDirection: 'row',
    padding: Dimensions.space1x,
    borderWidth: 1,
    borderColor: Colors.primary1Color,
    borderRadius: Dimensions.radius3x,
    marginBottom: Dimensions.space1x,
  },
  scanIcon: {
    marginRight: Dimensions.space2x,
    fontSize: 18,
    color: Colors.white,
  },
  scanLabel: {
    fontSize: 14,
    color: Colors.white,
  },
});

export default style;
