import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Select from 'react-select';
import { selectCars } from 'redux/Cars/selectors';

import { CarsList } from './Cars/CarsList';

export const SideBar = () => {
  const cars = useSelector(selectCars);

  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [...new Set(cars.map(car => car.make))];

  const handleSelectChange = selectedOptions => {
    setSelectedOptions(selectedOptions.map(option => option.value));
  };

  const filteredCars = cars.filter(car => {
    if (selectedOptions.length === 0) {
      return true;
    }
    return selectedOptions.includes(car.make);
  });

  return (
    <div>
      {/* <Select
        isMulti
        value={selectedOptions.map(option => ({
          value: option,
          label: option,
        }))}
        onChange={handleSelectChange}
        options={options.map(option => ({ value: option, label: option }))}
      />

      <CarsList filteredCars={filteredCars} /> */}
    </div>
  );
};
