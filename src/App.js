import React, { useEffect, useState } from 'react';

import { Cards, CountryPicker, Chart } from './components';
import { fetchData } from './api';
import image from './images/image_main_r.png';
import classes from './App.module.css';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState('');

  const getData = async () => {
    const response = await fetchData(selectedCountry);
    setData(response);
  };

  const handleSelectCountry = async (country) => {
    setSelectedCountry(country);
  };
  console.log('selectedCountry', selectedCountry);

  useEffect(() => {
    getData();
  }, [selectedCountry]);

  return (
    <div className={classes.container}>
      <img className={classes.image} src={image} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker handleSelectCountry={handleSelectCountry} />
      <Chart data={data} country={selectedCountry} />
      <Footer />
    </div>
  );
};

export default App;
