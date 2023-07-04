import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import HomeScreen from './screens/homeScreen';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default App;
