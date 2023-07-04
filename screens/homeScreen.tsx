import React, {useLayoutEffect} from 'react';
import {FlatList, Text, StatusBar, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch} from 'react-redux/es/exports';
import ListItem from '../components/listItem';
import {useSelector} from 'react-redux';
import FloatingButton from '../components/floatingButton';
import {addNote} from '../store/actions/note';
const HomeScreen = (props: {navigation: any}) => {
  const dispatch = useDispatch();
  const data = useSelector(
    (state: {notes: {notes: Array<{title: string; subtitle: string}>}}) =>
      state.notes.notes,
  );
  console.log(data);
  const getData = async () => {
    const jsonValue = await AsyncStorage.getItem('@notes');
    if (jsonValue !== null) {
      dispatch(addNote(JSON.parse(jsonValue)));
    }
  };
  useLayoutEffect(() => {
    getData();
  }, [1]);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'} />
      {data.length === 0 ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Add notes</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <ListItem
              key={index}
              data={{title: item.title, subtitle: item.subtitle}}
            />
          )}
        />
      )}
      <FloatingButton navigation={props.navigation} />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {height: '100%'},
  textContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 24, color: '#000'},
});
