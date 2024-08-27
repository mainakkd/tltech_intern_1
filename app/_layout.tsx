import { View, Text, Button } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

export default function _layout() {
  return (
    <Stack
    screenOptions={{
      headerStyle: {
        backgroundColor: "#40cbb4",
      },
      headerTintColor: "white",
    }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => <Button color="#144f02" onPress={() => {router.push('contact')}} title="Login/Signup" />,
        }}
      />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
      <Stack.Screen name="contact" options={{ headerTitle: "Login", presentation: 'modal' }} />
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  )
}