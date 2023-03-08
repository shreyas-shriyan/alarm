import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import Button from "./components/Button";

export default function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: false,
    });
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View className="flex-1 justify-center">
      <Button text="Hello" onPress={showTimepicker} />
      <StatusBar style="auto" />
    </View>
  );
}
