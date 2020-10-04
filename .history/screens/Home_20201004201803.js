import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Feature from "../components/Feature";
import Stories from "../components/Stories";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Home = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <Container>
        <Feature />
        <Stories />
      </Container>
    </>
  );
};

export default Home;
