// mui library Component
import { SvgIcon } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
// mui library Component

export default function ServiceCard({ icon, title, discription }) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          justifyContent: "center",
          flexDirection: "column",
          height: "370px",
          width:"330px",
          backgroundColor: "secondary.default",
          color: "secondary.main",
          "&:hover": { border: "5px #06363D groove", transition: "0.3s" },
        }}
      >
        <SvgIcon color="inherit" sx={{ height: "170px", width: "220px" }}>
          {icon}
        </SvgIcon>
        <CardContent>
          <Typography variant="h4" gutterBottom component="div">
            {title}
          </Typography>
          <Typography variant="body2">{discription}</Typography>
        </CardContent>
      </Card>
    </>
  );
}
