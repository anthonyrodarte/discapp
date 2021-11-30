import React from "react";
import { StyleSheet, Button, View, Image } from "react-native";

export default function Header({ navigation }) {
  return (
    <View>
      <Button title="Home" onPress={() => navigation.navigate("Home", {})} />
    </View>
  );
}
