/* eslint-disable no-unused-vars */
/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, shallowEqual } from 'react-redux';
import { IntlProvider } from 'react-intl';

import Intl from 'intl';
import 'intl/locale-data/jsonp/en';

import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';

import { selectLanguage } from './selectors';

function LanguageProvider({ messages, children }) {
  useInjectReducer({ key: 'language', reducer });
  const language = useSelector(selectLanguage, shallowEqual);
  return (
    <IntlProvider
      locale={language.locale}
      key={language.locale}
      messages={messages[language.locale]}
    >
      {React.Children.only(children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  messages: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

LanguageProvider.defaultProps = {};

export default LanguageProvider;
