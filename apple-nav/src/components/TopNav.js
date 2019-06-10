import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import "../fonts/fonts.css";

const NavContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  background-color: #323232;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1000px;
    height: 45px;

    a {
      color: white;
      font-family: "SFProTextLight", "Roboto", sans-serif;
      font-size: 0.85rem;
      text-decoration: none;
    }

    @media (max-width: 1000px) {
      justify-content: space-around;
    }
  }
`;

class TopNav extends React.Component {
  render() {
    return (
      <NavContainer>
        <nav>
          <NavLink exact to="/" activeStyle={{ color: "#9D9D9D" }}>
            <AppleSVG />
          </NavLink>
          <NavLink to="/mac" activeStyle={{ color: "#9D9D9D" }}>
            Mac
          </NavLink>
          <NavLink to="/ipad" activeStyle={{ color: "#9D9D9D" }}>
            iPad
          </NavLink>
          <NavLink to="/iphone" activeStyle={{ color: "#9D9D9D" }}>
            iPhone
          </NavLink>
          <NavLink to="/watch" activeStyle={{ color: "#9D9D9D" }}>
            Watch
          </NavLink>
          <NavLink to="/tv" activeStyle={{ color: "#9D9D9D" }}>
            TV
          </NavLink>
          <NavLink to="/music" activeStyle={{ color: "#9D9D9D" }}>
            Music
          </NavLink>
          <NavLink to="/support" activeStyle={{ color: "#9D9D9D" }}>
            Support
          </NavLink>
        </nav>
      </NavContainer>
    );
  }
}

const AppleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="20"
      height="20"
      viewBox="0 0 191 191"
      style={{ fill: "#000000" }}
    >
      <path d="M0,191.99219v-191.99219h191.99219v191.99219z" fill="none" />
      <g fill="#ffffff">
        <path d="M162.76383,62.29783c-0.7831,0.49023 -19.4247,10.83607 -19.4247,33.77517c0.8786,26.16063 23.52483,35.335 23.9132,35.335c-0.38837,0.49023 -3.4189,12.49777 -12.3959,25.08467c-7.1243,10.84243 -15.0317,21.774 -27.03923,21.774c-11.4218,0 -15.52193,-7.22617 -28.70093,-7.22617c-14.1531,0 -18.15773,7.22617 -28.9938,7.22617c-12.00753,0 -20.50067,-11.5173 -28.01333,-22.25787c-9.7601,-14.0576 -18.05587,-36.1181 -18.34873,-57.3c-0.19737,-11.22443 1.95457,-22.25787 7.41717,-31.6296c7.71003,-13.0835 21.47477,-21.965 36.50647,-22.25787c11.5173,-0.38837 21.76763,7.9074 28.79643,7.9074c6.73593,0 19.3292,-7.9074 33.5778,-7.9074c6.1502,0.00637 22.55073,1.85907 32.70557,17.4765zM95.50637,42.58027c-2.05007,-10.25033 3.6099,-20.50067 8.8815,-27.03923c6.73593,-7.9074 17.37463,-13.2745 26.549,-13.2745c0.58573,10.25033 -3.12603,20.3033 -9.7601,27.62497c-5.95283,7.9074 -16.20317,13.86023 -25.6704,12.68877z" />
      </g>
    </svg>
  );
};

export default TopNav;
