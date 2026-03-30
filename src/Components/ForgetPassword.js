// Mui Components
import LoginLayout from "./LoginLayout.js";
import forgetimg from "../imgs/forgetpassword1.png";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
// Mui Components

export default function ForgetPassword() {
  return (
    <>
      <LoginLayout img={forgetimg} backTo={"/login"}>
        <Typography
          sx={{
            color: "text.primary",
            fontWeight: "bold",
          }}
        >
          هل نسيت كلمة المرور
        </Typography>
        <form>
          <TextField
            className="textfield"
            placeholder="@mail.com"
            label="البريد الالكتروني"
            slotProps={{
              htmlInput: {
                sx: {
                  "&::placeholder": { fontSize: 20 },
                },
              },
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <EmailIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& ": { marginTop: "41px" },
              "& .MuiInputLabel-root.Mui-focused": { color: "text.primary" },
              "& .MuiInput-input": { fontSize: "19px", width: 300 },
            }}
            variant="standard"
          />

          <Button
            sx={{
              width: "100%",
              margin: "5px 0px 22px",
            }}
            color={"primary"}
            variant="contained"
          >
            ارسال{" "}
          </Button>
        </form>
      </LoginLayout>
    </>
  );
}
