import Modal from 'components/Modal/Modal';
import { SpriteSVG } from 'images/SpriteSVG';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoritesCar } from 'redux/Favorites/favoritesSlice';
import { selectFavoritesCars } from 'redux/Favorites/selectors';
import {
  GlobalStyledButton,
  GlobalStyledH2,
  GlobalStyledImage,
} from 'styles/GlobalStyle';
import {
  NavLinkFavorite,
  StyledFavorite,
  StyledH2Content,
  StyledImage,
  StyledItem,
  StyledItemContent,
  StyledListContent,
  StyledSpan,
} from './FavoritesItem.styled';

export const FavoritesItem = ({ car, fill }) => {
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
  const favoritesCars = useSelector(selectFavoritesCars);

  const [isModalOpen, setModalOpen] = useState(false); // Состояние для открытия/закрытия модального окна
  const handleLearnMoreClick = () => {
    setModalOpen(true); // Открываем модальное окно при клике на "Learn more"
  };

  if (car.length === 0) {
    return null;
  }

  const handleToggleFavorites = car => {
    dispatch(toggleFavoritesCar(car));
  };

  return (
    <>
      <StyledItem id={id}>
        <div>
          <StyledImage $marginBottom="14px" src={img} alt={model} />

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
            <StyledItemContent>
              {accessories[Math.floor(Math.random() * 3)]}
            </StyledItemContent>
          </StyledListContent>
          <NavLinkFavorite onClick={() => handleToggleFavorites(car)}>
            {favoritesCars.some(item => car.id === item.id) ? (
              <StyledFavorite>
                <SpriteSVG name="heart" fill={fill} />
              </StyledFavorite>
            ) : (
              <SpriteSVG name="heart" fill={fill} />
            )}
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
