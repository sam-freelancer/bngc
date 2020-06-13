import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webViewContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height:100
    
  },
  webView: {
    flex:1,
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  groupInputs: {
    flexDirection: 'row',
    width: '100%',
  },
  inputWrapper: {
    width: '50%',
    marginVertical: Dimensions.space1x,
  },
  inputHolder: {
    width: '100%',
  },
  phoneNumberInput: {
    width: '100%',
    flexDirection: 'row',
    paddingLeft: Dimensions.space2x,
  },
  nextButtonHolder: {
    marginTop: Dimensions.space2x,
    width: '95%',
  },
  error: {
    backgroundColor: Colors.errorBackground,
    paddingHorizontal: Dimensions.space2x,
    paddingVertical: Dimensions.space1x / 3,
    borderRadius: Dimensions.radius4x,
    color: Colors.errorForeground,
    position: 'absolute',
    bottom: -Dimensions.space3x,
    right: Dimensions.space4x,
    fontWeight: '600',
    fontSize: 13,
    overflow: 'hidden',
    marginBottom: 10,
  },
  sendControlContainerOuter: {
    flex: 1,
    justifyContent: 'flex-end'
    },
    sendControlContainerInner: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 3,
      },
});

export default style;
