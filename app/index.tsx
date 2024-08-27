import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function page() {
  return (
    <View  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:30}}>Welcome to IVF Solution</Text>
      <Link href={'/about'}>
        <Text style={{fontSize:18}}>Go to About Page</Text>
      </Link>
      {/* <Link href={'/blog'} asChild>
        <Button title='Go to Blog Page' />
      </Link> */}
      <Link href={'/blog'} asChild>
        <Button title='Go to Contact Page' />
      </Link>
      <Link href={'/(tabs)/feed'} asChild>
        <Button title='Go to Dashboard' />
      </Link>
    </View>
  )
}