import { View, Text, Button } from 'react-native'
import React from 'react'
import { Tabs, router } from 'expo-router'
import { Feather, AntDesign } from '@expo/vector-icons';
import TabBar from '../../../components/TabBar'

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarStyle: {
      height: 60,
      borderWidth: 1,
      borderRadius: 50,
      borderColor: 'red',
      borderTopColor: 'red',
      backgroundColor: 'white',
      margin:10,
      },
      tabBarLabelStyle: {
      fontSize: 12,
      fontWeight: "bold",
      marginBottom: 10,
      },
      }}
      >
    <Tabs.Screen name='feed' options={{
      tabBarIcon: ({color}) => (
        <Feather name="home" size={24} color={color} />
      ),
      tabBarLabel: 'Home',
      headerTitle: 'Home',
      headerRight: () => <Button onPress={() => router.push('feed/new')} title='Add Post' />
    }} />
    <Tabs.Screen name='profile' options={{
      tabBarIcon: ({color}) => (
        <AntDesign name="search1" size={24} color={color} />
      ),
      tabBarLabel: 'Search',
      headerTitle: 'Search'
    }} />
   </Tabs>
  )
}