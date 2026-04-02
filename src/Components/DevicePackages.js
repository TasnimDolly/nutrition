import Bar from "./Bar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import FRQuestion from "./FRQuestion";
import Foot from "./Foot";

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
      <FrequentlyAskedQuestions
        questions={Dquestions}
      ></FrequentlyAskedQuestions>
      <Foot />
    </>
  );
}
