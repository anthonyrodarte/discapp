import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Tags() {
  return (
    <View>
      <Text style={styles.commonTagsTitle}>Common Tags</Text>
      <View style={styles.commonTagsContainer}>
        <Text style={styles.commonTags}>
          Understable <Text>10</Text>
        </Text>
        <Text style={styles.commonTags}>
          Grippy <Text>5</Text>
        </Text>
        <Text style={styles.commonTags}>
          Sidearm <Text>2</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  commonTagsContainer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: 350,
  },
  commonTagsTitle: {
    textAlign: "center",
  },
  commonTags: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 20,
  },
});
