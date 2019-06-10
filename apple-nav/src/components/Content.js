import React from "react";
import styled, { css } from "styled-components";

import "../fonts/fonts.css";

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20vh;

  h1 {
    font-family: "SFProTextMedium", "Roboto", sans-serif;
    font-size: 2rem;
  }

  img {
    height: 300px;
  }
`;

class Content extends React.Component {
  render() {
    const { header, icon } = this.props;
    return (
      <ContentContainer>
        <h1>{header}</h1>
        {icon && <img src={icon} alt={header} />}
      </ContentContainer>
    );
  }
}

export default Content;
