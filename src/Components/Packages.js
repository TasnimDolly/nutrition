// import DevicePackages from "./DevicePackages";
// import InjectionPackages from "./InjectionPackages";
// import NutritionalPackages from "./NutritionalPackages";
// import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";

import Bar from "./Bar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import FRQuestion from "./FRQuestion";
import Foot from "./Foot";

const questionsArray = [
  {
    id: 1,
    question: "  بدي أنحف بسرعة؟",
    answer: " منفهم رغبتك بس النزول الصحي هو اللي بيستمر وبيدعم عافية الجسم.",
  },
  {
    id: 2,
    question: " في شي مضمون 100% ؟",
    answer:
      "   ما في حل سحري بس في خطة صحيحة + التزام + فريق عم يشتغل بكل حب ومسؤولية = نتيجة مرضية بإذن الله.",
  },
  {
    id: 3,
    question: " ما بحب الخضار؟",
    answer:
      "منقدر نلاقي بدائل ونحضّرها بطريقة تناسبك، المهم نلاقي حل مناسب الك ولحالتك.",
  },
  {
    id: 4,
    question: "شو هي الأمراض اللي بتعملولها حميات؟",
    answer:
      "متوفر لدينا حميات علاجية لمشاكل الجهاز الهضمي والهرمونات والغدد والأمراض المزمنة وخطط المتابعة الغذائية مابعد عمليات البدانة بالإضافة إلى برامج علاج اضطرابات الطعام",
  },
];

const Pquestions = questionsArray.map((q) => (
  <FRQuestion key={q.id} question={q.question} answer={q.answer}></FRQuestion>
));

export default function Packages() {
  return (
    <>
      <Bar />
      <FrequentlyAskedQuestions
        questions={Pquestions}
      ></FrequentlyAskedQuestions>
      <Foot />
      {/* <DevicePackages/>
      <NutritionalPackages/>
      <InjectionPackages/> */}
    </>
  );
}
