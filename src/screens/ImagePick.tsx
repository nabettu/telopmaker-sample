import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Linking,
  TouchableOpacity,
  Text,
  View,
  Alert
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as IntentLauncher from "expo-intent-launcher";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";

function ImagePickScreen() {
  const [hasPermissionCameraRoll, setHasPermissionCameraRoll] = useState(false);
  const [hasPermissionCamera, setHasPermissionCamera] = useState(false);

  const openAppSetting = () => {
    if (Constants.platform.android) {
      IntentLauncher.startActivityAsync(
        IntentLauncher.ACTION_APPLICATION_DETAILS_SETTINGS,
        {
          data:
            "package:" + Constants.appOwnership === "standalone"
              ? Constants.manifest.android.package
              : "host.exp.exponent"
        }
      );
    } else {
      Linking.openURL("app-settings:");
    }
  };

  const checkCameraAndImagePermission = async () => {
    if (!Constants.platform.web) {
      const { status: cameraRollPermissionStatus } = await Permissions.askAsync(
        Permissions.CAMERA_ROLL
      );
      if (cameraRollPermissionStatus === "granted") {
        setHasPermissionCameraRoll(true);
      }
      const { status: cameraPermissionStatus } = await Permissions.askAsync(
        Permissions.CAMERA
      );
      if (cameraPermissionStatus === "granted") {
        setHasPermissionCamera(true);
      }
      if (cameraRollPermissionStatus !== "granted") {
        Alert.alert("アプリの利用にはカメラロールへのアクセス許可が必要です。");
      }
    } else {
      setHasPermissionCamera(true);
      setHasPermissionCameraRoll(true);
    }
  };

  useEffect(() => {
    checkCameraAndImagePermission();
  }, []);

  return (
    <View style={styles.container}>
      <Text>テロップを付ける画像を選択してください。</Text>
      {!hasPermissionCameraRoll && (
        <>
          <Text style={styles.notice}>
            写真にアクセスする権限がありません。アプリの設定画面でカメラロールへのアクセスを許可してください。
          </Text>
          {!Constants.platform.web && (
            <TouchableOpacity onPress={openAppSetting} style={styles.btn}>
              <Text style={styles.btnText}>アプリの設定画面を開く</Text>
            </TouchableOpacity>
          )}
        </>
      )}
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
  },
  notice: {
    marginTop: 32,
    color: "#f66"
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
