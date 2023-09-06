import { SideBar } from 'components/SideBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementPage } from 'redux/carsSlice';
import { fetchCars } from 'redux/operation';
import {
  selectCars,
  selectCurrentPage,
  selectItemsPerPage,
  selectPreviousItems,
} from 'redux/selectors';
import { styled } from 'styled-components';
import {
  GlobalStyledButton,
  GlobalStyledH1,
  GlobalStyledH2,
  GlobalStyledImage,
} from 'styles/GlobalStyle';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const currentPage = useSelector(selectCurrentPage);
  const itemsPerPage = useSelector(selectItemsPerPage);
  const previousItems = useSelector(selectPreviousItems);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
  };

  // Вычисление начального и конечного индексов для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  // Выбор подмассива для текущей страницы
  const currentItems = [...cars.slice(0, endIndex), ...previousItems];

  const totalPages = Math.ceil(cars.length / itemsPerPage);

  return (
    <div>
      <SideBar />
      <GlobalStyledH1>Catalog</GlobalStyledH1>
      <StyledList>
        {currentItems.map((car, index) => (
          <StyledItem key={index + 1}>
            <div>
              <GlobalStyledImage
                $height="200px"
                $marginBottom="14px"
                src={car.img}
                alt={car.model}
              />

              <GlobalStyledH2 $textAlign="left" $marginBottom="9px">
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
                  {car.address.split(',').slice(-1).join('')}
                </StyledItemContent>
                <StyledItemContent>
                  {car.address.split(',').slice(-2, -1).join('')}
                </StyledItemContent>
                <StyledItemContent>{car.rentalCompany}</StyledItemContent>
                <StyledItemContent>{car.type}</StyledItemContent>
                <StyledItemContent>{car.make}</StyledItemContent>
                <StyledItemContent>{car.id}</StyledItemContent>
                <StyledItemContent>{car.accessories[0]}</StyledItemContent>
              </StyledListContent>
            </div>
            <GlobalStyledButton $width="100%">Learn more</GlobalStyledButton>
          </StyledItem>
        ))}
      </StyledList>
      <button
        onClick={handleLoadMore}
        disabled={currentPage >= totalPages}
        style={{ marginBottom: '150px' }}
      >
        Load more
      </button>
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

export const StyledListContent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 28px;

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

// GlobalStyledLink

// const StyledLink = styled(GlobalStyledLink)`
//   justify-content: center;
//   font-weight: 500;
//   line-height: 1.5;
//   color: ${({ theme }) => theme.colors.$accentColor};
//   text-decoration: underline;
// `;
