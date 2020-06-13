/*
 * Screen Messages
 *
 * This contains all the text for the Screen.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.Screen';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Screen',
  },
  footerLabel: {
    id: `${scope}.footerLabel`,
    defaultMessage: 'Questions? click here.',
  },
});
