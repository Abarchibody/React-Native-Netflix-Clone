import React from "react";
import styled from "styled-components/native";
import { Video } from "expo-av";
import { Dimensions, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const BackIcon = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 20px;
`;

const MovieInfoContainer = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 50px;
  flex-direction: row;
  align-items: center;
`;

const MoviePoster = styled.Image`
  height: 32px;
  width: 32px;
  border-radius: 50px;
`;

const MovieTitle = styled.Text`
  margin-left: 10px;
  font-weight: bold;
  color: #808282;
`;

const StoryScreen = ({ navigation, route }) => {
  const { stories, index } = route.params;
  const item = stories[index];

  const handlePress = (e) => {
    if (e.nativeEvent.locationX < width / 2) {
      stories[index - 1] &&
        navigation.navigate("Story", { stories, index: index - 1 });
    } else {
      stories[index + 1]
        ? navigation.navigate("Story", { stories, index: index + 1 })
        : navigation.navigate("Home");
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Video
        source={{
          uri: item.video,
        }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        style={{ width, height }}
      />
      <BackIcon onPress={() => navigation.goBack()}>
        <Ionicons name="md-arrow-back" size={32} color="white" />
      </BackIcon>
      <MovieInfoContainer
      >
        <MoviePoster source={{ uri: item.poster }} resizeMode="cover" />
        <MovieTitle>{item.name}</MovieTitle>
      </MovieInfoContainer>
    </TouchableOpacity>
  );
};

export default StoryScreen;
