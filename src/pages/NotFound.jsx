import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { GlobalStyledImage, GlobalStyledLink } from 'styles/GlobalStyle';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <StyledWrapper>
      <StyledImages
        src="https://www.digitalmesh.com/blog/wp-content/uploads/2020/05/404-error.jpg"
        alt="Not Found"
      />
      <GlobalStyledLink
        $textAlign="center"
        $fontSize="17px"
        onClick={event => {
          event.preventDefault();
          navigate('/', { replace: true });
        }}
      >
        You can go Home!!!
      </GlobalStyledLink>
    </StyledWrapper>
  );
};

export const StyledImages = styled(GlobalStyledImage)`
  width: 500px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
