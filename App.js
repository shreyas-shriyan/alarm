import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

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
    <View style={styles.container}>
      <Text className="border-2 border-red-700 rounded-md text-center px-2 py-1">
        sdiuf
      </Text>
      <Button className="text-xl rounded-sm mb-1" title="ishdf" />
      <Button
        className="text-xl rounded-sm"
        onPress={showTimepicker}
        title="Show time picker!"
      />
      <StatusBar style="auto" />
    </View>
  );
}
