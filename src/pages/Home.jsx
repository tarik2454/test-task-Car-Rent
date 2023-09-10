import React from 'react';
import { styled } from 'styled-components';
import homeBackgroundImage from '../images/home_background.jpg';
import { GlobalStyledLink } from 'styles/GlobalStyle';

export const Home = () => {
  return (
    <>
      <StyledHome>
        <StyledContent>
          Explore the beauty of Ukraine at your own pace with our rentals cars.
          From the Carpathians to Crimea, from Kyiv to Odessa - we will help you
          get where you want to go. Your adventure begins here!
        </StyledContent>
      </StyledHome>
      <GlobalStyledLink to="/catalog" $fontSize="17px" $textAlign="center">
        Go to our catalog{' '}
      </GlobalStyledLink>
    </>
  );
};

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1600px;
  min-height: 400px;
  margin-bottom: 20px;
  padding: 20px 30px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.7),
      rgba(47, 48, 58, 0.7)
    ),
    url(${homeBackgroundImage});
  background-color: #c4c4c4;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: ${({ theme }) => theme.$borderRadius};

  @media screen and (min-width: 768px) {
    padding: 20px 100px;
  }
`;

export const StyledContent = styled.div`
  font-size: 17px;
  text-align: center;
  color: #f5e7e7;
  letter-spacing: 0.1em;
`;
