import "../Home.css";

// mui library Component
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
// mui library Component

import { Link as RouterLink } from "react-router-dom";

import Bar from "./Bar";
import Foot from "./Foot";
import StatisticsCard from "./StatisticsCard";
import ServiceCard from "./ServiceCard";

//imgs
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ScienceIcon from "@mui/icons-material/Science";
import HomeIcon from "@mui/icons-material/Home";
import location from "../imgs/Location.jpg";
import clinic from "../imgs/clinic.jpg";
import { IconButton } from "@mui/material";
//imgs

export default function Home() {
  const Services = [
    {
      id: 1,
      icon: <CalendarMonthIcon />,
      title: "الحجز والمواعيد",
      discription: `حجز سريع وسهل
تذكير بالمواعيد
إمكانية الإلغاء أو التعديل أونلاين`,
    },
    {
      id: 2,
      icon: <ScienceIcon />,
      title: " جهاز INBODY ",
      discription: `لقياس مكونات الجسم
      دهون - عضلات - ماء - عظام- العمر البيولوجي - نسبة الإستقلاب - توزع الدهون و العضلات`,
    },
    {
      id: 3,
      icon: <HomeIcon />,
      title: "إستشارة أونلاين",
      discription: `إستشارة سريعة بدون إنتظار
تواصل مباشر مع الطبيب
متابعة حالتك من المنزل`,
    },
  ];

  const circl = {
    width: "18px",
    height: "18px",
    margin: "0 10px",
    backgroundColor: " #289EA9",
    borderRadius: "50%",
  };

  return (
    <>
      {/* landing  */}
      <Bar />
      <div className="page">
        <Container
          className="home-container"
          sx={{ color: "secondary.main", width: "400px", textAlign: "right" }}
        >
          <Typography variant="h4">لنحيَا بعَافية و سَلام ...</Typography>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ padding: "15px 0 ", textAlign: "left" }}
          >
            عيادة عافية وسلام
          </Typography>
          <Typography sx={{ padding: "0 0 30px", fontSize: "24px" }}>
            بإشراف اختصاصية التغذية سلام معطي خبرة 8 سنوات بالتغذية العلاجية
            داخل وخارج سوريا 5000+ مشترك باحثة ماجستير بإدارة الرعاية الصحية
            دبلوم علم نفس تغذوي أستاذة في كلية التغذية جامعة حمص
          </Typography>
          <Stack spacing={2} direction="row" gap="35px">
            <RouterLink
              to="/createaccount"
              style={{ color: "#A0D7E2", textDecoration: "none" }}
            >
              <Button variant="contained" className="button">
                إنشاء حساب
              </Button>
            </RouterLink>
            <RouterLink
              to="/login"
              style={{ color: "#A0D7E2", textDecoration: "none" }}
            >
              <Button variant="contained" className="button">
                تسجيل دخول
              </Button>
            </RouterLink>
          </Stack>
        </Container>
      </div>

      {/* landing  */}

      {/* Statistics */}

      <Grid container sx={{ padding: "40px 0" }} spacing={4}>
        <Grid size={{ xs: 3, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              // justifyContent:"center",
              gap: "100px",
              margin: "40px 50px 40px 0",
            }}
          >
            <StatisticsCard
              icon={<HomeIcon className="staticon"></HomeIcon>}
              num="15"
              title="helooo"
            ></StatisticsCard>
            <StatisticsCard
              icon={<HomeIcon></HomeIcon>}
              num="15"
              title="helooo"
            ></StatisticsCard>
          </Box>
        </Grid>
        <Grid size={{ xs: 3, md: 4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "100px",
              margin: "40px 0",
            }}
          >
            <StatisticsCard
              icon={<HomeIcon></HomeIcon>}
              num="15"
              title="helooo"
            ></StatisticsCard>
            <StatisticsCard
              icon={<HomeIcon></HomeIcon>}
              num="15"
              title="helooo"
            ></StatisticsCard>
          </Box>
        </Grid>
        <Grid size={{ xs: 6, md: 4 }}>
          <img
            src={clinic}
            alt="clinic"
            style={{
              width: "90%",
              height: "100%",
              border: "5px #06363D solid",
              margin: "0 0 0 50px",
            }}
          ></img>
        </Grid>
      </Grid>

      {/* Statistics */}

      {/* Services */}

      <Container sx={{ margin: "0 auto", color: "secondary.main" }}>
        <Typography variant="h4" gutterBottom sx={{ padding: "20px 0" }}>
          الخدمات
        </Typography>
        <Grid container spacing={8}>
          {Services.map((service) => (
            <Grid
              size={{ xs: "none", md: 4 }}
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                discription={service.discription}
              ></ServiceCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services */}

      {/* Reviews */}
      <Container sx={{ color: "secondary.main" }}>
        <Typography variant="h4" gutterBottom sx={{ padding: "20px 0" }}>
          آراء المرضى
        </Typography>
        <Container>
          <Avatar
            sx={{ margin: "5px auto", width: "100px", height: "100px" }}
            src="/broken-image.jpg"
          />
          <Typography variant="h5" gutterBottom sx={{ color: "text.hover" }}>
            محمود حسن
          </Typography>
          <Typography variant="h6" gutterBottom>
            27 سنة
          </Typography>
          <Rating name="read-only" value="5" readOnly />
          <Typography padding={5}>
            جودة نومي كتير أحسن والإمساك شبه اختفى وحاسة جسمي أخف بلشت بناطليني
            تعرض وبشرتي صايرة بتجنن ماعاد في حبوب الحمدلله
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={circl}></div>
            <div style={circl}></div>
            <div style={circl}></div>
          </div>
        </Container>
      </Container>

      {/* Reviews */}

      {/* location */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          padding: "16px 90px",
          textAlign: "right",
          color: "secondary.main",
        }}
      >
        موقعنا الحالي
      </Typography>

      <img
        src={location}
        alt="location"
        style={{ width: "100%", height: "100%" }}
      ></img>
      {/* location */}
      <Foot />
    </>
  );
}
