import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AuthHomeScreen from '../../screens/AuthHomeScreen';
import LoginScreen from '../../screens/LoginScreen';
import {authNavigations} from '../../consts';

function AuthStackNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH_NAME}
        component={AuthHomeScreen}
      />
      <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
