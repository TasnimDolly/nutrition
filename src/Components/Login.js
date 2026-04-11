import LoginLayout from "./LoginLayout";
import {Link} from "react-router-dom";
import loginimg from "../imgs/login.png";
// Mui Components
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
// Mui Components
export default function Login() {
  return (
    <>
      <LoginLayout img={loginimg} backTo={"/"}>
        <Typography
          sx={{
            color: "text.skyblue",
            fontWeight: "bold",
          }}
        >
          مرحبا بعودتك سجل الدخول للمتابعة
        </Typography>
        <form>
          <TextField
            fullWidth
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
                    <EmailIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& ": { marginTop: "41px" },
              "& .MuiInputLabel-root.Mui-focused": { color: "text.primary" },
              "& .MuiInput-input": { fontSize: "19px" },
            }}
            variant="standard"
          />
          <TextField
            fullWidth
            className="textfield"
            placeholder="ادخل كلمة السر"
            label="كلمة السر"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <LockIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
              htmlInput: { sx: { "&::placeholder": { fontSize: 20 } } },
            }}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "text.primary" },
              "& .MuiInput-input": { fontSize: "19px" },
            }}
            variant="standard"
          />
          <Stack
            direction="row"
            marginTop="50px"
            justifyContent="space-between"
            alignItems="center"
          >
            <FormControlLabel
              control={
                <Checkbox
                  sx={{
                    fontSize: 10,
                    "& .MuiSvgIcon-root": { fontSize: 30, padding: 0 },
                    "&.Mui-checked": {
                      color: "primary",
                    },
                  }}
                />
              }
              label="حفظ كلمة السر"
              sx={{
                "& .MuiFormControlLabel-label ": {
                  fontSize: "16px",
                  color: "text.secondary",
                },
                margin: 0,
                "& .MuiCheckbox-root": { padding: 0 },
              }}
            ></FormControlLabel>

            <Typography sx={{ fontSize: "16px" }}>
              <Link to="/forgetPassword" className="link">
                هل نسيت كلمة السر ؟
              </Link>
            </Typography>
          </Stack>
          <Button
            sx={{ display: "block", width: "100%", margin: "5px 0px 22px" }}
            color={"primary"}
            variant="contained"
          >
            تسجيل الدخول{" "}
          </Button>
<Link
                        style={{ color: "#06363D", textDecoration: "none" }}
                        to="/createaccount"
                      >
          <Button
            sx={{
              width: "100%",
            }}
            color={"secondary"}
            variant="contained"
          >
            انشاء حساب{" "}
            </Button>
            </Link>
        </form>
      </LoginLayout>
    </>
  );
}
