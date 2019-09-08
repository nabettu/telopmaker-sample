import React from "react";
import { StyleSheet, Text, View } from "react-native";

function ImagePickScreen() {
  return (
    <View style={styles.container}>
      <Text>テロップを付ける画像を選択してください。</Text>
    </View>
  );
}

ImagePickScreen.navigationOptions = { title: "画像選択" };
export default ImagePickScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
