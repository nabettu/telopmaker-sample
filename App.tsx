import React from "react";
import { StyleSheet, View } from "react-native";
import AppNavigator from "app/src/navigation/AppNavigator";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
