import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { StatusBar, Dimensions } from "react-native";
import Feature from "../components/Feature";

const { height } = Dimensions.get("window");

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${height * 0.8}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Feature />
      </Container>
    </>
  );
};

export default Home;
