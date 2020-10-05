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
  height: ${height * 0.3}px;
  margin: 10px;
`;

const Desc = styled.Text`
  font-size: 18px;
  color: white;
`;

const MovieScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <Container>
      <Feature moviescreen />
      <InfoBottomContainer>
        <Desc>
          With three different, multifilm iterations of the web-slinging
          superhero swinging through multiplexes in less than two decades, did
          moviegoers really need another, animated one? Beautifully animated,
          cleverly scripted and ingeniously voiced.
        </Desc>
      </InfoBottomContainer>
    </Container>
  );
};

export default MovieScreen;
