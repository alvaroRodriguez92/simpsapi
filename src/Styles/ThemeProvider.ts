import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#ffd90f'
      },
      secondary:{
        main:'#fe0f35'
      }
    },
    typography:{
      fontFamily:[
        '"Homer Simpson Revised"'
      ].join(",")
    }
  });