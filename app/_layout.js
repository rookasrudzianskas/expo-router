import {Stack} from 'expo-router';
import React from "react";
import {Text} from 'react-native';

export default ({children}) => {
  return (
    <Stack screenOptions={{
      headerTintColor: '#1e2632',
      headerStyle: {
        backgroundColor: '#ffe030',
        borderBottomWidth: 1,
        borderBottomColor: '#c41212',
      },
      headerRight: () => (
        <Text style={{color: '#1e2632', fontSize: 20, fontWeight: 'bold', marginRight: 10}}>:D</Text>
      )
    }} >
      <Stack.Screen name="index" options={{
        title: 'Home'
      }}
    />
    </Stack>
  );
}
