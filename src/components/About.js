import React from 'react';
import styled from 'styled-components';

const About = () => {
 return (
   <AboutContainer id="about">
     <h3>Om oss</h3>
     <p><em>We love painting</em></p>
     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
   </AboutContainer>
 );
};
export default About;

const AboutContainer = styled.div`
 text-align: center;
 padding: 64px;
 background-color: #f0f0f0;
`;