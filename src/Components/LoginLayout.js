import "../login.css";
import { Link } from "react-router-dom";

// Mui components
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
// Mui components

export default function LoginLayout({ children, img, backTo }) {
  return (
    <div className="loginpage page">
      <Container maxWidth="lg" className="container" >
        <Card className="card">
          <CardContent>
            <Grid
              container
              spacing={20}
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <Grid item xs={6}>
                {children}
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: "left" }}>
                  <Link to={backTo}>
                    <IconButton>
                      <KeyboardReturnIcon sx={{ color: "primary.main" }} />
                    </IconButton>
                  </Link>
                </Box>
                <img src={img} alt="" />
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
