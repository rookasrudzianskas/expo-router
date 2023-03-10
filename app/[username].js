//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Stack, useRouter, useSearchParams} from 'expo-router';

const Username = () => {
  const router = useRouter();
  const {name, username} = useSearchParams();
  // console.log(`Hello ${name} @${username}!`);
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Profile - ${name}`, headerStyle: {backgroundColor: '#1E2632'}, headerTintColor: '#ffe030'}} />
      <Text style={{fontSize: "20"}}>
        {`Hello ${name} (@${username})!`}
      </Text>
      <Button onPress={() => router.back()} title="Go Back" />
    </View>
  );
};

export default Username;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 50,
    justifyContent: "center",
  },

});
