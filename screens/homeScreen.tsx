import React from 'react';
import {FlatList, StatusBar, StyleSheet, View} from 'react-native';
import ListItem from '../components/listItem';
import FloatingButton from '../components/floatingButton';
const HomeScreen = (props: {navigation: any}) => {
  const data = [{title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'}];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={'red'} />
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ListItem key={index} title={item.title} subtitle={item.subtitle} />
        )}
      />
      <FloatingButton navigation={props.navigation} />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: {height: '100%'},
});
