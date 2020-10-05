import React from "react";
import styled from "styled-components/native";
import Feature from "../components/Feature";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const MovieScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <Container>
      <Feature moviescreen/>
    </Container>
  );
};

export default MovieScreen;
