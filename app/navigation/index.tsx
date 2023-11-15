import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingStackNavigator from './LandingStackNavigator';
import {RootStackNavigator} from '../types/types';

const Stack = createStackNavigator<RootStackNavigator>();

export default function RootNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="LandingStackNavigator"
          component={LandingStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
