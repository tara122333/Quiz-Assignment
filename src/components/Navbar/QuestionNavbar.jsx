import React, {  useState } from 'react';
import QuizQuestionPopUpModel from '../QuizEditing/QuizQuestionPopUp';
import { Link } from 'react-router-dom';

const QuestionNavbar = (props) => {
    const [quizQuestionOpen, setQuizQuestionOpen] = useState(false);
    const quizQuestionOpenModel = () => setQuizQuestionOpen(true);
  return (
    <>
        <QuizQuestionPopUpModel isOpen={quizQuestionOpen} setIsOpen={setQuizQuestionOpen} />
        <nav className='flex justify-evenly items-center py-1 bg-green-600'>
            <div className='h-12 flex justify-evenly items-center gap-1 '>
                <Link to={"/"}>
                    <h1 className='px-4 py-1 bg-blue-500 rounded-lg cursor-pointer text-white hover:bg-blue-700 '>
                        Home
                    </h1>
                </Link>
                
            </div>
            <div>
            <span className='text-xl font-bold text-white'>
                    {
                        props.quizName
                    }
                </span>
            </div>
            <div className='bg-blue-500 hover:bg-blue-700 px-4 text-white rounded-lg py-1 flex justify-center items-center md:px-6 lg:px-8 lg:cursor-pointer lg:rounded-sm' onClick={quizQuestionOpenModel}>
                <span className='font-semibold text-lg'>Add Question</span>
            </div>
            <div className='hidden lg:flex gap-4 text-white items-center'>
                    <div className='flex gap-2 text-lg'>
                        Points
                        <span className='text-center px-2 bg-black rounded-md'>
                            {
                                props.pointsGradingSystem
                            }
                        </span>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        Total Time
                    <span className='text-center px-2 bg-black rounded-md text-lg'> 
                            {
                                props.timeLimit
                            } Minutes
                        </span>
                    </div>
            </div>
        </nav>
    </>
  )
}

export default QuestionNavbar;