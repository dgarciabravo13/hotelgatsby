import React from "react"
import { Text } from "../../atoms/Text/Text"
import Navbar from "../../molecules/Navbar/Navbar"
import { LinkToHome, SCFooter } from "./Footer.style"

const Footer = ({title}) => {

  const year = new Date().getFullYear();

  return (
    <SCFooter>
      <div className="footer-container">
        <Navbar />
        <LinkToHome to="/">
          <Text as="h1" size="d_s_regular" color="white" centered>
            Gatsby Hotel
          </Text>
        </LinkToHome>
      </div>
      <Text size="m_s_regular" centered color="white">{title}. Todos los derechos reservados. {year} </Text>
    </SCFooter>

  )
}

export default Footer
