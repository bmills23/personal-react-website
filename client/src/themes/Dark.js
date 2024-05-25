import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

// Compare this snippet from client/src/themes/Light.js:
//
// export const theme = createTheme({
//     palette: {
//         primary: {
//         main: "#1976d2",
//         },
//         secondary: {
//         main: "#dc004e",
//         },
//     },
// });