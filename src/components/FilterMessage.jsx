import React from 'react';
import styled from 'styled-components';
import { GlobalStyledLink } from 'styles/GlobalStyle';

export const FilterMessage = ({ handleResetFilter }) => {
  return (
    <StyledMessage>
      Not found
      <br />
      <br />
      <GlobalStyledLink $fontSize="17px" onClick={handleResetFilter}>
        Reset Filter
      </GlobalStyledLink>
    </StyledMessage>
  );
};

export const StyledMessage = styled.p`
  width: 100%;
  margin-top: 70px;
  text-align: center;
`;
