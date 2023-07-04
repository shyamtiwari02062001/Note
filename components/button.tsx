import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
const SubmitButton = () => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => console.log('Shyam')}
      style={styles.container}>
      <Text style={styles.text}>Add</Text>
    </TouchableOpacity>
  );
};
export default SubmitButton;
const styles = StyleSheet.create({
  container: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'red',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    margin: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
