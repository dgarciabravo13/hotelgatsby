import { graphql, useStaticQuery } from "gatsby";


const useRooms = () => {

    const data = useStaticQuery(graphql`
    
    query{
        allDatoCmsHabitacion{
            nodes{
                titulo
          id
          contenido
          slug
          imagen{
                    gatsbyImageData
          }
        }
      }
    }
    `
)
    return data.allDatoCmsHabitacion.nodes.map(room => ({
        titulo: room.titulo,
        id:room.id,
        slug:room.slug,
        contenido:room.contenido,
        imagen:room.imagen

    }))
}
 
export default useRooms;