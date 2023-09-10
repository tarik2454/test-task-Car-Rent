import { createGlobalStyle, styled } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import '@csstools/normalize.css';

export const GlobalStyle = createGlobalStyle`
  body {
  font-family: 'Manrope', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
  letter-spacing: 0.02em;
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  background-color: ${({ theme }) => theme.colors.$primiryBgColor};
  }
`;

export const GlobalStyledImage = styled.img`
  display: block;
  width: ${props => props.$width || '100%'};
  height: ${props => props.$height || 'auto'};
  margin-bottom: ${props => props.$marginBottom || '0'};
  border-radius: ${({ theme }) => theme.$borderRadius};
  object-fit: cover;
`;

export const GlobalStyledH1 = styled.h1`
  margin-bottom: ${props => props.$marginBottom || '20px'};
  font-size: ${props => props.$fontSize || '22px'};
  font-weight: 600;
  text-align: ${props => props.$textAling || 'center'};
  color: ${({ theme }) => theme.colors.$secondaryTextColor};

  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const GlobalStyledH2 = styled.h2`
  margin-bottom: ${props => props.$marginBottom || '8px'};
  font-size: ${props => props.$fontSize || '16px'};
  font-weight: 500;
  text-align: ${props => props.$textAlign || 'center'};
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  line-height: 1.5;
`;

export const GlobalStyledButton = styled.button`
  display: block;
  width: ${props => props.$width || 'fit-content'};
  margin-bottom: ${props => props.$marginBottom || '0'};
  padding: ${props => props.$padding || '8px 24px'};
  font-size: ${props => props.$fontSize || '14px'};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$accentColor};
  border: none;
  border-radius: ${({ theme }) => theme.$borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.$transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.$accentColorActiv};
  }
`;

export const GlobalStyledInput = styled.input`
  width: 100%;
  max-width: 400px;
  height: 35px;
  margin-bottom: 20px;
  padding: 5px 12px;
  color: inherit;
  border: 1px solid gray;
  border-radius: ${({ theme }) => theme.input.$borderRadius};

  &:focus {
    outline: transparent;
    border: 1px solid teal;
  }
`;

export const GlobalStyledLink = styled(Link)`
  display: block;
  margin-bottom: ${props => props.$marginBottom || '0'};
  padding: ${props => props.$padding || '0 0'};
  font-size: ${props => props.$fontSize || '15px'};
  color: ${({ theme }) => theme.colors.$accentColor};
  text-align: ${props => props.$textAlign || ''};
  text-decoration: none;
  transition: ${({ theme }) => theme.$transition};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.$accentColorActiv};
  }
`;

export const GlobalStyledNavLink = styled(NavLink)`
  display: block;
  margin-bottom: ${props => props.$marginBottom || '0'};
  padding: ${props => props.$padding || '0 0'};
  font-size: ${props => props.$fontSize || '15px'};
  color: ${({ theme }) => theme.colors.$accentColor};
  text-align: ${props => props.$textAlign || ''};
  text-decoration: none;
  transition: ${({ theme }) => theme.$transition};

  &:after {
    display: block;
    content: '';
    width: 0%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.$accentColorActiv};
    transform-origin: left;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.active {
    &:after {
      width: 100%;
    }
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.$accentColorActiv};
  }

  &:hover:not(.active) {
  }
`;

export const GlobalStyledMain = styled.main`
  min-height: calc(100vh - 50px);
  padding: 45px 0;

  @media screen and (min-width: 768px) {
    padding: 60px 0;
  }

  @media screen and (min-width: 1440px) {
    padding: 135px 0;
  }
`;

export const GlobalStyledSection = styled.section`
  padding: 15px 20px;
  background-color: ${({ theme }) => theme.colors.$secondaryBgColor};
`;

export const GlobalStyledContainer = styled.div`
  margin: 0 auto;
  padding: 0 20px;

  @media screen and (min-width: 480px) {
    max-width: 480px;
  }

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0 30px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    padding: 0 128px;
  }
`;
