import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../components/listItem';
import FloatingButton from '../components/floatingButton';
const HomeScreen = () => {
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
    <View style={{}}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <ListItem key={index} title={item.title} subtitle={item.subtitle} />
        )}
      />
      <FloatingButton />
    </View>
  );
};
export default HomeScreen;
