import { Tabs } from 'expo-router';
import {FontAwesome } from '@expo/vector-icons';
export default () => {
  return <Tabs screenOptions={{
    tabBarShowLabel: false,
  }} >
    <Tabs.Screen name="feed" options={{
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome name="home" size={24} color={focused ? '#1e2632' : '#cbcbcb'} />
        )
      }
    }} />
    <Tabs.Screen name="search" options={{
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome name="search" size={24} color={focused ? '#1e2632' : '#cbcbcb'} />
        )
      }
    }} />
    <Tabs.Screen name="messages" options={{
      tabBarIcon: ({ focused }) => {
        return (
          <FontAwesome name="user" size={24} color={focused ? '#1e2632' : '#cbcbcb'} />
        )
      },
      headerShown: false
    }} />
  </Tabs>
}
