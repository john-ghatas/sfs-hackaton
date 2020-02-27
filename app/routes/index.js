import getQuestions from "./get_questions";
import getResult from "./get_result";
import postResult from "./post_result";

const routes = [
  ["/questions", getQuestions],
  ["/result", getResult],
  ["/result", postResult]
];

export default routes;
