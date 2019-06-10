import React from "react";
import styled, { css } from "styled-components";

import { Route, Link } from "react-router-dom";
import Content from "./Content";

import "../fonts/fonts.css";

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;

  width: 100%;

  padding: 8px 0;

  background-color: #fafafa;

  overflow: auto;

  ${props =>
    props.bgBlack &&
    css`
      background-color: #141414;
    `}

  nav {
    display: flex;
    a {
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 10px 20px;

      white-space: nowrap;
      text-decoration: none;
    }
  }

  @media (max-width: 500px) {
    justify-content: flex-start;
  }
`;

const Span = styled.span`
  padding-top: 3px;

  font-family: "SFProTextLight", "Roboto", sans-serif;
  color: #111;
  font-size: 0.7rem;

  ${props =>
    props.newProduct &&
    css`
      color: #ef5602;
      font-size: 0.5rem;
    `}

  ${props =>
    props.bgBlack &&
    css`
      color: #ffffff;
    `}
`;

class SubNav extends React.Component {
  render() {
    const { navData, bgBlack } = this.props;
    const url = this.props.match.url;
    return (
      <NavContainer bgBlack={bgBlack}>
        <nav>
          {navData.map((linkData, i) => (
            <Link key={i} to={`${url}/${i}`}>
              <img
                key={i}
                src={linkData.icon}
                alt={linkData.name}
                style={{ height: "54px" }}
              />
              <Span bgBlack={bgBlack}>{linkData.name}</Span>
              {linkData.series && <Span>{linkData.series}</Span>}
              {linkData.new && <Span newProduct>New</Span>}
            </Link>
          ))}
        </nav>
      </NavContainer>
    );
  }
}

export default SubNav;

/*
	add ids to navData object;
*/
