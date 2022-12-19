import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
  SidebarRouteNav
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarRouteNav to="events" onClick={toggle}>
            Events
          </SidebarRouteNav>
          <SidebarRouteNav to="faq" onClick={toggle}>
            F.A.Q.
          </SidebarRouteNav>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="signin" onClick={toggle}>
            Sign in
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
