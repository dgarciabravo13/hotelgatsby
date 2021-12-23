import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { SCBackgroundImage } from './HotelImage.style';
import { Text } from '../Text/Text';

const HotelImage = () => {

    const {image} = useStaticQuery(graphql`
    query{
        image:file(relativePath:{eq:"8.jpg"}){
          
        sharp:childImageSharp{
                fluid{
                    ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
    `)
    return ( 
        <SCBackgroundImage tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <div className="image-text">
                <Text as="h1" size="m_l_regular" desktopSize="d_xl_regular">Bienvenido a hotel Gatsby</Text>
                <Text>El mejor hotel para tus vacaciones</Text>
            </div>
        </SCBackgroundImage>
     );
}
 
export default HotelImage;