//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSearchParams} from "expo-router";

const Id = () => {
  const { id } = useSearchParams();
  return (
    <View>
      <Text>
        Message Room {id}
      </Text>
    </View>
  );
};

export default Id;
