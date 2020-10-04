import React from "react";
import { FlatList } from "react-native";
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

const Movies = ({ movies }) => {
  return (
    <Container>
      <Title>Trends</Title>
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
