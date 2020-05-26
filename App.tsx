import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "app/src/navigation/AppNavigator";

const linking = {
  prefixes: ["https://https://telopmaker-sample.netlify.app/"],
  config: {
    About: "about",
    SelectType: "selectype",
    ImagePick: "imagePick/:telopType",
    Edit: {
      path: "edit",
      stringify: {
        photoUri: () => "localData",
      },
    },
  },
};

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
