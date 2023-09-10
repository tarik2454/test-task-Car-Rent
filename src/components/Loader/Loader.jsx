import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import styled from 'styled-components';

export const Loader = () => {
  return (
    <StyledWrapper>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </StyledWrapper>
  );
};

export const StyledWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
