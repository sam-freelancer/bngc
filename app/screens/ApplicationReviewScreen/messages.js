/*
 * ApplicationReviewScreen Messages
 *
 * This contains all the text for the ApplicationReviewScreen.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.ApplicationReviewScreen';

export default defineMessages({
  underReviewHeading: {
    id: `${scope}.underReviewHeading`,
    defaultMessage: 'YOUR APPLICATION IS UNDER REVIEW',
  },
  description: {
    id: `${scope}.registrationHeading`,
    defaultMessage:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  termsConditions: {
    id: `${scope}.termsConditions`,
    defaultMessage: 'Our Terms & Conditions',
  },
  dashboardButtonLabel: {
    id: `${scope}.dashboardButtonLabel`,
    defaultMessage: 'LOGIN TO DASHBOARD',
  },
});
