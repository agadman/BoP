import React from 'react';
import { InnerWrapper } from './global/GlobalWrappers';
import DummyImg from '../assets/dummy_img.png';
import styled from 'styled-components';

const About = () => {
 return (
  <InnerWrapper>
    <AboutContainer id="about">
    <h3>Om oss</h3>
    <p><em>We love painting</em></p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <FoundersContainer>
      <div className="item1">
        <p>Grundarna</p>
        <img src={DummyImg} alt="dummy img" />
      </div>
      <div className="item2">
        <p>Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </FoundersContainer>
  </AboutContainer>
  </InnerWrapper>
 );
};
export default About;

const AboutContainer = styled.div`
 text-align: center;
 padding: 5%;
 background-color: #f0f0f0;
`;

const FoundersContainer = styled.div`
  display: flex;
  gap: 50px;
  padding: 5% 20%;

  .item1 {
    width: 1000px;
    height: 1000px;
  }

  .item2 {
    text-align: left;
  }
`