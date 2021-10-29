import React from "react";
import { Picker } from "@react-native-picker/picker";

export default function DiscPicker({ plastics }) {
  return (
    <Picker>
      {plastics.map((plastic, idx) => (
        <Picker.Item label={plastic} value={plastic} key={idx} />
      ))}
    </Picker>
  );
}
