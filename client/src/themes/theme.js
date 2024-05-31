import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Karantina',
    ]
  },

  palette: {
      primary: {
        main: '#CAD2C5',
        light: '#F9EBEA',
        dark: '#CAD2C5'
      },
      secondary: {
        main: '#84A98C',
        light: '#D5DBDB',
        dark: '#84A98C'
      },
      background: {
        default: {
            dark: '#2F3E46',
            light: '#5D6D7E'
        },
        paper: {
            dark: '#354F52',
            light: '#85929E'
        }
      },
      text: {
        primary: {
            dark: '#2F3E46',
            light: '#5D6D7E'
        },
        secondary: {
            dark: '#52796F',
            light: '#ABB7B7'
        }    
      }  
  }      
});

