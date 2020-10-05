import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Text } from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-SemiBoldItalic": require("./assets/fonts/JacquesFrancoisShadow-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Text style={{ fontSize: 77, fontFamily: "Inter-SemiBoldItalic" }}>
      AMK
    </Text>
  );
}
