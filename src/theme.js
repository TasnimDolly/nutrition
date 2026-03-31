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
      color: "#06363D",
    },
    body1: {
      fontWeight: 400,
    },
    button: {
      fontWeight: 400,
      fontSize: 20,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#A0D7E2",
          "&:hover": { color: "#EF7261" },
          cursor: "pointer",
          fontFamily: "Almarai",
          fontWeight: 400,
          fontSize: 20,
          margin: "3px 0",
          textDecoration: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInput-input": {
            fontSize: "19px",
          },
          "&.Mui-checked": {
            color: "primary",
          },
          "& .MuiSvgIcon-root": {
            fontSize: 30,
            padding: 0,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "text.primary",
          },
          "& ": {
            marginTop: "41px",
          },
          htmlInput: {
            sx: {
              "&::placeholder": {
                fontSize: 10,
              },
            },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          "& .MuiFormControlLabel-label ": {
            fontSize: "16px",
            color: "#777777",
          },
          "& .MuiCheckbox-root": {
            padding: 0,
          },
          margin: "0",
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#0D6F73",
      bg: "#DCECF0",
    },
    secondary: {
      main: "#06363D",
      default: "#A0D7E2",
    },
    text: {
      primary: "#0D6F73",
      secondary: "#777777",
      dark: "#06363D",
      hover: "#EF7261",
      skyblue: "#289EA9",
      lightwhite: "#E0EDE9",
    },
  },
});
export default theme;
