import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  typography: {
    fontFamily: ["primaryfont"],
    fontSize: 18,
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
