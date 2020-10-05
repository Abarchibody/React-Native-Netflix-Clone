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
        source={{
          uri:
            "https://vod-progressive.akamaized.net/exp=1601928793~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4437%2F14%2F372185935%2F1546275438.mp4~hmac=b79536844ed8beeb484e930b93fda074fe54536391d52d5d4412fa5080993547/vimeo-prod-skyfire-std-us/01/4437/14/372185935/1546275438.mp4?filename=video.mp4",
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
    </>
  );
};

export default StoryScreen;
