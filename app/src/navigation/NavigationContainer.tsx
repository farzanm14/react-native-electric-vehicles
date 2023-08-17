import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from './Routes';
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types';
const Stack = createStackNavigator();
const SCREEN_NAMES = Object.keys(SCREENS) as (keyof typeof SCREENS)[];

const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

export default function MyNavigationContainer() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {SCREEN_NAMES.map(name => (
          <Stack.Screen
            key={name.toString()}
            name={name.toString()}
            getComponent={() => SCREENS[name].component}
            options={{
              title: SCREENS[name].title,
              transitionSpec: {
                open: config,
                close: config,
              },
              gestureEnabled: !SCREENS[name].disableGesture,
            }}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
