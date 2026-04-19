import LoginLayout from "./LoginLayout";
import { Link } from "react-router-dom";
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
import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    setSuccess("");

    try {
      if (!email || !password) {
        seterror("جميع الحقول مطلوبة");
        return;
      }
      const response = await axios.post("       عطيني ال api حطه هون    ", {
        email,
        password,
      });
      console.log(response.data);
      setSuccess("تم تسجيل الدخول بنجاح");
    } catch (error) {
      console.error("Error logging in:", error);
      seterror("حدث خطأ أثناء تسجيل الدخول");
    }
  };
  console.log(error);
  console.log(success);

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
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            className="textfield"
            placeholder="@mail.com"
            label="البريد الالكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
