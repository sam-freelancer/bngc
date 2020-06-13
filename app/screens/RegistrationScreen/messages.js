/*
 * RegistrationScreen Messages
 *
 * This contains all the text for the RegistrationScreen.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.RegistrationScreen';

export default defineMessages({
  firstNamePlaceHolder: {
    id: `${scope}.firstNamePlaceHolder`,
    defaultMessage: 'First Name',
  },
  firstNameError: {
    id: `${scope}.firstNameError`,
    defaultMessage: 'Invalid First Name',
  },
  lastNamePlaceHolder: {
    id: `${scope}.lastNamePlaceHolder`,
    defaultMessage: 'Last Name',
  },
  lastNameError: {
    id: `${scope}.lastNameError`,
    defaultMessage: 'Invalid Last Name',
  },
  dobLabel: {
    id: `${scope}.dobLabel`,
    defaultMessage: 'Select Date',
  },
  dobPlaceholder: {
    id: `${scope}.dobPlaceholder`,
    defaultMessage: 'Date of Birth',
  },
  addressPlaceHolder: {
    id: `${scope}.addressPlaceHolder`,
    defaultMessage: 'Address',
  },
  addressError: {
    id: `${scope}.addressError`,
    defaultMessage: 'Required*',
  },
  statePlaceHolder: {
    id: `${scope}.statePlaceHolder`,
    defaultMessage: 'State / Province',
  },
  stateError: {
    id: `${scope}.stateError`,
    defaultMessage: 'Required*',
  },
  zipCodePlaceHolder: {
    id: `${scope}.zipCodePlaceHolder`,
    defaultMessage: 'Zip Code',
  },
  zipCodeError: {
    id: `${scope}.zipCodeError`,
    defaultMessage: 'Required*',
  },
  countryPlaceHolder: {
    id: `${scope}.countryPlaceHolder`,
    defaultMessage: 'Country',
  },
  countryError: {
    id: `${scope}.countryError`,
    defaultMessage: 'Required*',
  },
  emailPlaceHolder: {
    id: `${scope}.emailPlaceHolder`,
    defaultMessage: 'Email',
  },
  emailError: {
    id: `${scope}.emailError`,
    defaultMessage: 'Required*',
  },
  passwordPlaceHolder: {
    id: `${scope}.passwordPlaceHolder`,
    defaultMessage: 'Password',
  },
  passwordError: {
    id: `${scope}.passwordError`,
    defaultMessage: 'Required*',
  },
  next: {
    id: `${scope}.next`,
    defaultMessage: 'NEXT',
  },
});
