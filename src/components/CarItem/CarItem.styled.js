import { styled } from 'styled-components';
import { GlobalStyledImage } from 'styles/GlobalStyle';

export const StyledImage = styled(GlobalStyledImage)`
  height: 268px;

  @media screen and (min-width: 768px) {
    height: 200px;
  }

  @media screen and (min-width: 1440px) {
    height: 268px;
  }
`;

export const StyledListContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: 768px) {
    width: calc((100% - 58px) / 3);
  }

  @media screen and (min-width: 1440px) {
    width: calc((100% - 87px) / 4);
  }
`;

export const StyledH2Content = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.$accentColor};
`;

export const StyledItemContent = styled.li`
  display: flex;
  align-items: center;

  &:after {
    display: block;
    content: '';
    height: 1px;
    width: 13px;
    background-color: rgba(18, 20, 23, 0.1);
    transform: rotate(90deg);
  }
`;

export const NavLinkFavorite = styled.a`
  width: 18px;
  height: 18px;
  cursor: pointer;

  position: absolute;
  top: 14px;
  right: 14px;
`;

export const StyledFavorite = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.$accentColorActiv};
    opacity: 0.8;

    path {
      stroke: ${({ theme }) => theme.colors.$accentColorActiv};
      opacity: 1;
    }
  }
`;
