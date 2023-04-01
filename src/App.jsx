// import Libraries
import { Route,Routes } from "react-router-dom";

// import Components
import Quiz from "./components/Quiz/Quiz";
import QuizEditing from "./components/QuizEditing/QuizEditing";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/quiz/:_id" element={<Quiz />} />
      <Route path="/edit/:_id" element={<QuizEditing />} />
    </Routes>
  );
}

export default App;
