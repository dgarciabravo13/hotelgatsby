import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";


export const SCBackgroundImage = styled(BackgroundImage)`
    height:700px;

    .image-text{
        background-image:linear-gradient(to top, rgba(34, 49, 63, .8),rgba(34, 49, 63, .8));
        color:#FFFFFF;
        height: 100%;
        display:flex;
        flex-direction:column;
        flex:1;
        align-items:center;
        justify-content: center;
        /* h1{
            font-size: 3.5rem;
            margin:0%;
            @media(min-width:992px){
                font-size: 5.8rem;
            }
        } */
        p{
            font-size:2rem;
            @media(min-width:992px){
                font-size: 2.6rem;
            }
        }
    }
`;
