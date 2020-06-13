import { StyleSheet, Platform } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  keyboardAvoidingViewStyle: {
    ...Platform.select({
      android: {},
      ios: { flex: 1 },
    }),
  },
  container: {
    ...Platform.select({
      android: {},
      ios: { flex: 1 },
    }),
    backgroundColor: Colors.black,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: Dimensions.bottomSpacing,
  },
  withoutScroll: {
    height: Dimensions.screenHeight,
  },
  tabletView: {
    height: Dimensions.screenHeight,
  },
  header: {
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  footer: {
    ...Platform.select({
      android: {},
      ios: {
        marginBottom: Dimensions.bottomSpacing,
      },
    }),
    borderBottomWidth: 0.3,
    borderBottomColor: Colors.primaryLightColor,
  },
  footerLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.accent1Color,
  },
});

export default style;
