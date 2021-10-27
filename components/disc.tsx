import { formRow } from "@aws-amplify/ui";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import FlightRatings from "./discView/flightRatings";
import Tags from "./discView/tags";
import DiscPicker from "./discView/discPicker";

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/disc.jpg")} style={styles.image} />
      <Text style={styles.name}>Innova Champion Valkyrie</Text>
      <Text style={styles.description}>{description}</Text>
      <FlightRatings />
      <View style={styles.pickerRow}>
        <DiscPicker />
        <Text>Stars</Text>
      </View>
      <Tags />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  description: {
    fontSize: 12,
    padding: 15,
    textAlign: "center",
  },
  pickerRow: {
    padding: 15,
    height: 30,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
