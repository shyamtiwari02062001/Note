import React from 'react';
import {View, TextInput, StatusBar, StyleSheet} from 'react-native';
import SubmitButton from '../components/button';

const AddNote = () => {
  return (
    <View>
      <StatusBar backgroundColor={'red'} />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder="Title"
      />
      <TextInput
        style={[styles.input, styles.multiLine]}
        multiline
        numberOfLines={5}
        placeholderTextColor={'grey'}
        placeholder="Body"
      />
      <SubmitButton />
    </View>
  );
};
export default AddNote;
const styles = StyleSheet.create({
  input: {
    marginTop: 20,
    minHeight: 50,
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 24,
    width: '90%',
    alignSelf: 'center',
    color: '#000',
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 20,
  },
  multiLine: {
    maxHeight: 150,
  },
});
