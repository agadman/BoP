import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
 return (
   <NavbarContainer>
     <NavLinks>
       <a href="#home">HEM</a>
       <a href="#about">OM OSS</a>
       <a href="#portfolio">PROJEKT</a>
       <a href="#contact">KONTAKT</a>
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
 position: fixed;
  top: 0;
  width: 100%;
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