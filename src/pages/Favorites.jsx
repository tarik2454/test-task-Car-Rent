import { SideBar } from 'components/SideBar';
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFavoritesCar } from 'redux/Favorites/favoritesSlice';
import { selectFavoritesCars } from 'redux/Favorites/selectors';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledH1,
  GlobalStyledH2,
  GlobalStyledImage,
} from 'styles/GlobalStyle';

export const Favorites = () => {
  const favoritesCars = useSelector(selectFavoritesCars);
  const dispatch = useDispatch();
  console.log(favoritesCars);

  return (
    <div>
      <SideBar />
      <GlobalStyledH1>Favorites</GlobalStyledH1>
      <StyledList>
        {favoritesCars.map((car, index) => {
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

          const handleRemoveFavCar = () => {
            dispatch(removeFavoritesCar(id));
          };

          return (
            <>
              <StyledItem key={index} id={id}>
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
                <button onClick={handleRemoveFavCar}>
                  Remove from favourite
                </button>
                <GlobalStyledButton $width="100%">
                  Learn more
                </GlobalStyledButton>
              </StyledItem>
            </>
          );
        })}
      </StyledList>
    </div>
  );
};

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-bottom: 100px;
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
