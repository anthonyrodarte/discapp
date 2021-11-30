import React from "react";
import { Button } from "react-native";

export default function Home({ navigation }) {
  return (
    <Button
      title="Go to disc"
      onPress={() => navigation.navigate("Disc", {})}
    />
  );
}
