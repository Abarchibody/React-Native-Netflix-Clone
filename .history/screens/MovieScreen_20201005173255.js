import React from "react";
import styled from "styled-components/native";
import { Text, Dimensions } from "react-native";
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
  margin-right: 5px;
  font-size: 16px;
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
  height: ${height * 0.08}px;
  margin: 10px;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.View`
  margin: 25px;
  align-items: center;
`;

const MovieScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <Container>
      <Feature moviescreen item={item} navigation={navigation} />
      <InfoBottomContainer>
        <Desc>{item.desc.slice(0, 200)}...</Desc>
        <CastText>
          <CastTextBold>Lead Players:</CastTextBold> Sarah Paulson, Finn
          Wittrock, Judy Davis...
        </CastText>
        <CastText>
          <CastTextBold>Creator:</CastTextBold> Alan Sandman
        </CastText>
      </InfoBottomContainer>
      <IconsContainer>
        <IconContainer>
          <AntDesign name="plus" size={32} color="white" />
          <Text style={{ color: "white" }}>List</Text>
        </IconContainer>
        <IconContainer>
          <AntDesign name="like2" size={32} color="white" />
          <Text style={{ color: "white" }}>Rate</Text>
        </IconContainer>
        <IconContainer>
          <AntDesign name="sharealt" size={32} color="white" />
          <Text style={{ color: "white" }}>Share</Text>
        </IconContainer>
      </IconsContainer>
    </Container>
  );
};

export default MovieScreen;
