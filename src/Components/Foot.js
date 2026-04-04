import FootCard from "./Footcard";
// mui library Component
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// mui library Component

//icons
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Container from "@mui/material/Container";

export default function Foot() {
  return (
    <Container
      maxWidth="100%"
      sx={{
        color: "secondary.default",
        backgroundColor: "secondary.main",
        padding: "15px 0  ",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: { md: "center", lg: "space-evenly" },
          gap: { md: "5%", lg: "2%" },
          flexWrap: "wrap",
        }}
      >
        <FootCard
          icon={<LocationOnIcon className="staticon"></LocationOnIcon>}
          title="العنوان"
          line1="  سوريا - حماة"
          line2="الشريعة - دوار البغدادي"
        ></FootCard>
        <FootCard
          icon={<LocalPhoneIcon className="staticon"></LocalPhoneIcon>}
          title="التواصل"
          line1="الهاتف : 0960093305"
          line2="البريد الإلكتروني: Salammuty@gmail.com"
        ></FootCard>
        <FootCard
          icon={<WatchLaterIcon className="staticon"></WatchLaterIcon>}
          title="ساعات الافتتاح"
          line1="السبت -الخميس : 8 ص - 5 م"
          line2="الجمعة : مغلق"
        ></FootCard>
        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              marginBottom: "15px",
              padding: { xs: "11px", md: "30px" },
              textAlign: "right",
              width: { xs: "300px", md: "300px", lg: "205px" },
            }}
          >
            تابعنا
          </Typography>
          <IconButton className="foot-icons">
            <LinkedInIcon />
          </IconButton>
          <IconButton className="foot-icons">
            <InstagramIcon />
          </IconButton>
          <IconButton className="foot-icons">
            <YouTubeIcon />
          </IconButton>
          <IconButton className="foot-icons">
            <FacebookIcon />
          </IconButton>
        </Box>
      </Box>
      <hr style={{ width: "70%" }}></hr>
      <Box sx={{ padding: "15px 0 0 " }}>
        <Typography variant="body2">
          @ جميع الحقوق محفوظة لدى{" "}
          <Typography component="span" sx={{ color: "text.hover" }}>
            عافية وسلام{" "}
          </Typography>
        </Typography>
        <Typography variant="body2">
          التصميم بواسطة :
          <Link href="hanadihasan661@gmail.com">HanadiHasan</Link>
        </Typography>
      </Box>
    </Container>
  );
}
//
