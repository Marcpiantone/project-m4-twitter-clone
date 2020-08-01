import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";
import { COLORS } from "./constants";

import { ReactComponent as Logo } from "../assets/logo.svg";

import { FiHome, FiUser, FiBell, FiBookmark } from "react-icons/fi";
import { CurrentUserContext } from "./CurrentUserContext";

const Sidebar = () => {
  const { currentUser, status } = useContext(CurrentUserContext);
  if (status === "idle") {
    return (
      <UL>
        <LI>
          <NavigationLink exact to="/">
            <HoverDiv>
              <StyledLogo />
            </HoverDiv>
          </NavigationLink>
        </LI>
        <LI>
          <NavigationLink exact to="/">
            <HoverDiv>
              <LinkLogo>
                <FiHome />
              </LinkLogo>
              Home
            </HoverDiv>
          </NavigationLink>
        </LI>
        <LI>
          <NavigationLink exact to={`/${currentUser.profile.handle}`}>
            <HoverDiv>
              <LinkLogo>
                <FiUser />
              </LinkLogo>
              Profile
            </HoverDiv>
          </NavigationLink>
        </LI>
        <LI>
          <NavigationLink exact to="/notifications">
            <HoverDiv>
              <LinkLogo>
                <FiBell />
              </LinkLogo>
              Notifications
            </HoverDiv>
          </NavigationLink>
        </LI>
        <LI>
          <NavigationLink exact to="/bookmarks">
            <HoverDiv>
              <LinkLogo>
                <FiBookmark />
              </LinkLogo>
              Bookmarks
            </HoverDiv>
          </NavigationLink>
        </LI>
      </UL>
    );
  } else {
    return (
      <UL>
        <LI>
          <NavigationLink exact to="/">
            <HoverDiv>
              <StyledLogo />
            </HoverDiv>
          </NavigationLink>
        </LI>
        <LI>
          <NavigationLink exact to="/">
            <HoverDiv>
              <LinkLogo>
                <FiHome />
              </LinkLogo>
              Home
            </HoverDiv>
          </NavigationLink>
        </LI>
        <LI>
          <span>
            {/* ASK SCOTT !!! */}
            <HoverDiv>
              <LinkLogo>
                <FiUser />
              </LinkLogo>
              Profile
            </HoverDiv>
          </span>
        </LI>
        <LI>
          <NavigationLink exact to="/notifications">
            <HoverDiv>
              <LinkLogo>
                <FiBell />
              </LinkLogo>
              Notifications
            </HoverDiv>
          </NavigationLink>
        </LI>
        <LI>
          <NavigationLink exact to="/bookmarks">
            <HoverDiv>
              <LinkLogo>
                <FiBookmark />
              </LinkLogo>
              Bookmarks
            </HoverDiv>
          </NavigationLink>
        </LI>
      </UL>
    );
  }
};

const UL = styled.ul`
  margin: 30px;
`;
const LI = styled.li`
  font-size: 1.2em;
  font-weight: 700;
`;

const NavigationLink = styled(NavLink)`
  color: black;
  display: flex;
  &.active {
    color: ${COLORS.primary};
  }
`;

const HoverDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 50px;
  &:hover {
    color: ${COLORS.primary};
    background-color: ${COLORS.hover};
  }
`;

const StyledLogo = styled(Logo)`
  height: 45px;
  width: 45px;
  margin-left: -9px;
  align-self: center;
`;

const LinkLogo = styled.span`
  font-size: 1.4em;
  margin-right: 20px;
`;

export default Sidebar;
