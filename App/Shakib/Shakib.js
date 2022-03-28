/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Shakib() {
  return (
   <>
   <View  style={styles.mainCardView}>
   <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('./Shakib.jpg')} />
    </View>
   </View>
   <View  style={styles.mainCardView}>
   <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('./Shakib.jpg')} />
    </View>
   </View>
   <View  style={styles.mainCardView}>
   <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('./Shakib.jpg')} />
    </View>
   </View>
  </>
  )
}

const styles = StyleSheet.create({

    mainCardView: {
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 8,
        flexDirection: 'row',
        // eslint-disable-next-line no-dupe-keys
        justifyContent: 'space-between',
        paddingLeft: 0,
        paddingRight: 0,
        marginTop: 6,
        marginBottom: 10,
        marginLeft: 8,
        marginRight: 8,
        },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
      },
      paragraph: {
        paddingLeft: 1,
        paddingRight: 1,
        marginBottom:10,
        marginTop: 0,
        fontSize: 14,
        // fontWeight: 'bold',
        // textAlign: 'center',
      },
      logo: {
        height: 180,
        width: 350,
      }
})