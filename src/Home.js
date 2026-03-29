import "./Home.css";

// mui library Component
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ServiceCard from "./ServiceCard";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
// mui library Component

//imgs
import icon1 from "./imgs/icon1.png";
import icon2 from "./imgs/icon2.png";
import icon3 from "./imgs/icon3.png";
import location from "./imgs/Location.jpg";
//imgs

export default function Home() {
  const Services = [
    {
      id: 1,
      icon: icon1,
      title: "الحجز والمواعيد",
      discription: `حجز سريع وسهل
تذكير بالمواعيد
إمكانية الإلغاء أو التعديل أونلاين`,
    },
    {
      id: 2,
      icon: icon2,
      title: "إستشارة أونلاين",
      discription: `إستشارة سريعة بدون إنتظار
تواصل مباشر مع الطبيب
متابعة حالتك من المنزل`,
    },
    {
      id: 3,
      icon: icon3,
      title: "التحاليل الطبية",
      discription: `
إستلام النتائج إلكترونياً
سرية تامة للبيانات
عرض تاريخ التحاليل القديمة`,
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

      <div className="page">
        <Container
          className="container"
          sx={{ color: "secondary.main", width: "400px" }}
        >
          <Typography sx={{ textAlign: "right" }}>
            لنحيَا بعَافية و سَلام ...
          </Typography>
          <Typography variant="h4" gutterBottom>
            عيادة عافية وسلام
          </Typography>
          <Typography sx={{ padding: "10px 0 30px" }}>
            بإشراف اختصاصية التغذية سلام معطي خبرة 8 سنوات بالتغذية العلاجية
            داخل وخارج سوريا 5000+ مشترك باحثة ماجستير بإدارة الرعاية الصحية
            دبلوم علم نفس تغذوي أستاذة في كلية التغذية جامعة حمص
          </Typography>
          <Stack spacing={2} direction="row" gap="35px">
            <Button variant="contained" className="button">
              إنشاء حساب
            </Button>
            <Button variant="contained" className="button">
              تسجيل دخول
            </Button>
          </Stack>
        </Container>
      </div>

      {/* landing  */}

      {/* Services */}

      <div style={{ margin: "0 100px" }}>
        <Typography variant="h4" gutterBottom sx={{ padding: "16px 0" }}>
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
      </div>

      {/* Services */}

      {/* Reviews */}
      <Container sx={{ color: "secondary" }}>
        <Typography variant="h4" gutterBottom sx={{ padding: "20px 0" }}>
          آراء المرضى
        </Typography>

        <div>
          <Avatar
            sx={{ margin: "auto", width: "100px", height: "100px" }}
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
        </div>
      </Container>

      {/* Reviews */}

      {/* location */}
      <Typography
        variant="h5"
        gutterBottom
        sx={{ padding: "16px 90px", textAlign: "right" }}
      >
        موقعنا الحالي
      </Typography>

      <img
        src={location}
        alt="location"
        style={{ width: "100%", height: "100%" }}
      ></img>
      {/* location */}
    </>
  );
}
