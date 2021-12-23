import { Link } from "gatsby";
import styled from "styled-components";

export const SCFooter = styled.footer`

    background-color:${({theme})=> theme.color.blue};
    padding: 1rem;

    .footer-container{
        max-width:1200px;
        margin: 0 auto;
    }

    @media(min-width: 768px){
        .footer-container{
            display:flex;
            align-items:center;
            justify-content:space-between;
        }
    }

`;

export const LinkToHome = styled(Link)`
    text-decoration:none;
`;
