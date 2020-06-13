/**
 * Asynchronously loads the component for QRScreen
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
