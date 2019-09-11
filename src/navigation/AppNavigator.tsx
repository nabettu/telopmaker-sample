import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AboutScreen from "app/src/screens/About";
import ImagePickScreen from "app/src/screens/ImagePick";
import EditScreen from "app/src/screens/Edit";

export default createAppContainer(
  createStackNavigator({
    EditScreen: { screen: EditScreen },
    AboutScreen: { screen: AboutScreen },
    ImagePickScreen: { screen: ImagePickScreen }
  })
);
