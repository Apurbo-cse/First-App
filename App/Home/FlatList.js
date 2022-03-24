/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet,FlatList,TouchableOpacity} from 'react-native';

export default function FlatLists() {
  const [name, setName] = useState('Apurbo Roy');
  const [people, setPeople] = useState([
    {name: 'Apurbo', id: '1'},
    {name: 'Anup', id: '2'},
    {name: 'Akash', id: '3'},
    {name: 'Arup', id: '4'},
    {name: 'Anik', id: '5'},
    {name: 'Apu', id: '6'},
    {name: 'Asim', id: '7'},
    {name: 'Alok', id: '8'},
    {name: 'Amit', id: '9'},
    {name: 'Ajoy', id: '10'},
  ]);
  const pressHander = id => {
    console.log(id);
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };
  return (
    <View>
      <Text style={styles.boldtext}>My name is {name}</Text>
      <FlatList
        numColumns={2}
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => pressHander(item.id)}>
              <Text style={styles.item}> {item.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  boldtext: {
    fontWeight: 'bold',
  },
  item: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  },
});
