import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
 return (
   <NavbarContainer>
     <NavLinks>
       <a href="#home">HOME</a>
       <a href="#about">ABOUT</a>
       <a href="#portfolio">PORTFOLIO</a>
       <a href="#contact">CONTACT</a>
     </NavLinks>
     <MobileNav>
       <a href="#about">ABOUT</a>
       <a href="#portfolio">PORTFOLIO</a>
       <a href="#contact">CONTACT</a>
     </MobileNav>
   </NavbarContainer>
 );
};

export default Navigation;

const NavbarContainer = styled.div`
 background-color: #333;
 color: #fff;
 padding: 10px;
 display: flex;
 justify-content: space-between;
`;

const NavLinks = styled.div`
 a {
   color: #fff;
   text-decoration: none;
   margin: 0 10px;
   font-size: 16px;
 }
`;

const MobileNav = styled.div`
 display: none;

 @media (max-width: 768px) {
   display: block;
 }
`;