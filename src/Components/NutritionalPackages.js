import Bar from "./Bar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import FRQuestion from "./FRQuestion";
import Foot from "./Foot";

const questionsArray = [
  {
    id: 1,
    question: " الاشتراك شهري ولا حسب الزيارات؟",
    answer:
      "الاشتراك عنا شهري، وبيشمل خطة غذائية + متابعة مستمرة وتعديلات حسب تقدمك 🌿",
  },
  {
    id: 2,
    question: "في متابعة بين الجلسات؟",
    answer: "أكيد، في متابعة واتساب للالتزام، الأسئلة، وتعديل الخطة إذا لزم 👍",
  },
  {
    id: 3,
    question: "إذا ما نزل وزني؟ ",
    answer:
      "أكيد بنراجع الخطة وبنعدّلها، النزول عملية تراكمية ومهم نكتشف الطريقة المناسبة الك بشكل خاص ونشتغل صح مو بسرعة.",
  },
  {
    id: 4,
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
    id: 6,
    question: "في تحليل مكونات الجسم ولا بس وزن؟",
    answer: "في قياس دهون، عضل، ماء بالجسم + تقييم غذائي كامل، مو بس وزن.",
  },
  {
    id: 7,
    question: " كل كم مراجعة؟",
    answer: "غالبًا كل 2–4 أسابيع حسب حالتك واستجابتك",
  },
];

const Nquestions = questionsArray.map((q) => (
  <FRQuestion key={q.id} question={q.question} answer={q.answer}></FRQuestion>
));

export default function NutritionalPackages() {
  return (
    <>
      <Bar />
      <FrequentlyAskedQuestions
        questions={Nquestions}
      ></FrequentlyAskedQuestions>
      <Foot />
    </>
  );
}
