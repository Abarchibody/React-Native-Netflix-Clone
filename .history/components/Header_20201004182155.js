import React from "react";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 25px 25px 0 25px;
  width: 100%;
`;

const Logo = styled.Image`
  width: 20px;
  height: 40px;
`;

const MenuText = styled.Text`
  font-size: 18px;
  color: #fff;
`;

const Header = () => {
  return (
    <Container>
      <Logo
        source={{
          uri:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2015_N_logo.svg/1200px-Netflix_2015_N_logo.svg.png",
        }}
        resizeMode="contain"
      />
      <MenuText>Series</MenuText>
      <MenuText>Movies</MenuText>
      <MenuText>My List</MenuText>
    </Container>
  );
};

export default Header;
