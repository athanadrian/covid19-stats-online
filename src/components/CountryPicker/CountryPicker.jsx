import React, { useEffect, useState } from 'react';
import { FormControl, NativeSelect } from '@material-ui/core';
import { useCountryPickerStyles } from '../../styles';
import { fetchCountries } from '../../api';

const CountryPicker = ({ handleSelectCountry }) => {
  const classes = useCountryPickerStyles();
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetchCountries();
    setCountries(response);
  };

  useEffect(() => {
    getCountries();
  }, [setCountries]);

  return (
    <FormControl className={classes.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleSelectCountry(e.target.value)}>
        <option value="">Κόσμος</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
