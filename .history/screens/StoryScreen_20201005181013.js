import React from "react";
import styled from "styled-components/native";
import { Video } from "expo-av";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const BackIcon = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 20px;
`;

const StoryScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <>
      <Video
        source={require("../assets/story1.mp4")}
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
    </>
  );
};

export default StoryScreen;
