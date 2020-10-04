import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  margin-top: 20px;
  width: 100%;
  background-color: coral;
  height: 100px;
`;

const Title = styled.Text`
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
