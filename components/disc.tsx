import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

import FlightRatings from "./discView/flightRatings";
import Tags from "./discView/tags";
import { Valkryie } from "./valkryie";

export default function Disc({ navigation }) {
  const [discLoaded, updateDiscLoaded] = useState(false);
  const [currentDisc, udpateCurrentDisc] = useState({
    brand: "" as string,
    name: "" as string,
    description: "" as string,
    flightRatings: [] as number[],
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

  const renderFlightRatings = () => {
    if (discLoaded) {
      const { flightRatings } = currentDisc;

      return <FlightRatings flightRatings={flightRatings} />;
    }
  };

  useEffect(() => {
    udpateCurrentDisc(Valkryie);

    updateDiscLoaded(true);
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate("Home", {})} />
      <Image source={require("../assets/disc.jpg")} style={styles.image} />
      {renderDiscName()}
      {renderDiscDescription()}
      {renderFlightRatings()}
      <Text>Stars</Text>
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
