import styled from "styled-components";

export const SCIndex = styled.div`

    >h2{
        margin-top: 5rem;
    }

    >ul{
        max-width:1200px;
        width:95%;
        margin:4rem auto 0 auto;
        @media(min-width:768px){
            display:grid;
            grid-template-columns:repeat(3, 1fr);
            column-gap: 3rem;
        }
    }

`;

