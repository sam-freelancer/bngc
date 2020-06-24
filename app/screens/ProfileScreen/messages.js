/*
 * Profile Messages
 *
 * This contains all the text for the Profile.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.ProfileScreen';

export default defineMessages({
  emailPlaceHolder: {
    id: `${scope}.emailPlaceHolder`,
    defaultMessage: 'example@gmail.com',
  },
  passwordPlaceHolder: {
    id: `${scope}.passwordPlaceHolder`,
    defaultMessage: 'Password',
  },  
  passwordPlaceHolderFocus: {
    id: `${scope}.passwordPlaceHolderFocus`,
    defaultMessage: '',
  },
  formDescription: {
    id: `${scope}.formDescription`,
    defaultMessage:
      'Enter your account informations',
  },
  signIn: {
    id: `${scope}.signIn`,
    defaultMessage: 'SIGN IN',
  },
});
