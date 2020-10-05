import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { Text } from "react-native";

const Poster = styled.Image`
  height: ${(props) => (props.top10 ? "200px" : "130px")};
  width: ${(props) => (props.top10 ? "150px" : "100px")};
  border-radius: 10px;
  margin-right: 15px;
`;

const Logo = styled.Image`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 5px;
  left: 2px;
`;

const Number = styled.Text`
  font-size: 140px;
  position: absolute;
  top: 50px;
  left: -20px;
  color: black;
`;

const MovieItem = ({ item, top10, index }) => {
  let [fontsLoaded, error] = useFonts({
    "JacquesFrancoisShadow-Regular": require("../assets/fonts/JacquesFrancoisShadow-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>
      {/* <Text
        style={{
          color: "white",
          fontSize: 90,
          fontFamily: "JacquesFrancoisShadow-Regular",
        }}
      >
        AMK123
      </Text> */}
      <Poster source={{ uri: item.poster }} resizeMode="cover" top10={top10} />
      {item.original && (
        <Logo
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png",
          }}
          resizeMode="contain"
        />
      )}
      {top10 && (
        <Number style={{ fontFamily: "JacquesFrancoisShadow-Regular" }}>
          {(index + 1).toString()}
        </Number>
      )}
    </>
  );
};
export default MovieItem;
