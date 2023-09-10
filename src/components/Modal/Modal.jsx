import { SpriteSVG } from 'images/SpriteSVG';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { GlobalStyledH2 } from 'styles/GlobalStyle';
import {
  StyledBackdrop,
  StyledButton,
  StyledH2Content,
  StyledImage,
  StyledItem,
  StyledItemContent,
  StyledLink,
  StyledList,
  StyledListContent,
  StyledModalContent,
  StyledSpan,
} from './Modal.styled';

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
    return null;
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
          <StyledImage
            // $width="461px"
            // $height="248px"
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
