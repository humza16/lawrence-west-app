import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { appBlackcolor, appPrimaryColor, appSecondaryColor } from "./colors";
import { red } from "@mui/material/colors";
let theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    text: {
      primary: "#000",
    },
    primary: {
      main: appPrimaryColor,
    },
    secondary: {
      main: appSecondaryColor,
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),

    // fontSize: 14,
    // fontWeightBold: 600,
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px!important",
          fontSize: "1rem !important",
          textTransform: "none!important",
        },
      },
      variants: [
        {
          props: { color: "secondary" },
          style: {
            background: `${appSecondaryColor}!important`,
            color: `${appBlackcolor}!important`,
          },
        },
      ],
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "0px",
          color: `${appPrimaryColor}!important`,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem!important",
          borderRadius: "8px!important",
        },
      },
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
