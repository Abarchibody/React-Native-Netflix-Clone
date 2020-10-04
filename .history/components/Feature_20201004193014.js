import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Dimensions, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${height * 0.75}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const TitleArea = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 150px;
`;

const TitleBanner = styled.Image`
  height: 100px;
  width: 100%;
`;

const TopNumberArea = styled.View`
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const TopNumberCount = styled.Text`
  color: white;
  font-size: 8px;
  font-weight: 900;
  border-width: 2px;
  border-color: white;
  padding: 2px;
  align-content: center;
`;

const TopNumberText = styled.Text`
  color: white;
  font-weight: bold;
`;

const TitleInfo = styled.View`
  margin-top: 20px;
  width: 60%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const Icon = styled.TouchableOpacity``;

const IconText = styled.Text`
  color: #dee2e6;
  font-size: 13px;
`;

const Button = styled.TouchableOpacity`
  background-color: white;
  border-radius: 5px;
  flex-direction: row;
  color: white;
  align-items: center;
  padding: 5px;
`;

const ButtonText = styled.Text`
  color: black;
  font-weight: 700;
`;

const Feature = () => {
  return (
    <>
      <Poster
        source={{
          uri:
            "https://i.insider.com/59a81c106eac400d4a8b598a?width=1136&format=jpeg",
        }}
      >
        <Gradient
          locations={[0, 0.2, 0.6, 0.93]}
          colors={[
            "rgba(0,0,0,0.5)",
            "rgba(0,0,0,0)",
            "rgba(0,0,0,0)",
            "rgba(0,0,0,1)",
          ]}
        >
          <Header />
        </Gradient>
        <TitleArea>
          <TitleBanner
            resizeMode="contain"
            source={{
              uri:
                "https://fanart.tv/fanart/movies/474350/hdmovielogo/it-chapter-2-5d3140f6d7110.png",
            }}
          />
          <TopNumberArea>
            <TopNumberCount>{`TOP,\n2`}</TopNumberCount>
            <TopNumberText>Top 2 in your country</TopNumberText>
          </TopNumberArea>
          <TitleInfo>
            <Icon>
              <AntDesign name="plus" size={24} color="white" />
              <IconText>List</IconText>
            </Icon>
            <Button>
              <Entypo name="controller-play" size={24} color="black" />
              <ButtonText>Watch</ButtonText>
            </Button>
            <Icon>
              <Feather name="info" size={24} color="white" />
              <IconText>Info</IconText>
            </Icon>
          </TitleInfo>
        </TitleArea>
      </Poster>
    </>
  );
};

export default Feature;
