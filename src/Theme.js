import { createTheme } from '@mui/material/styles';

const black = '#000000';
const white = '#ffffff';
const spacer = 8;

const Theme = createTheme({
  color: {
    black: black,
    white: white,
  },
  spacer: spacer,
});

export default Theme;
