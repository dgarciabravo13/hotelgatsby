import React from "react";
import {graphql, useStaticQuery} from 'gatsby';
import {GatsbyImage} from "gatsby-plugin-image";
import {Text} from "../../atoms/Text/Text";
import { SCAbout } from "./About.style";

const About = () => {

    const info = useStaticQuery(graphql`
    query{
        allDatoCmsPagina(filter:{slug:{eq: "nosotros"}}){
            nodes{
                titulo
          contenido
          imagen {
            gatsbyImageData
          }
        }
      }
    }
    `)

    // console.log(info.allDatoCmsPagina.nodes[0]);

    const {contenido, imagen, titulo} = info.allDatoCmsPagina.nodes[0];
    
    return (
        <SCAbout>
        <Text centered size="m_l_regular" desktopSize="d_l_regular" as="h2">{titulo}</Text>
        <div className="about-text">
          <Text size="m_m_regular">{contenido}</Text>
          <GatsbyImage image={imagen.gatsbyImageData} alt="about"/>
        </div>
        </SCAbout>
    )
}

export default About;