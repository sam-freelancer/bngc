/*
 * PhotoVerification Messages
 *
 * This contains all the text for the PhotoVerification.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.PhotoVerification';

export default defineMessages({
  registrationHeading: {
    id: `${scope}.registrationHeading`,
    defaultMessage: 'COMPLETE THE REGISTRATION BLOW',
  },
  description: {
    id: `${scope}.registrationHeading`,
    defaultMessage:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. ',
  },
  userImageLabel: {
    id: `${scope}.userImageLabel`,
    defaultMessage: 'Selfie Photo',
  },
  idCardImageLabel: {
    id: `${scope}.idCardImageLabel`,
    defaultMessage: 'ID Card Photo',
  },
  takePhotoLabel: {
    id: `${scope}.takePhotoLabel`,
    defaultMessage: 'Click to take photo.',
  },
  photoName: {
    id: `${scope}.photoName`,
    defaultMessage: 'DSC_123456_9910.JPG',
  },
  reTakePhotoLabel: {
    id: `${scope}.reTakePhotoLabel`,
    defaultMessage: 'Click to retake.',
  },
  finish: {
    id: `${scope}.finish`,
    defaultMessage: 'FINISH',
  },
});
