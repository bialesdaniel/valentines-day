import { red, lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      main: red[600],
    },
    secondary: {
      main: lightBlue[200],
    }
  }
})