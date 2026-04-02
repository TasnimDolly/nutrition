import Bar from "./Bar";
import FrequentlyAskedQuestions from "./FrequentlyAskedQuestions";
import FRQuestion from "./FRQuestion";
import Foot from "./Foot";

const questionsArray = [
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

const Iquestions = questionsArray.map((q) => (
  <FRQuestion key={q.id} question={q.question} answer={q.answer}></FRQuestion>
));

export default function InjectionPackages() {
  return (
    <>
      <Bar />
      <FrequentlyAskedQuestions
        questions={Iquestions}
      ></FrequentlyAskedQuestions>
      <Foot />
    </>
  );
}
