import "../Home.css";

// mui library Component
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import Booking from "./Booking";
// mui library Component

import { Link as RouterLink } from "react-router-dom";

import Bar from "./Bar";
import Foot from "./Foot";
import StatisticsCard from "./StatisticsCard";
import ServiceCard from "./ServiceCard";
import NutritionMap from "./NutritionMap";

//imgs
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ScienceIcon from "@mui/icons-material/Science";
import HomeIcon from "@mui/icons-material/Home";
import FlatwareIcon from "@mui/icons-material/Flatware";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import clinic from "../imgs/clinic.jpg";
//imgs

export default function Home() {
  const loggedin = false;
  const Services = [
    {
      id: 1,
      icon: <FlatwareIcon />,
      title: "وصفات طعام صحية",
      discription: "لمساعدتك في تحقيق أهدافك الصحية من خلال وصفات لذيذة ومغذية",
    },
    {
      id: 2,
      icon: <HomeIcon />,
      title: "إستشارة أونلاين",
      discription: `إستشارة سريعة بدون إنتظار
تواصل مباشر مع الطبيب
متابعة حالتك من المنزل`,
    },
    {
      id: 3,
      icon: <MenuBookIcon />,
      title: "جداول غذائية مخصصة",
      discription:
        "لتحقيق أهدافك الصحية من خلال جداول غذائية مخصصة تناسب احتياجاتك وتفضيلاتك الشخصية",
    },
    {
      id: 4,
      icon: <ScienceIcon />,
      title: " قراءة تقرير مكونات الجسم",
      discription: "لفهم تركيب جسمك وتحقيق أهدافك بشكل مستنير",
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
      <Box
        className="page"
        sx={{
          color: "secondary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginBottom: "90px",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "70px", md: "90px" }, fontWeight: 500 }}
          >
            لنحيَا بعَافية و سَلام{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "35px", md: "40px" },
              fontWeight: 400,
              padding: "20px 0 30px",
            }}
          >
            عيادة عافية وسلام
          </Typography>
          <RouterLink to={loggedin ? '/booking' : '/login'}>
          <Button
            className="landing-button"
            sx={{
              backgroundColor: "secondary.main",
              color: "white",
              padding: "20px",
              borderRadius: "50px",
              "$:hover": { boxShadow: 16 },
              gap: "10px",
            }}
          >
            احجز موعدك الان
            <ArrowBackIcon />
            </Button>
            </RouterLink>
        </Box>
      </Box>

      {/* landing  */}

      {/* Services */}

      <Box sx={{ margin: "0 auto", color: "secondary.main" }}>
        <Typography variant="h4" gutterBottom sx={{ padding: "20px 0" }}>
          الخدمات
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {Services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              discription={service.discription}
            ></ServiceCard>
          ))}
        </Box>
      </Box>

      {/* Services */}

      {/* who are we  */}
      <Box
        sx={{
          marginTop: "140px",
          backgroundColor: "secondary.main",
          height: { xs: "fit-content", md: "700px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0 20px",
          fontSize: "20px !important",
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { xs: "100%", md: "50%" },
            padding: "0 20px",
            color: "text.lightwhite",
            textAlign: "right",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "text.lightwhite",
              padding: "40px 0",
              fontSize: { xs: "25px", md: "30px" },
            }}
          >
            من نحن؟
          </Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            عيادة عافية وسلام بإشراف اختصاصية التغذية سلام معطي
          </Typography>
          <Typography>
            - خبرة 8 سنوات بالتغذية العلاجية داخل وخارج سوريا
          </Typography>
          <Typography>- دبلوم علم نفس تغذوي</Typography>
          <Typography>- باحثة ماجستير بإدارة الرعاية الصحية</Typography>
          <Typography sx={{ marginBottom: "20px" }}>
            - أستاذة في كلية التغذية جامعة حمص
          </Typography>
          <hr width="70%" />
          <Typography sx={{ marginBottom: "20px" }}>
            نحن نؤمن بأن كل شخص يمكنه تحسين نمط حياته لذلك نقدم:
          </Typography>
          <Typography>
            - برامج غذائية لإدارة الوزن مع خطط غذائية لدعم اضطرابات الأكل وحميات
            علاجية
          </Typography>
          <Typography>
            - جلسات استشارية وتحليل مكونات الجسم باستخدام جهاز INBODY
          </Typography>
          <Typography>- اشتراكات جماعية ممتعة وبرامج توعية صحية</Typography>
          <Typography>
            - تقنيات التنحيف EMS، كرايو، كافيتيشن، RF، فاكيوم، ليزر بادز، أبر
            إذابة الدهون الموضعية وأبر المونجارو والأوزمبك
          </Typography>
          <Typography>- ستاند الصحة: سناكات صحية وأدوات عملية</Typography>
          <Typography
            sx={{
              color: "text.lightwhite",
              padding: "30px 0",
              textAlign: "left",
            }}
          >
            معكم نحو حياة صحية وسعيدة ..!
          </Typography>
        </Box>
        <Box
          sx={{
            width: { xs: "0%", md: "40%" },
            height: "100%",
          }}
        >
          <img
            src={clinic}
            alt="clinic"
            style={{
              width: "100%",
              height: "100%",
              position: "relative",
              bottom: "10%",
            }}
          />
        </Box>
      </Box>
      {/* who are we  */}

      {/* Statistics */}

      <Box
        sx={{
          height: "250px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <StatisticsCard num={5000} title="مشترك" />
        <StatisticsCard num={20} title="باقة" />
        <StatisticsCard num={10} title="ساعة عمل" />
        <StatisticsCard num={354} title="موعد" />
      </Box>

      {/* Statistics */}

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
          padding: { xs: "16px 20px", md: "16px 90px" },
          textAlign: "right",
          color: "secondary.main",
        }}
      >
        موقعنا الحالي
      </Typography>
      <NutritionMap />
      {/* location */}
      <Foot />
    </>
  );
}
