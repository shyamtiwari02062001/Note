import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addNote} from '../store/actions/note';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubmitButton = (props: {
  data: {title: string; subtitle: string; navigation: any};
}) => {
  const data = useSelector(
    (state: {notes: {notes: string}}) => state.notes.notes,
  );
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const submit = async () => {
    if (props.data.title !== '' && props.data.subtitle !== '') {
      setSubmitting(true);
      try {
        const jsonValue = JSON.stringify([...data, props.data]);
        await AsyncStorage.setItem('@notes', jsonValue);
      } catch (e) {
        console.log('Error');
      }
      dispatch(addNote([...data, props.data]));
      setSubmitting(false);
      props.data.navigation.goBack();
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => submit()}
      style={styles.container}>
      {submitting ? (
        <ActivityIndicator color={'#fff'} size={'large'} />
      ) : (
        <Text style={styles.text}>Add</Text>
      )}
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
    padding: 12,
    margin: 30,
  },
  text: {
    padding: 8,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
});
