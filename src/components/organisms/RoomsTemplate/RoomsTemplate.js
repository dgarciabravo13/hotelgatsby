import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../layout/Layout/Layout';
import { Text } from '../../atoms/Text/Text';
import { GatsbyImage } from 'gatsby-plugin-image';
import { SCRoomsTemplate } from './RoomsTemplate.style';



export const query = graphql`
query($slug:String!){
	allDatoCmsHabitacion(filter:{slug:{eq:$slug}}){
    nodes{
      titulo
      contenido
      imagen{
				gatsbyImageData
      }
      
      }
    }
  }
`


const RoomsTemplate = ({data}) => {

    const {titulo, contenido, imagen} = data.allDatoCmsHabitacion.nodes[0];

    console.log(titulo);

    return (
        <Layout>
            <SCRoomsTemplate>
                <Text centered size="d_xl_regular" as="h1">{titulo}</Text>
                <Text>{contenido}</Text>
                <GatsbyImage image={imagen.gatsbyImageData} alt="about"/>
            </SCRoomsTemplate>
        </Layout>

      );
}
 
export default RoomsTemplate;