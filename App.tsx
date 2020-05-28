import * as React from "react";
import "react-native-gesture-handler";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { AppNavigator } from "app/src/navigation/AppNavigator";
import { routes } from "app/routes";

const linking = {
  prefixes: ["https://deploy-preview-4--telopmaker-sample.netlify.app/"],
  config: {
    About: routes.About,
    SelectType: routes.SelectType,
    ImagePick: `${routes.ImagePick}/:telopType`,
    Edit: {
      path: routes.Edit,
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
