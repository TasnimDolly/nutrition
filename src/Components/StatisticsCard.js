// mui library Component
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
// mui library Component

export default function StatisticsCard({ icon, num, title }) {
  return (
    <Box
      sx={{
        color: "secondary.main",
        backgroundColor: "primary.bg",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
        padding: "30px",
        boxShadow: "0px 0 30px rgb(0 0 0 / 20%)",
        width:"300px"
      }}
    >
      <Box>
        <Typography>{num}</Typography>
        <Typography>happy client</Typography>
      </Box>
      {icon}
    </Box>
  );
}
