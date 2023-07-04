import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../components/listItem';
import FloatingButton from '../components/floatingButton';
const HomeScreen = (props: {navigation: any}) => {
  const data = [
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
    {title: 'dsbjdk', subtitle: 'sdfcgvhubjdikn'},
  ];
  return (
    <View>
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
