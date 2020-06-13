/*
 * PhoneVerificationScreen Messages
 *
 * This contains all the text for the PhoneVerificationScreen.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.PhoneVerificationScreen';

export default defineMessages({
  verificationHeading: {
    id: `${scope}.verificationHeading`,
    defaultMessage: 'VERIFY YOUR PHONE NUMBER',
  },
  phoneDescription: {
    id: `${scope}.phoneDescription`,
    defaultMessage:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  sendCode: {
    id: `${scope}.sendCode`,
    defaultMessage: 'SEND CODE',
  },
  codeInputDescription: {
    id: `${scope}.codeInputDescription`,
    defaultMessage:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  verifyCode: {
    id: `${scope}.verifyCode`,
    defaultMessage: 'VERIFY OTP CODE',
  },
  resend: {
    id: `${scope}.resend`,
    defaultMessage: 'RESEND',
  },
  back: {
    id: `${scope}.back`,
    defaultMessage: 'BACK',
  },
});
