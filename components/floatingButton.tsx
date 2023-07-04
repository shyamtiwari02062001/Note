import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
const FloatingButton = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ADD</Text>
    </View>
  );
};
export default FloatingButton;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 80,
    width: 80,
    borderRadius: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
