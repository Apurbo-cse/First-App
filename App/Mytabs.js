/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Tab = createMaterialTopTabNavigator();
import Home from './Home';
import About from './About';
import Friend from './Friend';
import Photo from './Photo';


export default function Mytabs() {
  return (
    <Tab.Navigator>
        <Tab.Screen component={Home} name='Home'/>
        <Tab.Screen component={About} name='About'/>
        <Tab.Screen component={Friend} name='Friend'/>
        <Tab.Screen component={Photo} name='Photo'/>
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({})