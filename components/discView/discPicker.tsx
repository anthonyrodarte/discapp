import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function DiscPicker() {
  return (
    <Picker>
      <Picker.Item label="Champion" value="champion" />
      <Picker.Item label="Star" value="star" />
    </Picker>
  );
}
