import React from "react";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const MovieScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item)
  return <Container></Container>;
};

export default MovieScreen;
