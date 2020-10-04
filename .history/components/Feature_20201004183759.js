import React from "react";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";
import { Dimensions, Text } from "react-native";

const { height } = Dimensions.get("window");

const Poster = styled.ImageBackground`
  width: 100%;
  height: ${height * 0.8}px;
`;

const Gradient = styled(LinearGradient)`
  height: 100%;
`;

const TitleArea = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: 50;
`;

const TitleBanner = styled.Image`
  height: 100px;
`;

const Feature = () => {
  return (
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
          source={{
            uri:
              "https://occ-0-3274-1433.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaZ-N8LY6SOHp3qn8zrEUHeaWEdDnixrAbTCk_hMkyfSaaD6sepRBx3bQ28_W2JGSFliKbAK9UDbsVIvjr8MO28dxJ8qaFYDYWsj.webp?r=aa1",
          }}
        />
      </TitleArea>
    </Poster>
  );
};

export default Feature;
