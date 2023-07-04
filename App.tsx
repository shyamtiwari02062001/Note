import React from 'react';

import HomeScreen from './screens/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddNote from './screens/addNote';
import {TransitionPresets} from '@react-navigation/stack';
import {combineReducers, createStore} from 'redux';
import Notes from './store/reducer/note';
import {Provider} from 'react-redux';

const Stack = createStackNavigator();
const rootReducer = combineReducers({
  notes: Notes,
});
function App(): JSX.Element {
  const store = createStore(rootReducer);
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
