import React from 'react';
import styled from 'styled-components';

export const FilterMessage = () => {
  return (
    <StyledMessage>
      Not found
      <br />
      <br />
    </StyledMessage>
  );
};

export const StyledMessage = styled.p`
  width: 100%;
  margin-top: 70px;
  text-align: center;
`;
