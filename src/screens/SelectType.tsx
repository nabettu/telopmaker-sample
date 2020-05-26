import React from "react";
import { TouchableOpacity, StyleSheet, Image, Text, View } from "react-native";
const telopImg1 = require("app/assets/telop1.png");
const telopImg2 = require("app/assets/telop2.png");

export const SelectTypeScreen = ({ navigation }) => {
  const selectImg = num => {
    navigation.navigate("ImagePick", { telopType: num });
  };

  return (
    <View style={styles.container}>
      <Text>テロップのタイプを選択してください。</Text>
      <View style={styles.space} />
      <Image source={telopImg1} style={styles.telop} />
      <TouchableOpacity style={styles.btn} onPress={() => selectImg("1")}>
        <Text style={styles.btnText}>こっちを使う</Text>
      </TouchableOpacity>
      <View style={styles.space} />
      <Image source={telopImg2} style={styles.telop} />
      <TouchableOpacity style={styles.btn} onPress={() => selectImg("2")}>
        <Text style={styles.btnText}>やっぱりこっち</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    marginTop: 32,
  },
  telop: {
    width: 280,
    height: 280 / 5,
    resizeMode: "cover",
  },
  btn: {
    marginTop: 32,
    backgroundColor: "#099",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  btnText: {
    color: "#fff",
  },
});
