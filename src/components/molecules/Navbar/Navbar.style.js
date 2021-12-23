import { Link } from "gatsby";
import styled from "styled-components";

export const SCNav = styled.nav`
    display:flex;
    justify-content:center;
    padding-bottom: 3rem;

    @media(min-width:768px){
        padding-bottom:0;
    }

`;

export const SCLinkNav = styled(Link)`
    color: ${({ theme, color }) => theme.color[color]};
    font-size:1.6rem;
    font-weight:700;
    line-height:1;
    font-family: "PT Sans", sans-serif;
    text-decoration: none;
    padding:1rem;
    margin-right: 1rem;
    &:last-of-type{
        margin-right: 0;
    }
    &.selected{
        border-bottom: 2px solid #fff;
    }
`
