// import Libraries
import { Route,Routes } from "react-router-dom";

// import Components
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Quiz />} />
      <Route path="/quiz/:_id" element={<Quiz />} />
    </Routes>
  );
}

export default App;
