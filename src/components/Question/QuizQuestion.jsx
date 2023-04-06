import { useState } from 'react';

const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    choices: [
      { id: 1, text: 'Paris', isCorrect: true },
      { id: 2, text: 'Berlin', isCorrect: false },
      { id: 3, text: 'London', isCorrect: false },
      { id: 4, text: 'Madrid', isCorrect: false },
    ],
  },
  {
    id: 2,
    text: 'What is the tallest mammal?',
    choices: [
      { id: 1, text: 'Elephant', isCorrect: false },
      { id: 2, text: 'Giraffe', isCorrect: true },
      { id: 3, text: 'Horse', isCorrect: false },
      { id: 4, text: 'Rhino', isCorrect: false },
    ],
  },
  {
    id: 3,
    text: 'What is the tallest mammal?',
    choices: [
      { id: 1, text: 'Elephant', isCorrect: false },
      { id: 2, text: 'Giraffe', isCorrect: true },
      { id: 3, text: 'Horse', isCorrect: false },
      { id: 4, text: 'Rhino', isCorrect: false },
    ],
  },
  {
    id: 4,
    text: 'What is the tallest mammal?',
    choices: [
      { id: 1, text: 'Elephant', isCorrect: false },
      { id: 2, text: 'Giraffe', isCorrect: true },
      { id: 3, text: 'Horse', isCorrect: false },
      { id: 4, text: 'Rhino', isCorrect: false },
    ],
  },
  {
    id: 5,
    text: 'What is the tallest mammal?',
    choices: [
      { id: 1, text: 'Elephant', isCorrect: false },
      { id: 2, text: 'Giraffe', isCorrect: true },
      { id: 3, text: 'Horse', isCorrect: false },
      { id: 4, text: 'Rhino', isCorrect: false },
    ],
  },
  {
    id: 6,
    text: 'What is the tallest mammal?',
    choices: [
      { id: 1, text: 'Elephant', isCorrect: false },
      { id: 2, text: 'Giraffe', isCorrect: true },
      { id: 3, text: 'Horse', isCorrect: false },
      { id: 4, text: 'Rhino', isCorrect: false },
    ],
  },
];

function QuizQuestino() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (choiceId) => {
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = currentQuestion.choices.find((choice) => choice.id === choiceId).isCorrect;
    setUserAnswers([...userAnswers, { questionId: currentQuestion.id, choiceId, isCorrect }]);
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const renderQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];
    return (
      <div className='border-2 bg-red-100 px-5 py-10'>
        <h2 className="text-2xl font-bold">{currentQuestion.text}</h2>
        <div className="mt-4 space-y-4">
          {currentQuestion.choices.map((choice) => (
            <div key={choice.id}>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="answer"
                  value={choice.id}
                  onChange={() => handleAnswerSelect(choice.id)}
                />
                <span className="ml-2">{choice.text}</span>
              </label>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderResult = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold">Quiz Result</h2>
        <div className="mt-4">
          <p>Your score: {score} out of {questions.length}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {currentQuestionIndex < questions.length ? renderQuestion() : renderResult()}
    </div>
  );
}

export default QuizQuestino;
