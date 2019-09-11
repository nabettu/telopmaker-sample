import React, { useState } from "react";
import { Header } from "react-navigation-stack";
import {
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  Image,
  Text,
  View
} from "react-native";
import { captureRef } from "react-native-view-shot";
const telopImg = require("app/assets/telop.png");

function EditScreen(props) {
  const [text, setText] = useState("サンプルテキスト");
  const [captureContainerRef, setCaptureContainerRef] = useState(null);
  const [captureImageUri, setcaptureImageUri] = useState(null);

  const pressDone = async () => {
    if (!captureContainerRef) {
      return;
    }
    const result = await captureRef(captureContainerRef, {
      result: "tmpfile",
      width: 600,
      height: 400,
      quality: 1,
      format: "png"
    });
    if (result) {
      setcaptureImageUri(result);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      keyboardVerticalOffset={Header.HEIGHT}
    >
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text>テロップに載せるテキストを入力してください。</Text>
        <View
          style={styles.captureArea}
          ref={ref => setCaptureContainerRef(ref)}
        >
          <Image
            source={{
              uri: props.navigation.getParam(
                "photoUri",
                "https://placehold.jp/150x150.png"
              )
            }}
            style={styles.img}
          />
          <Image source={telopImg} style={styles.telop} />
          <Text style={styles.telopText}>{text}</Text>
        </View>
        <TextInput
          defaultValue={text}
          style={styles.textInput}
          onChangeText={inputText => setText(inputText)}
        />
        <TouchableOpacity style={styles.btn} onPress={pressDone}>
          <Text style={styles.btnText}>画像を生成する</Text>
        </TouchableOpacity>
        {captureImageUri && (
          <Image
            source={{ uri: captureImageUri }}
            style={styles.captureImage}
          />
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

EditScreen.navigationOptions = { title: "編集画面" };
export default EditScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    paddingVertical: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  captureArea: {
    position: "relative",
    overflow: "hidden",
    marginTop: 32,
    width: 300,
    height: 200
  },
  img: {
    width: 300,
    height: 200
  },
  captureImage: {
    marginTop: 32,
    width: 300,
    height: 200
  },
  telop: {
    position: "absolute",
    bottom: 10,
    left: 10,
    width: 280,
    height: 280 / 5,
    resizeMode: "cover"
  },
  telopText: {
    position: "absolute",
    bottom: 10,
    height: 45,
    lineHeight: 45,
    width: "100%",
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#660000",
    left: 0
  },
  textInput: {
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    marginTop: 16,
    padding: 8,
    fontSize: 20,
    width: 300
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
