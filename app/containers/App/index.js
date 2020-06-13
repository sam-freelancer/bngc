import React from 'react';
import { StatusBar } from 'react-native';
import Router from 'router';
import Colors from 'theme/Colors';

function AppContainer() {
  return (
    <>
      <StatusBar backgroundColor={Colors.black} barStyle="light-content" />
      <Router />
    </>
  );
}

export default AppContainer;
