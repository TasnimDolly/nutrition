import Bar from "./Bar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import FRQuestion from "./FRQuestion";
import Foot from "./Foot";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import photo from "../imgs/packagesbg.png";
import PackageCard from "./PackageCard";

const questionsArray = [
    {
    id: 0,
    question: "  بدي أنحف بسرعة؟",
    answer: " منفهم رغبتك بس النزول الصحي هو اللي بيستمر وبيدعم عافية الجسم.",
  },
  {
    id: 1,
    question: " الاشتراك شهري ولا حسب الزيارات؟",
    answer:
      "الاشتراك عنا شهري، وبيشمل خطة غذائية + متابعة مستمرة وتعديلات حسب تقدمك 🌿",
  },
  {
    id: 2,
    question: "شو هي الأمراض اللي بتعملولها حميات؟",
    answer:
      "متوفر لدينا حميات علاجية لمشاكل الجهاز الهضمي والهرمونات والغدد والأمراض المزمنة وخطط المتابعة الغذائية مابعد عمليات البدانة بالإضافة إلى برامج علاج اضطرابات الطعام",
  },
  {
    id: 3,
    question: "في متابعة بين الجلسات؟",
    answer: "أكيد، في متابعة واتساب للالتزام، الأسئلة، وتعديل الخطة إذا لزم 👍",
  },
  {
    id: 4,
    question: "إذا ما نزل وزني؟ ",
    answer:
      "أكيد بنراجع الخطة وبنعدّلها، النزول عملية تراكمية ومهم نكتشف الطريقة المناسبة الك بشكل خاص ونشتغل صح مو بسرعة.",
  },
  {
    id: 5,
    question: " النظام بيكون قاسي؟",
    answer: "لا أبداً، أنظمتنا متوازنة وقابلة للتطبيق من أكل البيت بدون حرمان",
  },
  {
    id: 5,
    question: " أول زيارة قديش بتاخد؟",
    answer:
      "تقريبًا 45–60 دقيقة، مناخد قياسات، INBODY، تاريخ صحي، وبنعمل خطة مناسبة لأهدافك.",
  },
  {
    id: 7,
    question: "في تحليل مكونات الجسم ولا بس وزن؟",
    answer: "في قياس دهون، عضل، ماء بالجسم + تقييم غذائي كامل، مو بس وزن.",
  },
  {
    id: 8,
    question: " كل كم مراجعة؟",
    answer: "غالبًا كل 2–4 أسابيع حسب حالتك واستجابتك",
  },
    {
    id: 9,
    question: " ما بحب الخضار؟",
    answer:
      "منقدر نلاقي بدائل ونحضّرها بطريقة تناسبك، المهم نلاقي حل مناسب الك ولحالتك.",
  },
  
];

const Nquestions = questionsArray.map((q) => (
  <FRQuestion key={q.id} question={q.question} answer={q.answer}></FRQuestion>
));

const dpackagesArray = [
  {
    id: 1,
    num: "مدة الاشتراك: 1 شهر",
    name: "رحلة الميزان:",
    details: [
      "لتعديل وإدارة الوزن وموازنة كتلة الدهون والعضل ونسبة الماء بالجسم",
      "جلسة استشارة",
      "INBODY تحليل ",
      "1-2 برنامج غذائي",
      "جلسة متابعة",
      "متابعة واتساب أسبوعية",
    ],
    price: "25-30$",
  },
  {
    id: 2,
    num: "مدة الاشتراك: 1 شهر",
    name: "باقة العافية",
    details: [
      "لدعم عافية الجسد وعلاج المشاكل الصحية والأمراض",
      "جلسة استشارة",
      "دراسة حالة",
      "حمية علاجية",
      "جلسة متابعة وتقييم",
      "متابعة واتساب أسبوعية",
    ],
    price: "35$",
  },
  {
    id: 3,
    num: "مدة الاشتراك: 2 شهر",
    name: "اشتراك حياة جديدة:",
    details: [
      "لتعديل السلوكيات الغذائية وتبني نمط حياة صحي",
      "جلسة استشارة",
      "خريطة التغيير",
      "خطة غذائية",
      "وصفات صحية",
      "بنك الصحة",
      "جلسة تقييم",
    ],
    price: "50$",
  },
  {
    id: 4,
    num: "مدة الاشتراك: 3 شهر",
    name: "اشتراك 7 نجوم:",
    details: [
      "جلسة استشارة",
      "تحليل INBODY ودراسة حالة",
      "خطة غذائية",
      "تمارين رياضية",
      "جلسة متابعة وتقييم",
      "جلسة تثقيف ودعم سلوكي",
      "متابعة واتساب أسبوعية",
    ],
    price: "100-150$",
  },
];

export default function NutritionalPackages() {
  return (
    <>
      <Bar />
      <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "right", margin: "0 30px 30px" }}
        >
          تقنيات التنحيف وأجهزة تحسين القوام
        </Typography>

        <Grid container>
          <Grid size={{ xs: 12, lg: 8 }}>
            <Container
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "20px",
                justifyContent: "center",
              }}
            >
              {dpackagesArray.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  num={pkg.num}
                  name={pkg.name}
                  details={pkg.details}
                  price={pkg.price}
                />
              ))}
            </Container>
          </Grid>
          <Grid
            container
            size={{ xs: "0", lg: 3 }}
            display={{ xs: "none", lg: "flex" }}
            justifyContent="center"
            alignItems="center"
          >
            <img src={photo} alt="clinic"></img>
          </Grid>
        </Grid>
        <FrequentlyAskedQuestions
          questions={Nquestions}
        ></FrequentlyAskedQuestions>
      </Box>
      <Foot />
    </>
  );
}
