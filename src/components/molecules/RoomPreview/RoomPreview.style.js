import { Link } from "gatsby"
import styled from "styled-components"

export const SCRoomPreview = styled.div`
  border: 1px solid #e1e1e1;
  margin-bottom: 2rem;
  .room-card {
    padding: 3rem;
    p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`

export const Button = styled(Link)`
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${({theme})=> theme.color.blue};
  width: 100%auto;
  color: #ffffff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
`
