import {Stack, useRouter} from 'expo-router';
import React from "react";
import {Alert, Text} from 'react-native';

export default ({children}) => {
  const router = useRouter();
  return (
    <Stack screenOptions={{
      headerTintColor: '#1e2632',
      headerStyle: {
        backgroundColor: '#ffe030',
        borderBottomWidth: 1,
        borderBottomColor: '#c41212',
      },
      headerRight: () => (
        <Text onPress={() => router.push('/modal')} style={{color: '#1e2632', fontSize: 20, fontWeight: 'bold', marginRight: 10}}>:D</Text>
      ),
    }} >
      <Stack.Screen name="index" options={{
          title: 'Home'
        }}
      />
      <Stack.Screen name="modal"
        options={{
          title: 'Modal Page',
          presentation: 'modal',
      }}
      />
    </Stack>
  );
}
