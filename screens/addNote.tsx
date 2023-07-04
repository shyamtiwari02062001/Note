import React, {useState} from 'react';
import {View, TextInput, StatusBar, StyleSheet} from 'react-native';
import SubmitButton from '../components/button';

const AddNote = (props: {navigation: any}) => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  return (
    <View>
      <StatusBar backgroundColor={'red'} />
      <TextInput
        style={styles.input}
        placeholderTextColor={'grey'}
        placeholder="Title"
        onChangeText={val => setTitle(val)}
      />
      <TextInput
        style={[styles.input, styles.multiLine]}
        multiline
        numberOfLines={5}
        placeholderTextColor={'grey'}
        placeholder="Body"
        onChangeText={val => setSubTitle(val)}
      />
      <SubmitButton
        data={{title: title, subtitle: subTitle, navigation: props.navigation}}
      />
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
