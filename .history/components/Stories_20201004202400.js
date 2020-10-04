import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin: 10px;
  width: 100%;
  background-color: coral;
  height: 120px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const Stories = () => {
  return (
    <Container>
      <Title>Special Videos</Title>
    </Container>
  );
};

export default Stories;
