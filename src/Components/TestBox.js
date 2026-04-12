import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import { Link as RouterLink } from "react-router-dom";

import test from "../imgs/testsImg.png";

export default function TestBox({ name, goal ,testnum}) {
  return (
    <Box
      sx={{
        border: "25px solid #A0D7E2",
        borderRadius: "50px",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "80%",
        margin: "30px auto",
      }}
    >
      <Box
        sx={{
          width: "65%",
        }}
      >
        <Typography variant="h3" sx={{ color: "text.dark" }}>
          {name}
        </Typography>
        <Typography variant="h2" sx={{ color: "text.dark", padding: "30px 0" }}>
          {goal}
        </Typography>
        
          <RouterLink to={testnum} >
        <Button
          sx={{
            backgroundColor: "secondary.main",
            color: "white",
            padding: "10px 25px ",
            borderRadius: "5px",
          }}
          >
          الانتقال إلى الاختبار
        </Button>
          </RouterLink>
      </Box>
      <img
        src={test}
        alt="test"
        style={{
          width: "35%",
          height: "100%",
        }}
      />
    </Box>
  );
}
