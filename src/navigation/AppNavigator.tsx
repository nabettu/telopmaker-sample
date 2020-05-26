import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AboutScreen } from "app/src/screens/About";
import { ImagePickScreen } from "app/src/screens/ImagePick";
import { EditScreen } from "app/src/screens/Edit";

type RootStackParamList = {
  About: undefined;
  ImagePick: undefined;
  Edit: { photoUri: string };
};

const Stack = createStackNavigator<RootStackParamList>();
export const AppNavigator = () => (
  <Stack.Navigator initialRouteName="About">
    <Stack.Screen
      name="About"
      component={AboutScreen}
      options={{ title: "本アプリについて" }}
    />
    <Stack.Screen
      name="ImagePick"
      component={ImagePickScreen}
      options={{ title: "画像選択" }}
    />
    <Stack.Screen
      name="Edit"
      component={EditScreen}
      options={{ title: "編集画面" }}
    />
  </Stack.Navigator>
);
