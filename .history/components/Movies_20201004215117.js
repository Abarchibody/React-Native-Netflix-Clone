import React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import MovieItem from "./MovieItem";

const Container = styled.View`
  margin: 10px;
  width: 100%;
  height: ${(props) => (props.top10 ? "250px" : "170px")};
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

const Movies = ({ movies, title, top10 }) => {
  return (
    <Container top10={top10} >
      <Title>{title}</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        data={movies}
        renderItem={({ item }) => <MovieItem item={item} />}
      />
    </Container>
  );
};

export default Movies;
