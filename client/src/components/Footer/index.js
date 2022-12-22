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
        <FooterLinksContainer>s
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              {/* <FooterLink to="/"> About Us</FooterLink> */}
			  <p><a href="mailto:labs.student.union@tumo.org" color = "white ">Mail</a></p>
              {/* <FooterLink to="labs.student.union@tumo.org"> Mail</FooterLink> */}
              {/* <FooterLink to="/"> Testimontails</FooterLink>
              <FooterLink to="/"> Careers</FooterLink>
              <FooterLink to="/"> Investors</FooterLink> */}
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
              <SocialIconLink href="https://ru-ru.facebook.com/tumolabs/" target="_blank" aria-label="FaceBook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="https://www.instagram.com/tumolabs/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="https://www.youtube.com/channel/UC1spAfywefFdHxrKWLZaDuA" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="https://am.linkedin.com/school/tumo-labs/" target="_blank" aria-label="Linkedin">
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
//#D97182