import React from 'react';
import { FaArrowUp } from "react-icons/fa";
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
       <i className="fa fa-facebook-official w3-hover-opacity"></i>
       <i className="fa fa-instagram w3-hover-opacity"></i>
       <i className="fa fa-linkedin w3-hover-opacity"></i>
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
 font-size: 24px;
 margin-top: 1rem;

 i {
   margin: 0 1rem;
   cursor: pointer;
   &:hover {
     opacity: 0.7;
   }
 }
`;
