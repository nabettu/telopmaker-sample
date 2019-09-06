import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AboutScreen from "app/src/screen/About";

export default function App() {
  return (
    <View style={styles.container}>
      <AboutScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
