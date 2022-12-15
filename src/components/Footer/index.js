import React from "react";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrapp,
  FooterLinksContainer,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialIconLink,
  SocialLogo,
  SocialMediaWrapp,
  SocialIcons,
  SocialMedia,
  WebsiteRights,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapp>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/"> About Us</FooterLink>
              <FooterLink to="/"> How it works</FooterLink>
              <FooterLink to="/"> Testimontails</FooterLink>
              <FooterLink to="/"> Careers</FooterLink>
              <FooterLink to="/"> Investors</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapp>
            <SocialLogo to="/" onClick= {toggleHome}>TUMO Labs</SocialLogo>
            <WebsiteRights>
              TUMO Labs © {new Date().getFullYear()} All righrs reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="FaceBook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedinIn />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapp>
        </SocialMedia>
      </FooterWrapp>
    </FooterContainer>
  );
};

export default Footer;
