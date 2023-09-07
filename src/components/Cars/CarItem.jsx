import React from 'react';
import { useDispatch } from 'react-redux';
import { addFavoritesCar } from 'redux/Favorites/favoritesSlice';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledH2,
  GlobalStyledImage,
} from 'styles/GlobalStyle';

export const CarItem = ({
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
}) => {
  const favouritsItem = {
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
  };

  const dispatch = useDispatch();

  const handleAddToFavorites = () => {
    dispatch(addFavoritesCar(favouritsItem));
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
        </div>
        <button onClick={handleAddToFavorites}>Add to favourite</button>
        <GlobalStyledButton $width="100%">Learn more</GlobalStyledButton>
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

// GlobalStyledLink

// const StyledLink = styled(GlobalStyledLink)`
//   justify-content: center;
//   font-weight: 500;
//   line-height: 1.5;
//   color: ${({ theme }) => theme.colors.$accentColor};
//   text-decoration: underline;
// `;
