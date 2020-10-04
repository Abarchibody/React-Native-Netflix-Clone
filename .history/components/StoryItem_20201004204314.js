import React from "react";
import styled from "styled-components/native";

const Poster = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-width: 1px;
  border-color: red;
`;

const StoryItem = ({ item }) => {
  return <Poster source={{ uri: item.poster }} />;
};

export default StoryItem;
