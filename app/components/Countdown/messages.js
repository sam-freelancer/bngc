/*
 * Countdown Messages
 *
 * This contains all the text for the Countdown.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.component.Countdown';

export default defineMessages({
  count: {
    id: `${scope}.count`,
    defaultMessage: "Haven't Receive Pin Yet? Retry in {count} Seconds",
  },
});
