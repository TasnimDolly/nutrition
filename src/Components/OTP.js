import { TextField, Box, Typography, Button } from "@mui/material";
import OtpInput from "react-otp-input";
import { useState } from "react";
import LoginLayout from "./LoginLayout";
import otpimg from "../imgs/otp.png";
import { Link } from "react-router-dom";
import ResetPassword from "./ResetPassword";

export default function OTP() {
  const [otp, setOtp] = useState("");
  return (
    <LoginLayout classname="otp" img={otpimg} backTo={"/forgetPassword"}>
      <Typography
        sx={{
          color: "text.skyblue",
          fontWeight: "bold",
          marginBottom: "50px",
        }}
      >
        ادخل الرمز الذي وصلك للتو!
      </Typography>
      <div>
        <form className="otpForm">
          <OtpInput

            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderInput={(p, i) => (
              <input
                {...p}
                style={{
                  margin: "0 8px",
                  textAlign: "center",
                  fontSize: 30,
                  padding: "8px",
                  border: "1px solid #0D6F73",
                  height: "30px",
                  width: "30px",
                  color: "#0D6F73",
                  fontWeight: "bold",
                  borderRadius: "4px",
                  backgroundColor: "#ffffff92",
                  border:'2px solid #777777'
                }}
              />
            )}
          />
          <Link to="/resetpassword" element={<ResetPassword />}>
            <Button
              sx={{ display: "block", width: "100%", margin: "5px 0px 22px" }}
              color={"primary"}
              variant="contained"
            >
              ارسال{" "}
            </Button>
          </Link>
        </form>
      </div>
    </LoginLayout>
  );
}
