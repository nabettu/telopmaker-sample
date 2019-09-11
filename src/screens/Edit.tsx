import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";

function EditScreen(props) {
  return (
    <View style={styles.container}>
      <Text>テロップに載せるテキストを入力してください。</Text>
      <Image
        source={{
          uri: props.navigation.getParam(
            "photoUri",
            "https://placehold.jp/150x150.png"
          )
        }}
        style={styles.img}
      />
    </View>
  );
}

EditScreen.navigationOptions = { title: "編集画面" };
export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  img: {
    margin: 16,
    width: 300,
    height: 200
  },
  btn: {
    marginTop: 32,
    backgroundColor: "#099",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  btnText: {
    color: "#fff"
  }
});
