import { styled } from 'styled-components';
import { GlobalStyledButton, GlobalStyledImage } from 'styles/GlobalStyle';

export const StyledImage = styled(GlobalStyledImage)`
  max-width: 461px;
  max-height: 428px;
`;

export const StyledBackdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  background-color: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);

  position: fixed;
  top: 0;
  left: 0;
`;

export const StyledModalContent = styled.div`
  max-width: 541px;
  height: 100%;
  overflow: auto;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.$primiryBgColor};
  border-radius: ${({ theme }) => theme.$borderRadius};

  position: relative;
`;

export const StyledListContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 14px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
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

export const StyledH2Content = styled.span`
  display: flex;
  justify-content: space-between;
`;

export const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colors.$accentColor};
`;

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;

  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledItem = styled.li`
  padding: 7px 14px;
  color: ${({ theme }) => theme.colors.$primiryTextColor};
  background-color: #f9f9f9;
  border-radius: 35px;
  font-size: 12px;
  line-height: 1.5;
`;

export const StyledButton = styled(GlobalStyledButton)`
  display: flex;
  padding: 2px;
  background-color: transparent;

  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 2;

  &:hover {
    background-color: transparent;
  }
`;

export const StyledLink = styled.a`
  padding: 12px 50px;
  color: ${({ theme }) => theme.colors.$white};
  background-color: ${({ theme }) => theme.colors.$accentColor};
  border-radius: ${({ theme }) => theme.$borderRadius};
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`;
