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

export default function CreateAccount() {
  return (
    <>
      <LoginLayout img={createaccountimg} backTo={"/"}>
        <Typography
          sx={{
            color: "text.skyblue",
            fontWeight: "bold",
          }}
        >
          أنشئ حسابك الآن وابدأ رحلتك الصحية معنا{" "}
        </Typography>
        <form>
          <TextField
            fullWidth
            className="textfield"
            placeholder="ادخل اسمك"
            label="الاسم"
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
