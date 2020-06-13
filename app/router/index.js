import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { onStateChange } from 'sideEffects/navigationEffects';
import configs from 'configs';
import routes from './routes';

function Router() {
  const Stack = createStackNavigator();

  function RootStack() {
    return (
      <Stack.Navigator
        initialRouteName={configs.initialRouteName}
        screenOptions={{ gestureEnabled: false }}
        headerMode="none"
        mode="card"
      >
        {Object.keys(routes).map((routeKey) => (
          <Stack.Screen
            key={routeKey}
            name={routeKey}
            component={routes[routeKey].screen}
            initialParams={configs.initialRouteParams}
          />
        ))}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer onStateChange={onStateChange}>
      <RootStack />
    </NavigationContainer>
  );
}

export default Router;
