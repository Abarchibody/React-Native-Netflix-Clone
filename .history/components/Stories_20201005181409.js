import React from "react";
import { FlatList } from "react-native";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import StoryItem from "./StoryItem";

const Container = styled.View`
  margin: 10px;
  width: 100%;
  height: 120px;
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

const storyArray = [
  {
    id: 1,
    movieId: 1,
    name: "Pulp Fiction",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Pulp_Fiction_Logo.png",
    video:
      "https://vod-progressive.akamaized.net/exp=1601928793~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4437%2F14%2F372185935%2F1546275438.mp4~hmac=b79536844ed8beeb484e930b93fda074fe54536391d52d5d4412fa5080993547/vimeo-prod-skyfire-std-us/01/4437/14/372185935/1546275438.mp4?filename=video.mp4",
  },
  {
    id: 2,
    movieId: 2,
    name: "Whiplash",
    poster:
      "https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2014/10/14/Weekend/Images/Film_Review_Whiplash-0908c.jpg",
    logo:
      "https://4.bp.blogspot.com/-Tlo1Oj--0sA/VHMOZIbcRWI/AAAAAAAAI7k/B6RUcQszw9I/s1600/Whiplash%2BTitle.png",
    video: "story2.mp4",
  },
  {
    id: 3,
    movieId: 3,
    name: "Armageddon",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Armageddon-poster06.jpg",
    logo:
      "https://vignette.wikia.nocookie.net/logopedia/images/8/86/Armageddon-movie-logo.png/revision/latest/scale-to-width-down/340?cb=20150919000323",
    video: "story3.mp4",
  },
  {
    id: 4,
    movieId: 4,
    name: "Pulp Fiction",
    poster:
      "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Pulp_Fiction_Logo.png",
    video: "story1.mp4",
  },
  {
    id: 5,
    movieId: 5,
    name: "Whiplash",
    poster:
      "https://img.washingtonpost.com/rw/2010-2019/WashingtonPost/2014/10/14/Weekend/Images/Film_Review_Whiplash-0908c.jpg",
    logo:
      "https://4.bp.blogspot.com/-Tlo1Oj--0sA/VHMOZIbcRWI/AAAAAAAAI7k/B6RUcQszw9I/s1600/Whiplash%2BTitle.png",
    video: "story2.mp4",
  },
  {
    id: 6,
    movieId: 6,
    name: "Armageddon",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Armageddon-poster06.jpg",
    logo:
      "https://vignette.wikia.nocookie.net/logopedia/images/8/86/Armageddon-movie-logo.png/revision/latest/scale-to-width-down/340?cb=20150919000323",
    video: "story3.mp4",
  },
];

const Stories = ({ navigation }) => {
  return (
    <Container>
      <Title>Special Videos</Title>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={storyArray}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Story", { item })}
          >
            <StoryItem stories={storyArray} item={item} />
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};

export default Stories;
