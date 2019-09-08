import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AboutScreen from "app/src/screens/About";
import ImagePickScreen from "app/src/screens/ImagePick";

export default createAppContainer(
  createStackNavigator({
    AboutScreen: { screen: AboutScreen },
    ImagePickScreen: { screen: ImagePickScreen }
  })
);
