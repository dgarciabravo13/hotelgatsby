import React from "react"
import { Text } from "../../atoms/Text/Text"
import { GatsbyImage } from "gatsby-plugin-image"
import { Button, SCRoomPreview } from "./RoomPreview.style"

const RoomPreview = ({ room }) => {
  const { titulo, contenido, imagen, slug } = room

  return (
    <SCRoomPreview>
      <GatsbyImage image={imagen.gatsbyImageData} alt="room" />
      <div className="room-card">
        <Text as="h3">{titulo}</Text>
        <Text desktopSize="d_s_regular">{contenido}</Text>
        <Button to={slug}>Ver Habitación</Button>
      </div>
    </SCRoomPreview>
  )
}

export default RoomPreview
