import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: "Almarai",
    fontSize: 18,
    h3: {
      fontWeight: 700,
      fontSize: "28px",
    },
    h4: {
      fontWeight: 800,
      fontSize: "24px",
    },
    body1: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
      fontSize: 20,
    },
  },

  palette: {
    primary: {
      main: "#0D6F73",
    },
    secondary: {
      main: "#06363D",
      default: "#A0D7E2",
    },
    text: {
      primary: "#0D6F73",
      secondary: "#777777",
      hover: "#EF7261",
    },
  },
});
export default theme;
