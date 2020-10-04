import React from "react";
import styled from "styled-components/native";

const Poster = styled.Image`
  height: ${props=> props.top10 ? "200px" : "130px"};
  width:  ${props=> props.top10 ? "150px" : "130px"};
  border-radius: 10px;
  margin-right: 15px;
`;

const Logo = styled.Image`
  height: 15px;
  width: 15px;
  position: absolute;
  top: 5px;
  left: 2px;
`;

const MovieItem = ({ item, top10 }) => {
  return (
    <>
      <Poster source={{ uri: item.poster }} resizeMode="cover" top10={top10} />
      {item.original && (
        <Logo
          source={{
            uri:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png",
          }}
          resizeMode="contain"
        />
      )}
    </>
  );
};

export default MovieItem;
