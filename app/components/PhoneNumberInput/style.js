import { StyleSheet } from 'react-native';
import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from "theme/elevation";

const style = StyleSheet.create({
  inputHolder: {
    flex: 1,
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
});

export default style;
