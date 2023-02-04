import { Tabs } from 'expo-router';

export default () => {
  return <Tabs screenOptions={{
    tabBarShowLabel: false,
  }} >
    <Tabs.Screen name="feed" />
  </Tabs>
}
