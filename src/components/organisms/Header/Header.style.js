import { Link } from "gatsby"
import styled from "styled-components"

export const SCHeader = styled.header`
  background-color: ${({ theme }) => theme.color.blue};
  padding: 1rem;

  .header-container {
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    .header-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`

export const LinkToHome = styled(Link)`
  text-decoration: none;
`
