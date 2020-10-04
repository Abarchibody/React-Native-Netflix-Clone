import { StatusBar } from "expo-status-bar";
import React from "react";
import styled from "styled-components/native";
import Home from "./screens/Home";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: 520px;
`;

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
