import { StyleSheet } from 'react-native';

import Colors from 'theme/Colors';
import Dimensions from 'theme/Dimensions';
// import elevation from 'theme/elevation';

const INPUT_HEIGHT = 40;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: Dimensions.space2x,
  },
  openButton: {
    height: INPUT_HEIGHT,
    justifyContent: 'center',
    marginVertical: Dimensions.space1x,
    paddingHorizontal: Dimensions.space1x,
    backgroundColor: Colors.black,
  },
  pickerContainer: {
    flex: 1,
    marginHorizontal: Dimensions.space2x,
  },
  datePickerStyle: {
    width: '100%',
  },
  label: {
    marginHorizontal: Dimensions.space2x,
    fontWeight: '500',
    fontSize: 16,
    color: Colors.white,
    marginBottom: Dimensions.space1x,
  },
  placeholder: {
    fontSize: 16,
    color: Colors.textGrey,
  },
  value: {
    fontSize: 16,
    color: Colors.accent1Color,
  },
  datePicker: {
    backgroundColor: Colors.accent1Color,
  },
});

export default style;
