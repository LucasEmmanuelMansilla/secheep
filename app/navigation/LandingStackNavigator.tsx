import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../ui/screens/landing/Landing';
import {View} from 'react-native';
import GlobalStyles from '../styles/globalStyles';
import {LandingStackScreen} from '../types/types';

const Stack = createStackNavigator<LandingStackScreen>();

export default function LandingStackNavigator(): JSX.Element {
  return (
    <View style={GlobalStyles({}).container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Landing"
          component={Landing}
        />
      </Stack.Navigator>
    </View>
  );
}
