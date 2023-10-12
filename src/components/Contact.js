import React from 'react';
import ContactImg from '../assets/paint-brush.jpg';
import styled from 'styled-components';

const ContactComponent = () => {
 return (
   <ContactSection>
     <ParallaxImage className="bgimg-3" imageUrl={ContactImg} minHeight={400}>
       <ContactContainer>
         <ContactContent>
           <ContactHeader>Kontakta oss</ContactHeader>
           <ContactText><em>I'd love your feedback!</em></ContactText>
           <div className="w3-row w3-padding-32 w3-section">
             <ContactDetails>
               <i className="fa fa-map-marker fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Chicago, US<br />
               <i className="fa fa-phone fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Phone: +00 151515<br />
               <i className="fa fa-envelope fa-fw w3-hover-text-black w3-xlarge w3-margin-right"></i> Email: mail@mail.com<br />
             </ContactDetails>
           </div>
         </ContactContent>
       </ContactContainer>
     </ParallaxImage>
   </ContactSection>
 );
};

export default ContactComponent;

const ParallaxImage = styled.div`
 background-attachment: fixed;
 background-position: center;
 background-repeat: no-repeat;
 background-size: cover;
 min-height: ${(props) => props.minHeight}px;
 background-image: url(${(props) => props.imageUrl});
`;

const ContactSection = styled.div`
 font-family: "Lato", sans-serif;
 height: 100%;
 color: #777;
 line-height: 1.8;
`;

const ContactContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 min-height: 400px;
`;

const ContactContent = styled.div`
 text-align: center;
 background-color: #fff;
 padding: 3%;
`;

const ContactHeader = styled.h3`
 font-size: 24px;
`;

const ContactText = styled.p`
 font-style: italic;
`;

const ContactDetails = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 margin-bottom: 20px;

 i {
   margin-right: 10px;
   font-size: 24px;
 }
`;