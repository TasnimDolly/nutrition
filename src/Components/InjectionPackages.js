import Bar from "./Bar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import FRQuestion from "./FRQuestion";
import Foot from "./Foot";
import PackageCard2 from "./PackageCard2";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

const IquestionsArray = [
  {
    id: 1,
    question: "  الحقن بتنحف لحالها؟",
    answer: "لحقن بتساعد بتخفيف الشهية، بس بدون تنظيم أكل النتيجة ما بتدوم.",
  },
  {
    id: 2,
    question: " آمنة؟",
    answer:
      " بتكون آمنة إذا استُخدمت تحت إشراف طبي وبعد تقييم الحالة، وهالشي متاح عنا.",
  },
  {
    id: 3,
    question: " إذا وقفتها؟",
    answer:
      "إذا ما تغيّر نمط الأكل، ممكن يرجع الوزن، لذلك المتابعة الغذائية وتعديل السلوكيات والعادات خلال الرحلة ضرورية.",
  },
];
const IpackagesArray = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
];

const Iquestions = IquestionsArray.map((q) => (
  <FRQuestion key={q.id} question={q.question} answer={q.answer}></FRQuestion>
));

export default function InjectionPackages() {
  return (
    <>
      <Bar />

      <Box sx={{ flexGrow: 1, marginTop: "40px" }}>
        <Typography variant="h4" sx={{ textAlign: "right", margin: "0 30px" }}>
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
        <FrequentlyAskedQuestions
          questions={Iquestions}
        ></FrequentlyAskedQuestions>
      </Box>
      <Foot />
    </>
  );
}
