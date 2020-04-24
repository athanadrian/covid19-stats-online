import { makeStyles } from '@material-ui/core';

/* Cards component: /component/Cards.jsx */
export const useCardsStyles = makeStyles((theme) => ({
  container: {
    margin: '50px 0',
  },
  card: {
    margin: '0 2% !important',
    [theme.breakpoints.down('sm')]: {
      margin: '2% 0 !important',
    },
  },
  confirmed: {
    borderBottom: '10px solid rgb(243, 156, 18)',
  },
  recovered: {
    borderBottom: '10px solid rgb(0, 115, 183)',
  },
  deaths: {
    borderBottom: '10px solid rgb(221, 70, 57)',
  },
}));
/* Chart component: /component/Chart.jsx */
export const useChartStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '85%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));
/* CountryPicker component: /component/CountryPicker.jsx */
export const useCountryPickerStyles = makeStyles((theme) => ({
  formControl: {
    width: '30%',
    margin: '0 0 30px 0 !important',
  },
}));
/* Footer component: /component/Footer.jsx */
export const useFooterStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    width: '85%',
    marginTop: 10,
  },
  link: {
    textDecoration: 'none',
    color: '#009688',
  },
}));
