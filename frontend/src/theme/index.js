import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { appBlackcolor, appGreyColor, appPrimaryColor, appSecondaryColor } from "./colors";
import { red } from "@mui/material/colors";
let theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    text: {
      primary: appBlackcolor,
    },
    primary: {
      main: appPrimaryColor,
    },
    info: {
      main: appPrimaryColor,
      light: appBlackcolor
    },
    secondary: {
      main: appSecondaryColor,
      light: appGreyColor
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px!important",
          fontSize: "1rem !important",
          textTransform: "none!important",
          height: "48px!important"
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
        {
          props: { variant: "noBackground" },
          style: {
            background: `inherit!important`,
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
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: appGreyColor,
          fontSize: '0.75rem',
          borderRadius: '27px'
        }
      }
    },
    MuiSvgIcon: {
      styleOverrides: {
        color: `${appBlackcolor}!imporant`
      }
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
