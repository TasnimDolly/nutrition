import LoginLayout from "./LoginLayout";
import resetimg from "../imgs/resetpassword.png";

import LockIcon from "@mui/icons-material/Lock";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
export default function ResetPassword() {
  return (
    <>
      <LoginLayout img={resetimg} backTo={"/login"}>
        <Typography
          sx={{
            color: "text.primary",
            fontWeight: "bold",
          }}
        >
          انشاء كلمة مرور جديدة{" "}
        </Typography>
        <form>
          <TextField
            fullWidth
            className="textfield"
            placeholder="ادخل كلمة السر الجديدة "
            label="كلمة السر الجديدة"
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
                    <LockIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
            }}
            sx={{
              "& ": { marginTop: "41px" },
              "& .MuiInputLabel-root.Mui-focused": { color: "primary" },
              "& .MuiInput-input": { fontSize: "19px", width: 300 },
            }}
            variant="standard"
          />

          <TextField
            fullwidth
            className="textfield"
            placeholder="تاكيد كلمة السر الجديدة"
            label="تاكيد كلمة السر الجديدة "
            slotProps={{
              input: {
                endAdornment: ( 
                  <InputAdornment position="end">
                    {" "}
                    <VisibilityIcon sx={{ fontSize: 30 }} />
                  </InputAdornment>
                ),
              },
              htmlInput: {
                sx: {
                  "&::placeholder": { fontSize: 20 },
                },
              },
            }}
            sx={{
              "& .MuiInputLabel-root.Mui-focused": { color: "primary" },
              "& .MuiInput-input": { fontSize: "19px", width: 300 },
            }}
            variant="standard"
          />
          <Button
            sx={{
              width: "100%",
              margin: "35px 0px 22px",
            }}
            color={"primary"}
            variant="contained"
          >
            تاكيد
          </Button>
        </form>
      </LoginLayout>
    </>
  );
}
