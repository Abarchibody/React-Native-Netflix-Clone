import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import Home from "./screens/Home";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded] = useFonts({
    Peddana: require("./assets/fonts/Peddana-Regular.ttf"),
    "Jac": require("./assets/fonts/JacquesFrancoisShadow-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return <Home />;
}
