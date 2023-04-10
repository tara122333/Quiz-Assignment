// import nextConf from "../next.conf";
import { Route,Routes } from "react-router-dom";
// import Components
import Quiz from "./components/Quiz/Quiz";
import QuizEditing from "./components/QuizEditing/QuizEditing";
import Question from "./components/Question/Question";


function App() {
  return (
    <Routes>
      <Route path="/" exect element={<Quiz />} />
      <Route path="/quiz/:_id" exect element={<Question/>} />
      <Route path="/edit/quiz/:_id" exect element={<QuizEditing />} />
    </Routes> 
  );
}

export default App;
