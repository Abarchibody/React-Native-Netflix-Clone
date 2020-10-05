import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Feature from "../components/Feature";

const { height } = Dimensions.get("window");

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const InfoBottomContainer = styled.View`
  width: 100%;
  height: ${height * 0.4}px;
  background-color: coral;
`;

const MovieScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <Container>
      <Feature moviescreen />
      <InfoBottomContainer></InfoBottomContainer>
    </Container>
  );
};

export default MovieScreen;
