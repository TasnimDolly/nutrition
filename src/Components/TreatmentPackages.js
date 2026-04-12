import Bar from "./Bar";
import PackageCard from "./PackageCard";
import PackageCard2 from "./PackageCard2";
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

const IpackagesArray = [
  {
    id: 1,
    name: "كورس أبر ",
    num: " 1 شهر ",
    details: [
      " 4 أبر اسبوعية + خطة متكاملة تشمل التغذية + والسلوكيات الداعمة  + خطة المتابعة والتقييم + INBODY",
    ],
    steps:
      "يتم تثبيت الاشتراك بدفعة أولى على الأقل بـ100$ وتتمة المبلغ كاملاً قبل أخذ أول جرعة.",
    oldprice: "",
    newprice: "350$",
  },
  {
    id: 2,
    name: "كورس أبر ",
    num: " 3 أشهر",
    details: [
      " 12 أبرة + خطة متكاملة تشمل التغذية + والسلوكيات الداعمة  + خطة المتابعة والتقييم + INBODY",
    ],
    steps:
      "يتم تثبيت الاشتراك بدفعة أولى على الأقل بـ100$ ثم تتم الدفعات بالتقسيط على الشكل التالي:دفعة 2: 300$ قبل أول جرعةدفعة 3: 300$ مع بداية جرعة الشهر الثانيدفعة 4: 200$ مع بداية الشهر الثالث",
    oldprice: "",
    newprice: "900$",
  },
  {
    id: 3,
    name: "كورس أبر ",
    num: " 6 أشهر",
    details: [
      " 24 أبرة + خطة متكاملة تشمل التغذية + والسلوكيات الداعمة  + خطة المتابعة والتقييم + INBODY",
    ],
    steps:
      "يتم تثبيت الاشتراك بدفعة أولى: على الأقل بـ300$ ثم تتم الدفعات بالتقسيط على الشكل التالي:دفعة 2: 400$ مع بداية الشهر الثانيدفعة 3: 500$ مع بداية الشهر الثالثدفعة 4: 500$ مع بداية الشهر الرابع",
    oldprice: "1800$",
    newprice: "1700$",
  },
  {
    id: 4,
    name: "كورس أبر مع كورس أجهزة ",
    num: " 1 شهر ",
    details: [
      "أبر إذابة الدهون الموضعية10 مل + جلسة كافيتيشن +  جلسة تصريف لمفاوي + نصائح غذائية ",
    ],

    steps:
      "يتم تثبيت الاشتراك بدفعة أولى على الأقل 150$ - وتتمة المبلغ كاملاً قبل أخذ أول جرعة.",
    oldprice: "500$",
    newprice: "400$",
  },
  {
    id: 5,
    name: "كورس أبر مع كورس أجهزة ",
    num: " 3 أشهر",
    details: [
      "أبر إذابة الدهون الموضعية10 مل + جلسة كافيتيشن +  جلسة تصريف لمفاوي + نصائح غذائية ",
    ],
    steps: "يزيد 100$ على كل دفعة من الدفعات السابقة.",
    oldprice: "1500$",
    newprice: "1300$",
  },

  {
    id: 6,
    name: "كورس أبر مع أجهزة ",
    num: "  6 أشهر",
    details: [
      "أبر إذابة الدهون الموضعية10 مل + جلسة كافيتيشن +  جلسة تصريف لمفاوي + نصائح غذائية ",
    ],
    steps:
      "يتم تثبيت الاشتراك بدفعة أولى على الأقل بـ300$ ثم تتم الدفعات بالتقسيط على الشكل التالي:دفعة 2: 400$ قبل أول جرعةدفعة 3: 500$ مع بداية جرعة الشهر الثانيدفعة 4: 500$ مع بداية الشهر الثالث",
    oldprice: "2900$",
    newprice: "2300$",
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
  {
    id: 4,
    question: "  الحقن بتنحف لحالها؟",
    answer: "لحقن بتساعد بتخفيف الشهية، بس بدون تنظيم أكل النتيجة ما بتدوم.",
  },
  {
    id: 5,
    question: " آمنة؟",
    answer:
      " بتكون آمنة إذا استُخدمت تحت إشراف طبي وبعد تقييم الحالة، وهالشي متاح عنا.",
  },
  {
    id: 6,
    question: " إذا وقفتها؟",
    answer:
      "إذا ما تغيّر نمط الأكل، ممكن يرجع الوزن، لذلك المتابعة الغذائية وتعديل السلوكيات والعادات خلال الرحلة ضرورية.",
  },
];

const Dquestions = questionsArray.map((q) => (
  <FRQuestion key={q.id} question={q.question} answer={q.answer}></FRQuestion>
));
export default function DevicePackages() {
  return (
    <>
      <Bar />

      {/* // devicePackages */}
      <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
        <Typography
          variant="h4"
          sx={{ textAlign: "right", margin: "0 30px 30px" }}
        >
          تقنيات التنحيف وأجهزة تحسين القوام
        </Typography>
        <Grid container spacing={2}>
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
            <img src={photo} alt="clinic" style={{ width: "120%" }}></img>
          </Grid>
        </Grid>
        <Typography
          variant="h3"
          sx={{ color: "secondary.main", margin: "40px 0px 20px" }}
        >
          مع كل باقة من باقات الاجهزة يتم تقديم تحليل INBODY - خطة الجسات
          والنصائح التغذية والحركة المناسبة
        </Typography>
        {/* // devicePackages */}

        {/* // InjectionPackages */}
        <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "right", margin: "0 30px" }}
          >
            الحقونات
          </Typography>
          <Typography
            variant="body1"
            sx={{
              textAlign: "right",
              margin: "0 30px 30px",
              color: "text.secondary",
            }}
          >
            رحلة تنزيل الوزن مع أبر مونجارو - أوزمبك
          </Typography>
          <Container
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            {IpackagesArray.map((pkg) => (
              <PackageCard2
                key={pkg.id}
                num={pkg.num}
                name={pkg.name}
                details={pkg.details}
                steps={pkg.steps}
                oldprice={pkg.oldprice}
                newprice={pkg.newprice}
              />
            ))}
          </Container>
        </Box>
        {/* // InjectionPackages */}

        {/* //FrequentlyAskedQuestions */}
        <FrequentlyAskedQuestions
          questions={Dquestions}
        ></FrequentlyAskedQuestions>
        {/* //FrequentlyAskedQuestions */}
      </Box>
      <Foot />
    </>
  );
}
