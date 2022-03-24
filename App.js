import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
  // ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

export default function App() {
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldtext}>My name is {name}</Text>
      </View>

      <View style={styles.LogBody}>
        <TextInput
          style={styles.input}
          placeholder="Enter phone number or mail"
        />
        <TextInput style={styles.input} placeholder="Enter password" />
        <Button title="Submit"> </Button>
      </View>

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

      {/* <ScrollView>
        <View>
          {people.map(item => (
            <View id={item.id}>
              <Text style={styles.item}> {item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView> */}

      <View style={styles.body}>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora
          veritatis, similique minus asperiores error laudantium, quas sapiente
          eum corporis est amet eveniet? Neque fugit architecto eligendi
          tempore, quos explicabo maiores?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldtext: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'yellow',
    textAlign: 'justify',
    padding: 20,
  },

  LogBody: {
    marginTop: 20,
    marginBottom: 20,
  },

  input: {
    height: 40,
    width: 250,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'yellow ',
  },
  item: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'pink',
    fontSize: 24,
    marginHorizontal: 10,
  },
});
