// mui library Component
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
// mui library Component

export default function StatisticsCard({ icon, title, line1, line2 }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "right",
        textAlign: "right",
        gap: "20px",
        padding: { xs: "10px", md: "30px" },
        width: { xs: "300px", md: "300px", lg: "205px" },
      }}
    >
      {icon}
      <Box>
        <Typography
          sx={{ fontSize: "16px", fontWeight: 700, marginBottom: "15px" }}
        >
          {title}
        </Typography>
        <Box>
          <Typography sx={{ fontSize: "14px" }}>{line1}</Typography>
          <Typography sx={{ fontSize: "14px" }}>{line2}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
