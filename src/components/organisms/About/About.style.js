import styled from "styled-components";

export const SCAbout = styled.div`



    >h2{
        margin-top: 3rem;
    }
      .about-text {
    padding-top: 5rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;
    > p {
      line-height: 1.8;
    }
    @media (min-width: 768px) {
      /* display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 2rem; */
      display:flex;
      flex:1;
      column-gap:2rem;
      margin-bottom:10rem;
    }

    @media (min-width: 1441px) {
      margin-bottom:28rem;
    }

  }

  /* @media (min-width: 768px) {
    height:100%;
  } */
`;