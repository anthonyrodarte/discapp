import { formRow } from "@aws-amplify/ui";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import FlightRatings from "./discView/flightRatings";
import Tags from "./discView/tags";
import DiscPicker from "./discView/discPicker";
import { Valkryie } from "./valkryie";
import { BackgroundImage } from "react-native-elements/dist/config";

export default function App() {
  const [discLoaded, updateDiscLoaded] = useState(false);
  const [currentDisc, udpateCurrentDisc] = useState({
    brand: "" as string,
    name: "" as string,
    description: "" as string,
    ratings: [] as number[],
    plastics: [] as string[],
    tags: [] as {}[],
  });

  const renderDiscName = () => {
    if (discLoaded) {
      const { name, brand } = currentDisc;
      const discFullName = brand + " " + name;

      return <Text style={styles.name}>{discFullName}</Text>;
    }
  };

  const renderDiscDescription = () => {
    if (discLoaded) {
      const { description } = currentDisc;

      return <Text style={styles.description}>{description}</Text>;
    }
  };

  const renderPlasticPicker = () => {
    if (discLoaded) {
      const { plastics } = currentDisc;

      return <DiscPicker plastics={plastics} />;
    }
  };

  useEffect(() => {
    udpateCurrentDisc(Valkryie);

    updateDiscLoaded(true);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("../assets/disc.jpg")} style={styles.image} />
      {renderDiscName()}
      {renderDiscDescription()}
      <FlightRatings />
      <View style={styles.pickerRow}>
        {renderPlasticPicker()}
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
