import { Card, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export default function DashStatisticsCard({
  icon,
  title,
  value,
  description,
  w,
  h,
  bg,
}) {
  return (
    <Card
      sx={{
        width: w || "330px",
        height: h || "110px",
        backgroundColor: bg || "white",
        borderRadius: "20px",
        padding: 2,
        textAlign: "start",
        boxShadow: "0px 3px 15px 0px #00000040",
      }}
    >
      <Typography
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: 1.3,
        }}
        variant="h5"
      >
        {title}
        {icon}
      </Typography>
      <Typography variant="h4" paddingBottom={0.7}>
        {value}
      </Typography>
      <Typography variant="h5">{description}</Typography>
    </Card>
  );
}
