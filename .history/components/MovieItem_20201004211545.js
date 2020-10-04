import React from "react";
import styled from "styled-components/native";

const Poster = styled.Image`
  height: 120px;
  width: 90px;
  border-radius: 10px;
  margin-right: 10px;
`;

const MovieItem = ({ item }) => {
  console.log(item);
  return <Poster source={{ uri: item.poster }} />;
};

export default MovieItem;
