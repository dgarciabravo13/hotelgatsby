import styled from "styled-components"

export const SCHome = styled.div`
  .home-text {
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    > p {
      line-height: 1.8;
    }
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem;
    }
  }
`
