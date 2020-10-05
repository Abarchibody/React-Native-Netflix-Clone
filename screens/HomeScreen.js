import React from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import Feature from "../components/Feature";
import Stories from "../components/Stories";
import Movies from "../components/Movies";
import {
  trendMovieArray,
  hotMovieArray,
  comedyMovieArray,
  thrillerMovieArray,
} from "../dummyData";

const Container = styled.ScrollView`
  flex: 1;
  background-color: #000;
`;

const HomeScreen = ({ navigation }) => {
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
        <Movies
          navigation={navigation}
          movies={trendMovieArray}
          title="Trends"
        />
        <Movies navigation={navigation} movies={hotMovieArray} title="Hot" />
        <Movies
          navigation={navigation}
          movies={hotMovieArray}
          title="Top 10 in Your Country"
          top10
        />
        <Movies
          navigation={navigation}
          movies={comedyMovieArray}
          title="Best Comedies"
        />
        <Movies
          navigation={navigation}
          movies={thrillerMovieArray}
          title="Horror Movies"
        />
      </Container>
    </>
  );
};

export default HomeScreen;
