import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizFormPopUp from '../Quiz/QuizFormPopUp';
import QuizQuestionPopUpModel from '../QuizEditing/QuizQuestionPopUp';

const QuestionNavbar = () => {
    const { _id } = useParams();
    const [quizQuestionOpen, setQuizQuestionOpen] = useState(false);
    const quizQuestionOpenModel = () => setQuizQuestionOpen(true);


    const [quizData, setquizData] = useState(JSON.parse(localStorage.getItem('quizData')));
    console.log(_id);
    // const updatedFormData = quizData.map((item) => {
    //     if (item.id === id) {
    //       return item;
    //     }
    //   });
    const item = quizData.find((item) => item.id === _id);
    console.log(item);
  return (
    <>
        <QuizQuestionPopUpModel isOpen={quizQuestionOpen} setIsOpen={setQuizQuestionOpen} />
        <nav className='flex justify-evenly items-center py-1 bg-green-600'>
            <div className='h-12 flex justify-center items-center'>
                {/* <img src="" alt=""  className='w-full h-full'/> */}
                <span className='text-xl font-bold text-white'>
                    {
                        item.quizName
                    }
                </span>
            </div>
            <div>
                <h1 className='font-bold text-lg text-white
                '>Tara's Quiz Application</h1>
            </div>
            <div className='bg-blue-500 hover:bg-blue-700 px-4 text-white rounded-lg py-1 flex justify-center items-center md:px-6 lg:px-8 lg:cursor-pointer lg:rounded-sm' onClick={quizQuestionOpenModel}>
                <span className='font-semibold text-lg'>Add Question</span>
            </div>
            <div className='hidden lg:flex gap-4 text-white items-center'>
                    <div className='flex gap-2 text-lg'>
                        Points
                        <span className='text-center px-2 bg-black rounded-md'>
                            {
                                item.pointsGradingSystem
                            }
                        </span>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        Total Time
                    <span className='text-center px-2 bg-black rounded-md text-lg'> 
                            {
                                item.timeLimit
                            } Minutes
                        </span>
                    </div>
            </div>
        </nav>
    </>
  )
}

export default QuestionNavbar;