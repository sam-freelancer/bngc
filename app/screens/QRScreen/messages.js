/*
 * QRScreen Messages
 *
 * This contains all the text for the QRScreen.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.screens.QRScreen';

export default defineMessages({
  qrScanLabel: {
    id: `${scope}.qrScanLabel`,
    defaultMessage: 'Ask your friend to scan this QRCode.',
  },
  loginLabel: {
    id: `${scope}.loginLabel`,
    defaultMessage: 'Already have an account? LOG IN',
  },
  scan: {
    id: `${scope}.scan`,
    defaultMessage: 'Scan',
  },
});
