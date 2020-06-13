import isEqual from 'lodash/isEqual';
import last from 'lodash/last';

const DEBUG = __DEV__;

export function onStateChange(prevState, currentState) {
  if (DEBUG) {
    return;
  }
  if (!isEqual(last(currentState?.routes), last(prevState?.routes))) {
    // logScreen(last(currentState.routes));
  }
}
