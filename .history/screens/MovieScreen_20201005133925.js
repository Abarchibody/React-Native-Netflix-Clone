import React from "react";
import styled from "styled-components/native";
import { Dimensions } from "react-native";
import Feature from "../components/Feature";
import { AntDesign } from "@expo/vector-icons";

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
  margin-top: 10px;
  font-size: 20px;
  color: white;
`;

const CastTextBold = styled.Text`
  margin-top: 5px;
  font-size: 15px;
  color: #f1f3f4;
  font-weight: bold;
`;

const CastText = styled.Text`
  margin-top: 5px;
  font-size: 14px;
  color: white;
`;

const IconsContainer = styled.View`
  width: 100%;
  height: ${height * 0.1}px;
  margin: 10px;
  background-color: coral;
  flex-direction: row;
  align-items: center;
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
        <CastText>
          <CastTextBold>Lead Players:</CastTextBold> Sarah Paulson, Finn
          Wittrock, Judy Davis...
        </CastText>
        <CastText>
          <CastTextBold>Creator:</CastTextBold> Alan Sandman
        </CastText>
      </InfoBottomContainer>
      <IconsContainer>
        <AntDesign name="plus" size={40} color="white" />
        <AntDesign name="like2" size={40} color="white" />
        <AntDesign name="sharealt" size={40} color="white" />
      </IconsContainer>
    </Container>
  );
};

export default MovieScreen;
