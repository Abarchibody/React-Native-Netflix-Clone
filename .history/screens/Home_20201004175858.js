import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: 520px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Poster
        source={{
          uri:
            "https://i.insider.com/59a81c106eac400d4a8b598a?width=1136&format=jpeg",
        }}
      />
      <Gradient
        locations={[0, 0.2, 0.6, 0.93]}
        colors={[
          "rgba(0,0,0,0.5)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,0)",
          "rgba(0,0,0,1)",
        ]}
      ></Gradient>
    </Container>
  );
};

export default Home;
