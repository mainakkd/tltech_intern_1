import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';
import CustomDrawerContent from '@/components/CustomDrawerContent';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  

  return (
    
      <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerHideStatusBarOnOpen:false,
        drawerActiveBackgroundColor:"#40cbb4",
        drawerActiveTintColor:"#fff",
      }}>
        <Drawer.Screen
          name="feed1" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Dashboard',
            headerTitle:'Dashboard',
            title: 'overview',
            drawerIcon:({size,color})=> (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="explore" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Treatment History',
            title: 'overview',
            drawerIcon:({size,color})=> (
              <Ionicons name="bookmark-outline" size={size} color={color} />
            ),
          }}
        />
        <Drawer.Screen
          name="profile2" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Profile1',
            title: 'Profile1',
            drawerIcon:({size,color})=> (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
