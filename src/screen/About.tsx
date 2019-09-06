import React from "react";
import { StyleSheet, Text, Image, View } from "react-native";
const sampleImg = require("app/assets/sample.png");

export default function About() {
  return (
    <View style={styles.container}>
      <Text>
        このアプリは以下のようなニュース風テロップ付きの画像が作れるアプリです。
      </Text>
      <Image source={sampleImg} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    margin: 16,
    width: 300,
    height: 200
  }
});
