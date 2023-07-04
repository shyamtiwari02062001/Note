import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
const FloatingButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => console.log('Shyam')}
      style={styles.container}>
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  );
};
export default FloatingButton;
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 60,
    width: 60,
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
