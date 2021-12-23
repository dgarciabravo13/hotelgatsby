import React from 'react';
import { SCLinkNav, SCNav } from './Navbar.style';
const Navbar = () => {
    return ( 
        <SCNav>
            <SCLinkNav color="white" to={"/"} activeClassName="selected">Inicio</SCLinkNav>
            <SCLinkNav color="white" to={"/about-page"} activeClassName="selected">Nosotros</SCLinkNav>
        </SCNav>
    );
}
 
export default Navbar;