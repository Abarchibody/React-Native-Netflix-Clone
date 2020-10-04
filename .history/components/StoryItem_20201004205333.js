import React from "react";
import styled from "styled-components/native";

const Poster = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border-width: 1px;
  border-color: red;
  margin-top: 10px;
  margin-right: 10px;
`;

const Logo = styled.Image`
  width: 80px;
  height: 10px;
  position: absolute;
  bottom: 1px;
`;

const StoryItem = ({ item }) => {
  return (
    <>
      <Poster source={{ uri: item.poster }} />
      <Logo source={{ uri: item.logo }} resizeMode="contain"/>
    </>
  );
};

export default StoryItem;
