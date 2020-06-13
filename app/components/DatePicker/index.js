/**
 *
 * DatePicker
 *
 */

import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import DatePicker from 'react-native-datepicker';

import Colors from 'theme/Colors';
import style from './style';

function DatePickerComponent(props) {
  const [date, setDate] = useState(null);

  const onDateChange = (d) => {
    setDate(d);
    props.onSelect(d);
  };

  return (
    <View style={style.container}>
      <View style={style.openButton}>
        {props.placeholder({
          style: style.placeholder,
          numberOfLines: 1,
        })}
      </View>

      <View style={style.pickerContainer}>
        <DatePicker
          style={style.datePickerStyle}
          date={date}
          onDateChange={onDateChange}
          mode={props.mode}
          format="DD-MM-YYYY"
          minDate="01-01-1990"
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderRadius: 12,
            },
            dateText: {
              color: date ? Colors.accent1Color : Colors.textGrey,
            },
          }}
        />
      </View>
    </View>
  );
}

DatePickerComponent.propTypes = {
  onSelect: PropTypes.func.isRequired,
  mode: PropTypes.oneOf(['date', 'datetime', 'time', 'countdown']),
  placeholder: PropTypes.func.isRequired,
};

DatePickerComponent.defaultProps = {
  mode: 'date',
};

export default DatePickerComponent;
