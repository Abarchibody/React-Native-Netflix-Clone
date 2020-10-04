import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Feature from "../components/Feature";
import Stories from "../components/Stories";
import Movies from "../components/Movies";
import { trendMovieArray, hotMovieArray } from "../dummyData";

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
        <Movies movies={trendMovieArray} />
        <Movies movies={hotMovieArray} />
        <Movies movies={trendMovieArray} />
        <Movies movies={trendMovieArray} />
      </Container>
    </>
  );
};

export default Home;
