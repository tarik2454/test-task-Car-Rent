import { SpriteSVG } from 'images/SpriteSVG';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledH2,
  GlobalStyledImage,
} from 'styles/GlobalStyle';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ isOpen, onClose, car }) => {
  useEffect(() => {
    const handleEscape = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  if (!isOpen) {
    return null; // Если модальное окно закрыто, не отображаем ничего
  }

  return createPortal(
    <>
      <StyledBackdrop
        onClick={event => {
          if (event.target === event.currentTarget) {
            onClose();
          }
        }}
      >
        <StyledModalContent>
          <GlobalStyledImage
            $width="461px"
            $height="248px"
            $marginBottom="14px"
            src={car.img}
            alt={car.model}
          />

          <GlobalStyledH2 $textAlign="left" $marginBottom="8px">
            <StyledH2Content>
              <span>
                {`${car.make} `}
                <StyledSpan>{`${car.model}, `}</StyledSpan>
                {car.year}
              </span>
              {car.rentalPrice}
            </StyledH2Content>
          </GlobalStyledH2>

          <StyledListContent>
            <StyledItemContent>
              {car.address.split(',').slice(-2, -1).join('')}
            </StyledItemContent>
            <StyledItemContent>
              {car.address.split(',').slice(-1).join('')}
            </StyledItemContent>
            <StyledItemContent>id: {car.id}</StyledItemContent>
            <StyledItemContent>Year: {car.year}</StyledItemContent>
            <StyledItemContent>Type: {car.type}</StyledItemContent>
            <StyledItemContent>
              Fuel Consumption: {car.fuelConsumption}
            </StyledItemContent>
            <StyledItemContent>Engine Size: {car.engineSize}</StyledItemContent>
          </StyledListContent>

          <p style={{ marginBottom: '24px' }}>{car.description}</p>

          <p>Accessories and functionalities:</p>
          <StyledList>
            {car.accessories.map((item, index) => (
              <StyledItemContent key={index}>{item}</StyledItemContent>
            ))}
          </StyledList>

          <p>Rental Conditions:</p>
          <StyledList>
            {car.rentalConditions.split('\n').map((item, index) => (
              <StyledItem key={index}>{item}</StyledItem>
            ))}
            <StyledItem>Mileage: {car.mileage}</StyledItem>
            <StyledItem>Price: {car.rentalPrice}</StyledItem>
          </StyledList>

          <StyledLink href="tel:+380730000000">Rental car</StyledLink>

          <StyledButton onClick={onClose}>
            <SpriteSVG name="close" />
          </StyledButton>
        </StyledModalContent>
      </StyledBackdrop>
    </>,
    modalRoot
  );
};

export default Modal;

export const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
`;

export const StyledModalContent = styled.div`
  max-width: 541px;
  height: fit-content;
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
