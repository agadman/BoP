import React from 'react';
import { FaArrowUp, FaInstagram, FaLinkedin } from "react-icons/fa";
import styled from 'styled-components';

const Footer = () => {
 return (
   <FooterContainer>
    <BackToTopWrapper>    
    <a href="#home">
        <ArrowIconWrapper>
            <p>To the top</p>
            <FaArrowUp icon="fa-solid fa-arrow-up" />
        </ArrowIconWrapper>
       </a>
    </BackToTopWrapper>
     <SocialIcons>
       <FaInstagram className="icons" />
       <FaLinkedin className="icons" />
     </SocialIcons>
   </FooterContainer>
 );
};
export default Footer;

const FooterContainer = styled.footer`
 text-align: center;
 background-color: #333;
 padding: 2rem;
 color: #fff;
`;

const BackToTopWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
`;

const ArrowIconWrapper = styled.div`
 display: flex;
 flex-direction: row;
 gap: 5px;
 color: #fff;
`

const SocialIcons = styled.div`
 font-size: 30px;
 margin-top: 1rem;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 10px;

 .icons {
   cursor: pointer;
   &:hover {
     opacity: 0.7;
   }
 }
`;
