import React from 'react';

import HomeScreen from './screens/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddNote from './screens/addNote';
import {TransitionPresets} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          gestureEnabled: true,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: 'red',
            },
            headerTitle: 'Notes App',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
              color: '#fff',
            },
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerTitle: 'Add Note',
          }}
          name="addNote"
          component={AddNote}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
