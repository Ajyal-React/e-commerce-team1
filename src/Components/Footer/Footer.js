import React from "react";
import "./Footer.css";
import {
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaWhatsappSquare,
} from "react-icons/fa";

import {
  StyledUl,
  Container,
  FlexBox,
  StyledParagraph,
} from "../../Global.Style";

function Footer() {
  return (
    <footer>
      <Container className="main">
        <FlexBox>
          <div className="contant">
            <img src="/Images/logo.png" alt="logo" />
            <p className="preg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="liset_item">
            <h4>Home</h4>

            <StyledUl>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  Featured Categories
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  Featured Products
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  offers
                </StyledParagraph>
              </li>
            </StyledUl>
          </div>
          <div className="liset_item">
            <h4>Menu</h4>
            <StyledUl>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  Home
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  New arrival
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  Mobiles
                </StyledParagraph>
              </li>
            </StyledUl>
          </div>
          <div className="liset_item">
            <h4>Menu</h4>

            <StyledUl>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  Laptops
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  Headphones
                </StyledParagraph>
              </li>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#646363">
                  Accessories
                </StyledParagraph>
              </li>
            </StyledUl>
          </div>
          <div className="liset_item contacts">
            <h4>Contacts</h4>

            <StyledUl>
              <li>
                <StyledParagraph fontSize="0.9rem" color="#302F2F">
                  Fell free get in touch with us via phone or send us a message
                </StyledParagraph>
              </li>
            </StyledUl>

            <div className="icon_content">
              <FaPhone color="#FA7400" />
              <p>+1 234 567 89 10</p>
            </div>
            <div className="icon_content">
              <FaEnvelope color="#FA7400" />
              <p>support@khoomi.com</p>
            </div>
          </div>
        </FlexBox>
        <div className="endSection">
          <p>all copyRihts are reserved @2022</p>
          <div className="icon">
            <FaFacebook color="#4267B2" size="20px" />
            <FaWhatsappSquare color="#25D366" size="20px" />
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
