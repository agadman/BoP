import React from 'react';
import HeroImg from '../assets/paint.jpg';
import styled from 'styled-components';

const Hero = () => {
 return (
   <HomeContainer id="home">
     <div className="w3-display-middle">
       <MiddleContent>
         <Logo>
            <p>WEBSITE NAME</p>    
         </Logo>
       </MiddleContent>
     </div>
   </HomeContainer>
 );
};
export default Hero;

const HomeContainer = styled.div`
 background-attachment: fixed;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 background-image: url(${HeroImg});
 // min-height: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const MiddleContent = styled.div`
 background-color: #333;
`;

const Logo = styled.div`
 letter-spacing: 10px;
 cursor: pointer;
 padding: 8%;
 text-align: center;
`;
