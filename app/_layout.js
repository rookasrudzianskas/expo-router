import {Stack} from 'expo-router';

export default ({children}) => {
  return (
    <Stack screenOptions={{
      headerTintColor: '#1e2632',
      headerStyle: {
        backgroundColor: '#ffe030',
        borderBottomWidth: 1,
        borderBottomColor: '#c41212',

      }
    }} />
  );
}
