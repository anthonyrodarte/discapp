import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function FlightRatings() {
  return (
    <View style={styles.flightNums}>
      <View style={styles.flightNumsText}>
        <Text>9</Text>
      </View>
      <View style={styles.flightNumsText}>
        <Text>9</Text>
      </View>
      <View style={styles.flightNumsText}>
        <Text>9</Text>
      </View>
      <View style={styles.flightNumsText}>
        <Text>9</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flightNums: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderColor: "#000",
    borderWidth: 1,
    width: 150,
    height: 30,
  },
  flightNumsText: {
    width: "25%",
    height: "100%",
    alignItems: "center",
  },
});
