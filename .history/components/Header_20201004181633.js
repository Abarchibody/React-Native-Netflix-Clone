import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
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

const Header = () => {
  return (
    <Container>
      <Logo
        source={{
          uri:
            "https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png",
        }}
        resizeMethod="contain"
      />
    </Container>
  );
};

export default Header;
