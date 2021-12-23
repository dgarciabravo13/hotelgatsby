import React from "react";
import { Text } from "../../atoms/Text/Text";
import Navbar from "../../molecules/Navbar/Navbar";
import { LinkToHome, SCHeader } from "./Header.style";

const Header = () => {
  return (
    <SCHeader>
      <div className="header-container">
        <LinkToHome to="/">
          <Text as="h1" size="d_s_regular" color="white" centered>
            V&A Consultores, S.L
          </Text>
        </LinkToHome>

        <Navbar />
      </div>
    </SCHeader>
  )
}

export default Header
