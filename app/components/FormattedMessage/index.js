/**
 *
 * FormattedMessage
 *
 */

import React from 'react';
import Animated from 'react-native-reanimated';
import PropTypes from 'prop-types';
import Text from 'components/Text';

import { injectIntl, intlShape } from 'react-intl'; //eslint-disable-line

function Message(props) {
  const {
    animated,
    intl,
    id,
    defaultMessage,
    values,
    isFragment,
    ...otherProps
  } = props;

  if (isFragment) {
    return <>{intl.formatMessage({ id, defaultMessage }, values)}</>;
  }

  const Component = animated ? Animated.Text : Text;
  return (
    <Component {...otherProps} allowFontScaling={false}>
      {intl.formatMessage({ id, defaultMessage }, values)}
    </Component>
  );
}

Message.propTypes = {
  intl: intlShape.isRequired,
  id: PropTypes.string.isRequired,
  defaultMessage: PropTypes.string.isRequired,
  values: PropTypes.object,
  animated: PropTypes.bool,
  isFragment: PropTypes.bool,
};

Message.defaultProps = {
  values: {},
};

export default injectIntl(Message);
