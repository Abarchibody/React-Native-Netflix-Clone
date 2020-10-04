import React from "react";
import styled from "styled-components/native";

const Poster = styled.Image`
  height: 100px;
  width: 60px;
  border-radius: 10px;
`;

const MovieItem = ({ item }) => {
  console.log(item);
  return <Poster source={{ uri: item.poster }} />;
};

export default MovieItem;
