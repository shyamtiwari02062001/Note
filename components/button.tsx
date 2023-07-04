import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addNote} from '../store/actions/note';

const SubmitButton = (props: {
  data: {title: string; subtitle: string; navigation: any};
}) => {
  const data = useSelector(
    (state: {notes: {notes: string}}) => state.notes.notes,
  );
  const [submitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const submit = () => {
    if (props.data.title !== '' && props.data.subtitle !== '') {
      setSubmitting(true);
      setTimeout(() => {
        dispatch(addNote([...data, props.data]));
        setSubmitting(false);
        props.data.navigation.goBack();
      }, 1000);
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
