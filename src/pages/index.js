import * as React from "react"
import HotelImage from "../components/atoms/HotelImage/HotelImage"
import Home from "../components/organisms/Home/Home"
import Layout from "../components/layout/Layout/Layout"
import useRooms from "../hooks/useRooms"
import { Text } from "../components/atoms/Text/Text"
import RoomPreview from "../components/molecules/RoomPreview/RoomPreview"
import { SCIndex } from "../components/layout/Index/Index.style"

const IndexPage = () => {
  
  const rooms = useRooms()

console.log(rooms)
  return(

    <Layout>
      <SCIndex>

      <HotelImage/>
      <Home/>

      <Text centered as="h2">Nuestras Habitaciones</Text>
      <ul>
        {rooms.map(room => <RoomPreview key={room.id} room={room}/>)}
      </ul>

      </SCIndex>


    </Layout>
)
}

export default IndexPage
