import Bar from "./Bar";
import PackageCard from "./PackageCard";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import FRQuestion from "./FRQuestion";
import Foot from "./Foot";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import photo from "../imgs/packagesbg.png";

const dpackagesArray = [
  {
    id: 1,
    num: "عدد الجلسات: 12",
    name: "باقة السعادة:",
    details: ["4 EMS", " تصريف لمفاوي", " 1 كرايو", " 4 كافيتيشن + RF"],
    price: "200$",
  },
  {
    id: 2,
    num: "عدد الجلسات: 8",
    name: "باقة القوة و الشباب:",
    details: [
      "8 جلسات EMS",
      "2 جلسة تصريف لمفاوي",
      "تحفيز العضلات ورفع معدل الاستقلاب",
    ],
    price: "150$",
  },
  {
    id: 3,
    num: "عدد الجلسات: 10",
    name: "باقة REFRESH",
    details: [
      "بعد رحلة الحمل والولادة وعمليات القيصرية ",
      " 6 جلسات EMS",
      "3 جلسات RF\كافيتيشن",
      "1 جلسة تصريف لمفاوي",
    ],
    price: "170$",
  },
  {
    id: 4,
    num: "عدد الجلسات: 12",
    name: "باقة الجمال والدلال:",
    details: [
      "6 جلسات كافيتيشن\RF",
      "2 جلسة تصريف لمفاوي",
      "2 جلسة EMS\ليزر بادز",
    ],
    price: "150$",
  },
];

const questionsArray = [
  {
    id: 1,
    question: "  الأجهزة بتنحف ؟",
    answer:
      "الأجهزة بتقلل مقاسات ودهون موضعية وبتحسن قوام، بس ما بتغني عن النظام الغذائي",
  },
  {
    id: 2,
    question: "النتيجة فورية ؟",
    answer: "في تحسّن من أول جلسة، بس النتيجة الحقيقية بتكون تراكمية.",
  },
  {
    id: 3,
    question: "الدهون بترجع ؟",
    answer:
      "إذا ما في نمط غذائي صحي، ممكن ترجع، لذلك بننصح دايمًا بخطة مرافقة.",
  },
];

const Dquestions = questionsArray.map((q) => (
  <FRQuestion key={q.id} question={q.question} answer={q.answer}></FRQuestion>
));
export default function DevicePackages() {
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
        <Typography
          variant="h3"
          sx={{ color: "secondary.main", margin: "40px 0px 20px" }}
        >
          مع كل باقة من باقات الاجهزة يتم تقديم تحليل INBODY - خطة الجسات
          والنصائح التغذية والحركة المناسبة
        </Typography>
        <FrequentlyAskedQuestions
          questions={Dquestions}
        ></FrequentlyAskedQuestions>
      </Box>

      <Foot />
    </>
  );
}
