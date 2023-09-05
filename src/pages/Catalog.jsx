import { SideBar } from 'components/SideBar';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/operation';
import { selectCars } from 'redux/selectors';
import { GlobalStyledImage } from 'styles/GlobalStyle';

export const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log(cars);

  return (
    <div>
      <SideBar />
      <h1>Catalog</h1>
      {/* Тут ви можете відобразити список автомобілів */}
      <ul>
        {cars.map((car, index) => (
          <li key={index + 1}>
            <a href="#">
              <GlobalStyledImage src={car.img} alt={car.model} />
            </a>
            <h2>
              {car.make}
              {car.model}
              {car.year}
              {car.rentalPrice}
              <br />

              {car.address.slice(0)}
              {car.rentalCompany}
              {car.type}
              {car.make}
              {car.id}
              {car.accessories[0]}
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
};
