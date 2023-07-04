import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const ListItem = (props: {title: string; subtitle: string}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.divider} />
      <Text style={styles.subtitle}>{props.subtitle}</Text>
    </View>
  );
};
export default ListItem;
const styles = StyleSheet.create({
  card: {
    width: '90%',
    display: 'flex',
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 20,
    backgroundColor: '#fff',
    height: 100,
    borderRadius: 20,
    elevation: 20,
    shadowColor: '#000',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: 'red',
    marginVertical: 5,
  },
  subtitle: {
    color: '#000',
    fontSize: 20,
  },
});
