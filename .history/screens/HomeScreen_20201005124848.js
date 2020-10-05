import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Feature from "../components/Feature";
import Stories from "../components/Stories";
import Movies from "../components/Movies";
import { trendMovieArray, hotMovieArray, comedyMovieArray, thrillerMovieArray } from "../dummyData";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const HomeScreen = () => {
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
        <Movies movies={trendMovieArray} title="Trends" />
        <Movies movies={hotMovieArray} title="Hot" />
        <Movies movies={hotMovieArray} title="Top 10 in Your Country" top10/>
        <Movies movies={comedyMovieArray} title="Best Comedies" />
        <Movies movies={thrillerMovieArray} title="Horror Movies" />
      </Container>
    </>
  );
};

export default HomeScreen;
