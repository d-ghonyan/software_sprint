import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { FaBars } from "react-icons/fa";
import { useMatch, useResolvedPath } from "react-router-dom"
import { Link as LinkR } from "react-router-dom";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavLinksr
} from "./NavbarElements";
import { animateScroll as scroll } from "react-scroll";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <>
      <IconContext.Provider value={{ color: "black" }}></IconContext.Provider>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img src="..//logo.png" width="169" alt="logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={400}
                spy={true}
                exact={"true"}
                offset={-80}
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinksr
                to="events"
				color = "black"
                // smooth={true}
                // duration={400}
                // spy={true}
                // exact={"true"}
                // offset={-80}
              >
                Events
              </NavLinksr> 
            </NavItem>
            <NavItem>
              <NavLinksr
                to="faq"
				color = "black"
                // smooth={true}
                // duration={400}
                // spy={true}
                // exact={"true"}
                // offset={-80}
              >
                F.A.Q.
              </NavLinksr>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="signin">Sign in</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <LinkR to={to} {...props}>
        {children}
      </LinkR>
    </li>
  )
}

export default Navbar;
