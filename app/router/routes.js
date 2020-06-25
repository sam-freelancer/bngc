import QRScreen from 'screens/QRScreen/Loadable';
import LoginScreen from 'screens/LoginScreen/Loadable';
import RegistrationScreen from 'screens/RegistrationScreen/Loadable';
import PhoneVerificationScreen from 'screens/PhoneVerificationScreen/Loadable';
import PhotoVerificationScreen from 'screens/PhotoVerificationScreen/Loadable';
import ApplicationReviewScreen from 'screens/ApplicationReviewScreen/Loadable';
import MainExchangeScreen from 'screens/MainExchangeScreen/Loadable';
import LoginWebScreen from 'screens/LoginWebScreen/Loadable';
import LoginWebErrorScreen from 'screens/LoginWebErrorScreen/Loadable';
import paxfulScreen from 'screens/paxfulScreen/Loadable';
import SettingsScreen from 'screens/SettingsScreen/Loadable';
import BlurScreen from 'screens/blurScreen/Loadable';
import RemoteRegisterScreen from 'screens/RemoteRegisterScreen/Loadable';
import ProfileScreen from 'screens/ProfileScreen/Loadable';
import paxfulConnectedScreen from 'screens/paxfulConnectedScreen/Loadable';
import RemotePhoneScreen from 'screens/paxfulConnectedScreen/Loadable';

const routes = {
  home: {
    path: '/home',
    screen: QRScreen,
  },
  login: {
    path: '/login',
    screen: LoginScreen,
  },
  register: {
    path: '/register',
    screen: RegistrationScreen,
  },
  connectedPaxful: {
    path: '/connected-paxful',
    screen: paxfulConnectedScreen,
  },
  profile: {
    path: '/profile',
    screen: ProfileScreen,
  },
  phoneVerification: {
    path: '/phone-verification',
    screen: PhoneVerificationScreen,
  },
  MainExchange: {
    path: '/main-exchange',
    screen: MainExchangeScreen,
  },
  LoginWeb: {
    path: '/login-web',
    screen: LoginWebScreen,
  },
  LoginWebError: {
    path: '/login-web-error',
    screen: LoginWebErrorScreen,
  },
  settingsPage: {
    path: '/page-settings',
    screen: SettingsScreen,
  },
  blur: {
    path: '/blur',
    screen: BlurScreen,
  },
  paxful: {
    path: '/paxful',
    screen: paxfulScreen,
  },
  remoteRegister: {
    path: '/remote-register',
    screen: RemoteRegisterScreen,
  },
  photoVerification: {
    path: '/photo-verification',
    screen: PhotoVerificationScreen,
  },
  remotePhone: {
    path: '/remote-phone',
    screen: RemotePhoneScreen,
  },
  applicationReview: {
    path: '/application-review',
    screen: ApplicationReviewScreen,
  },
};

export default routes;
