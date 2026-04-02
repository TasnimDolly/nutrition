import logo from "../imgs/FootLogo.png";

import { Link as RouterLink } from "react-router-dom";

// mui library Component
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// mui library Component

//icons
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Container from "@mui/material/Container";

const pages = [
  { name: "الرئيسية", path: "/Home" },
  { name: "باقات الإشتراك", path: "/Packages" },
  { name: "الورشات", path: "/Workshops" },
  { name: "المنتجات", path: "/Products" },
  { name: "اتصل بنا", path: "/contact" },
];

export default function Foot() {
  return (
    <Container
      maxWidth="100%"
      sx={{
        color: "secondary.default",
        backgroundColor: "secondary.main",
        height: "400px",
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid size={3}>
            <img src={logo} style={{ paddingTop: "40px" }} alt="logo"></img>
          </Grid>
          <Grid size={5}>
            <Typography sx={{ textAlign: "right", padding: "40px 0 24px" }}>
              روابط سريعة
            </Typography>
            <Box
              sx={{
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {pages.map((page) => (
                <RouterLink
                  style={{ color: "#A0D7E2", textDecoration: "none" }}
                  to={page.path}
                >
                  <Link>{page.name}</Link>
                </RouterLink>
              ))}
            </Box>
          </Grid>
          <Grid size={4}>
            <Box>
              <Typography sx={{ textAlign: "right", padding: "40px 0 45px" }}>
                تواصل معنا
              </Typography>
              <Typography sx={{ textAlign: "right" }}>
                سوريا - حماة - الشريعة
              </Typography>
              <Typography sx={{ textAlign: "right" }}>
                البريد الإلكتروني: Salammuty@gmail.com
              </Typography>
              <Typography sx={{ textAlign: "right", paddingBottom: "30px" }}>
                الهاتف : 0960093305
              </Typography>
              <List
                sx={{
                  display: "flex",
                  alignContent: "center",
                }}
              >
                <IconButton
                  sx={{
                    color: "secondary.default",
                    "&:hover": { color: "text.hover" },
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "secondary.default",
                    "&:hover": { color: "text.hover" },
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "secondary.default",
                    "&:hover": { color: "text.hover" },
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
                <IconButton
                  sx={{
                    color: "secondary.default",
                    "&:hover": { color: "text.hover" },
                  }}
                >
                  <FacebookIcon />
                </IconButton>
              </List>
            </Box>
          </Grid>
        </Grid>

        <hr style={{ width: "70%" }}></hr>
        <Box sx={{ padding: "15px 0 0 " }}>
          <Typography>
            @ جميع الحقوق محفوظة لدى{" "}
            <Typography component="span" sx={{ color: "text.hover" }}>
              عافية وسلام{" "}
            </Typography>
          </Typography>
          <Typography>
            التصميم بواسطة :
            <Link href="hanadihasan661@gmail.com">HanadiHasan</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
//
