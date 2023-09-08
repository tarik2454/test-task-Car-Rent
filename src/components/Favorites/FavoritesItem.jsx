import Modal from 'components/Modal/Modal';
import { SpriteSVG } from 'images/SpriteSVG';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFavoritesCar } from 'redux/Favorites/favoritesSlice';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledH2,
  GlobalStyledImage,
} from 'styles/GlobalStyle';

export const FavoritesItem = ({ car }) => {
  const {
    img,
    model,
    make,
    rentalPrice,
    year,
    address,
    rentalCompany,
    type,
    id,
    accessories,
  } = car;

  const dispatch = useDispatch();

  const [isModalOpen, setModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
  const handleLearnMoreClick = () => {
    setModalOpen(true); // Открываем модальное окно при клике на "Learn more"
  };

  if (car.length === 0) {
    return null; // Вернуть null, чтобы компонент не рендерился
  }

  return (
    <>
      <StyledItem id={id}>
        <div style={{ position: 'relative' }}>
          <GlobalStyledImage
            $height="200px"
            $marginBottom="14px"
            src={img}
            alt={model}
          />

          <GlobalStyledH2 $textAlign="left" $marginBottom="9px">
            <StyledH2Content>
              <span>
                {`${make} `}
                <StyledSpan>{`${model}, `}</StyledSpan>
                {year}
              </span>
              {rentalPrice}
            </StyledH2Content>
          </GlobalStyledH2>

          <StyledListContent>
            {/* <StyledItemContent>
              {address.split(',').slice(-1).join('')}
            </StyledItemContent>
            <StyledItemContent>
              {address.split(',').slice(-2, -1).join('')}
            </StyledItemContent> */}
            <StyledItemContent>{rentalCompany}</StyledItemContent>
            <StyledItemContent>{type}</StyledItemContent>
            <StyledItemContent>{make}</StyledItemContent>
            <StyledItemContent>{id}</StyledItemContent>
            <StyledItemContent>
              {' '}
              {/* {car.accessories[Math.floor(Math.random() * 3)]} */}
            </StyledItemContent>
          </StyledListContent>

          <NavLinkFavorite onClick={() => dispatch(removeFavoritesCar(id))}>
            <SpriteSVG name="heart" />
          </NavLinkFavorite>
        </div>

        <GlobalStyledButton onClick={handleLearnMoreClick} $width="100%">
          Learn more
        </GlobalStyledButton>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          car={car}
        />
      </StyledItem>
    </>
  );
};

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

export const Favorite = styled.div`
  svg {
    fill: ${({ theme }) => theme.colors.$accentColor};

    opacity: 0.8;
  }
  stroke: red;
`;

export const NotFavorite = styled.div`
  /* svg {
    stroke: #ffffffcc;
    fill: transparent;
  } */
`;
