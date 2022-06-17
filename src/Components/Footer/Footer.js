import React from "react";
import "./Footer.css";
import { FaPhone,FaEnvelope,FaFacebook,FaWhatsappSquare } from 'react-icons/fa';
// import {Container} from '../../../Global.Style'
import {
    StyledUl,
    Container,
    FlexBox,
    StyledButton,
    StyledAnchor,
    FlexBoxCol,
  } from "../../Global.Style";


function Footer (){
    return(
        <footer>
      <Container>
        <FlexBox>
            
        <div className="Contener">
       
        <div className="contant">
            <img  src='/Images/logo.png' alt="logo" />
          <p className="preg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
         <div className="liset_item">
         <h4>Home</h4> 
        <ul>
        <StyledUl>
            <li>Featured Categories</li>
           <li>Featured Products</li>
          <li>Offers</li>
          </StyledUl>
            </ul>
         </div>
         <div className="liset_item">
         <h4>Menu</h4>
         <ul>
         <StyledUl>
            <li>Home</li>
        <li>New arrival</li>
        <li>Mobiles</li>
        </StyledUl>
            </ul>
         </div>
         <div className="liset_item">
         <h4>Menu</h4>
         <ul>
            <StyledUl>
            <li>Laptops</li>
            <li>amal</li>
        <li>Headphones</li>
        <li>Accessories</li> 
            </StyledUl>
            </ul>
         </div>
         <div className="liset_item">
         <h4>Contacts</h4>
            <ul>
            <StyledUl>
            <li>Fell free get in touch with us via phone or send us a message</li>
            </StyledUl>
            </ul>
            <div className="icon_content">   
            <FaPhone />
            <p>+1 234 567 89 10</p>
            </div>
            <div className="icon_content">   
            <FaEnvelope />
            <p>support@khoomi.com</p>
            </div>
         </div>
         <div className="liner"></div>
        </div>
        
        </FlexBox>
        <div className="endSection">
        <p>all copyRihts are reserved @2022</p>
      <div className="icon">
      <FaFacebook />
        <FaWhatsappSquare />
      </div>
     
        </div>
           
        </Container>
        </footer>
      
      
    )

}
export default Footer;
      