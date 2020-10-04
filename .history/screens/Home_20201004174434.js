import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import styled from "styled-components/native";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const Poster = styled.ImageBackground`
  width: 100%;
  height: 520px;
`;

const Home = () => {
  return (
    <Container>
      <Poster
        source={{
          uri:
            "https://i.insider.com/59a81c106eac400d4a8b598a?width=1136&format=jpeg",
        }}
      />
    </Container>
  );
};

export default Home;
