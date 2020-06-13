/**
 * BANG-C
 * https://github.com/facebook/react-native
 *
 /**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// eslint-disable-next-line import/no-unresolved
import { useScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { translationMessages } from 'i18n';
import LanguageProvider from 'containers/LanguageProvider';
import AppContainer from 'containers/App';
import configureStore from 'configureStore';
import SplashScreen from 'react-native-splash-screen';
import { AsyncStorage,ActivityIndicator } from 'react-native';

// require('react-native').unstable_enableLogBox();
console.disableYellowBox = true;
const initialState = {};
const rootProjectURL = "http://140.82.46.55/control";
const remoteGetUserData = "/api/get-user-data.php";
const remoteLoginApi = "/api/login.php";
const remoteRegisterApi = "/api/register-api.php";
const store = configureStore(initialState);
useScreens();

function App() {
  SplashScreen.hide();
  return (
    <Provider store={store}>
      <LanguageProvider messages={translationMessages}>
        <AppContainer />
      </LanguageProvider>
    </Provider>
  );
}
export default App;
