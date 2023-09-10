import { styled } from 'styled-components';

export const StyledNavigation = styled.nav`
  margin-top: 15px;
  position: relative;

  &:after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 1px;
    margin-top: 15px;
    background-color: silver;
    transform: rotate(180deg);
  }
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: -3px;
  left: 25px;
`;

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;
