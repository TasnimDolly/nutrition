import LoginLayout from "./LoginLayout";
import createaccountimg from "../imgs/createaccount.png";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { useState } from "react";
import axios from "axios";

export default function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, seterror] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    seterror("");
    setSuccess("");
    try {
      if (!email || !password || !confirmPassword || !name) {
        seterror("جميع الحقول مطلوبة");
        return;
      }
      if (password !== confirmPassword) {
        seterror("كلمة السر غير متطابقة");
        return;
      }
      const response = await axios.post("       عطيني ال api حطه هون    ", {
        email,
        password,
        name,
      });
      console.log(response.data);
      setSuccess("تم إنشاء الحساب بنجاح");
    } catch (error) {
      console.error("Error creating account:", error);
      seterror("حدث خطأ أثناء إنشاء الحساب");
    }
  };
  console.log(error);
  console.log(success);

  return (
    <>
      <LoginLayout img={createaccountimg} backTo={"/login"}>
        <Typography
          sx={{
            color: "text.skyblue",
            fontWeight: "bold",
          }}
        >
          أنشئ حسابك الآن وابدأ رحلتك الصحية معنا{" "}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            className="textfield"
            placeholder=" ادخل اسمك الكامل "
            label="الاسم الكامل"
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <PermIdentityIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{}}
            variant="standard"
          />
          <TextField
            fullWidth
            className="textfield"
            placeholder="@mail.com"
            label="البريد الالكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <EmailIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <TextField
            fullWidth
            className="textfield"
            placeholder="ادخل كلمة السر"
            label="كلمة السر"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <LockIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
            }}
            variant="standard"
          />
          <TextField
            fullWidth
            className="textfield"
            placeholder="تاكيد كلمة السر"
            label="تاكيد كلمة السر"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            slotProps={{
              input: {
                endAdornment: (
                  <InputAdornment position="end">
                    {" "}
                    <VisibilityIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
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
                  }}
                />
              }
              label="أنت موافق على سياسة لخصوصية و شروط المستخدم"
            ></FormControlLabel>
          </Stack>
          <Button
            sx={{ display: "block", width: "100%", margin: "5px 0px 22px" }}
            color={"primary"}
            variant="contained"
          >
            انشاء حساب{" "}
          </Button>
        </form>
      </LoginLayout>
    </>
  );
}
