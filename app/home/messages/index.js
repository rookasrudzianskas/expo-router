//@ts-nocheck
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Link} from "expo-router";

const Messages = () => {
  return (
    <View>
      <Link href="/home/messages/123">
        Messages >>>>>>>>>> With Rokas
      </Link>
      <Link href="/home/messages/123">
        Messages >>>>>>>>>> With Rokas
      </Link>
      <Link href="/home/messages/123">
        Messages >>>>>>>>>> With Rokas
      </Link>
    </View>
  );
};

export default Messages;
