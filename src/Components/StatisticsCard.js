// mui library Component
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
// mui library Component

export default function StatisticsCard({  num, title }) {
  return (
    <Box
      sx={{
        color: "secondary.main",
        width:{xs:"50%", md: "25%"},
      }}
      >
      <Typography sx={{fontSize: "3rem", fontWeight: "bold"}}>{num} +</Typography>
      <Typography>{title}</Typography>
    </Box>
  );
}
