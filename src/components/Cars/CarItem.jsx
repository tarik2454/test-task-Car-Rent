import Modal from 'components/Modal/Modal';
import { SpriteSVG } from 'images/SpriteSVG';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoritesCar } from 'redux/Favorites/favoritesSlice';
import { selectFavoritesCars } from 'redux/Favorites/selectors';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledH2,
  GlobalStyledImage,
} from 'styles/GlobalStyle';

export const CarItem = car => {
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
    fuelConsumption,
    engineSize,
    description,
    mileage,
    rentalConditions,
  } = car;

  const dispatch = useDispatch();
  const [isModalOpen, setModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
  const handleLearnMoreClick = () => {
    setModalOpen(true); // Открываем модальное окно при клике на "Learn more"
  };

  const favoritesCars = useSelector(selectFavoritesCars);

  const handleToggleFavorites = car => {
    dispatch(toggleFavoritesCar(car));
  };

  return (
    <>
      <StyledItem id={id}>
        <div>
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
            <StyledItemContent>
              {address.split(',').slice(-1).join('')}
            </StyledItemContent>
            <StyledItemContent>
              {address.split(',').slice(-2, -1).join('')}
            </StyledItemContent>
            <StyledItemContent>{rentalCompany}</StyledItemContent>
            <StyledItemContent>{type}</StyledItemContent>
            <StyledItemContent>{make}</StyledItemContent>
            <StyledItemContent>{id}</StyledItemContent>
            <StyledItemContent>{accessories[0]}</StyledItemContent>
          </StyledListContent>

          <NavLinkFavorite onClick={() => handleToggleFavorites(car)}>
            {favoritesCars.some(item => car.id === item.id) ? (
              <Favorite>
                <SpriteSVG name="heart" />
              </Favorite>
            ) : (
              <NotFavorite>
                <SpriteSVG name="heart" />
              </NotFavorite>
            )}
          </NavLinkFavorite>
        </div>

        <GlobalStyledButton onClick={handleLearnMoreClick} $width="100%">
          Learn more
        </GlobalStyledButton>
      </StyledItem>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        car={car}
      />
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
