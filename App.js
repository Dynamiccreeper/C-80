import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import HomeScreen from './screens/HomeScreen';
import SpaceCraftScreen from './screens/SpaceCraftScreen';
import DailyPicScreen from './screens/DailyPicScreen';
import StarMapScreen from './screens/StarMapScreen';

const Stack=createStackNavigator()

export default function App() {
  return (
   < NavigationContainer>
    <Stack.Navigator initialRouteName="HomeScreen"
      screenOptions={{headerShown : false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen}/>
        <Stack.Screen name="SpaceCraft" component={SpaceCraftScreen}/>
        <Stack.Screen name="DailyPic" component={DailyPicScreen}/>
        <Stack.Screen name="StarMap" component={StarMapScreen}/>
    </Stack.Navigator>
   
   </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
