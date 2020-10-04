import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 10px;
  width: 100%;
  height: 100px;
  background-color: coral;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Movies = () => {
  return <Container>
      <Title>Trends</Title>
  </Container>;
};

export default Movies;
