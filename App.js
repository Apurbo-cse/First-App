/* eslint-disable prettier/prettier */
import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

import Shakib from './App/Shakib/Shakib'
// import { Card } from 'react-native-paper'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}></Text>

      {/* <Card> */}
      <View><Shakib/></View>
      {/* </Card> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    // justifyContent: 'center',
    // paddingTop: statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});