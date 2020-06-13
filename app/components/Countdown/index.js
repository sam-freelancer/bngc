/**
 *
 * CountDown
 *
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useInterval } from 'hooks/useInterval';

import FormattedMessage from 'components/FormattedMessage';

import messages from './messages';
import style from './style';

function CountDown(props) {
  const [count, setCount] = useState(props.seconds);
  useInterval(() => {
    if (count > 0) {
      setCount(count - 1);
      return;
    }
    props.onComplete();
  }, 1000);
  return (
    <FormattedMessage
      {...messages.count}
      values={{ count }}
      style={style.counter}
    />
  );
}

CountDown.propTypes = {
  seconds: PropTypes.number.isRequired,
  active: PropTypes.bool,
  onComplete: PropTypes.func.isRequired,
};
CountDown.defaultProps = {
  active: false,
};

export default CountDown;
