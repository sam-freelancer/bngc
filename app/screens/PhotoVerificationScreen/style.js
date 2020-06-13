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
  registrationHeadingWrapper: {
    padding: Dimensions.space2x,
    borderWidth: 2,
    borderColor: Colors.accent1Color,
    borderRadius: Dimensions.radius3x,
    marginVertical: Dimensions.space2x,
  },
  registrationHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.accent1Color,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: Colors.white,
    textAlign: 'center',
  },
  imagesWrapper: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: Dimensions.space2x,
  },
  imageView: {
    width: '50%',
    padding: Dimensions.space4x,
    alignItems: 'center',
  },
  imageLabel: {
    fontSize: 14,
    color: Colors.white,
  },
  cameraViewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Dimensions.space6x,
  },
  cameraView: {
    width: '50%',
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.lightTextGrey,
    borderRadius: Dimensions.radius3x,
    marginHorizontal: Dimensions.space1x,
    paddingHorizontal: Dimensions.space2x,
  },
  cameraIconImage: {
    width: 70,
    height: 70,
  },
  takePhotoLabel: {
    fontSize: 14,
    color: Colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: Dimensions.space1x,
  },
  photoName: {
    fontSize: 14,
    color: Colors.black,
    textAlign: 'center',
  },
  finishButtonHolder: {
    width: Dimensions.screenWidth - 200,
  },
});

export default style;
