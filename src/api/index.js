import axios from 'axios';

const COVID_URL = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
  let queryUrl = COVID_URL;
  if (country) {
    queryUrl = `${COVID_URL}/countries/${country}`;
  }
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(queryUrl);
    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${COVID_URL}/daily`);
    const dataNeeded = data.map(({ confirmed, deaths, reportDate }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date: reportDate,
    }));
    return dataNeeded;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${COVID_URL}/countries`);
    // const dataNeeded = data.map(({ confirmed, deaths, reportDate }) => ({
    //   confirmed: confirmed.total,
    //   deaths: deaths.total,
    //   date: reportDate,
    // }));
    return countries.map((country) => country.name); //dataNeeded;
  } catch (error) {
    console.log('ERROR', error);
  }
};

export const fetchDetailDataCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${COVID_URL}/countries`);
    // const dataNeeded = data.map(({ confirmed, deaths, reportDate }) => ({
    //   confirmed: confirmed.total,
    //   deaths: deaths.total,
    //   date: reportDate,
    // }));
    return countries.map((country) => country.name); //dataNeeded;
  } catch (error) {
    console.log('ERROR', error);
  }
};
