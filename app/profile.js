//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { useRouter, useSearchParams } from 'expo-router';

const Profile = () => {
  const router = useRouter();
  const params = useSearchParams();
  console.log(params.name);
  return (
    <View style={styles.container}>
      <Text>
        byrookas 🚀
      </Text>
      <Button onPress={() => router.back()} title="Go Back" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
  },

});
