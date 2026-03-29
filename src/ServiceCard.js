// mui library Component
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
          // alignItems:"center",
          justifyContent: "center",
          flexDirection: "column",
          height: "370px",
          backgroundColor: "secondary.default",
          color: "secondary.main",
        }}
      >
        <div size="large" color="inherit" sx={{ mr: 2 }}>
          <img
            src={icon}
            alt={title}
            style={{
              width: "150px",
              height: "200px",
            }}
          ></img>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2">
            {discription}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
