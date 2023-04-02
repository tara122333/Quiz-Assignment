import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import QuizQuestionPopUpModel from '../QuizEditing/QuizQuestionPopUp';
import axios from 'axios';

const QuestionNavbar = () => {
    const { _id } = useParams();
    const [questionData, setQuestionData] = useState() || [];
    const [quizData, setquizData] = useState({
            id : '',
            quizName : '',
            description : '',
            pointsGradingSystem : '',
            timeLimit : '',
    });

    useEffect(()=>{
        axios.get(`http://localhost:4000/quiz/question/${_id}`).then((response)=>{
            setQuestionData(response.data.quizQuestionData.question);
        }).catch((error)=>{
            console.log(error);
        })
        axios.get(`http://localhost:4000/quiz/${_id}`).then((response)=>{
            setquizData(response.data.findQuiz);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);

    const [quizQuestionOpen, setQuizQuestionOpen] = useState(false);
    const quizQuestionOpenModel = () => setQuizQuestionOpen(true);
  return (
    <>
        <QuizQuestionPopUpModel isOpen={quizQuestionOpen} setIsOpen={setQuizQuestionOpen} />
        <nav className='flex justify-evenly items-center py-1 bg-green-600'>
            <div className='h-12 flex justify-center items-center'>
                <span className='text-xl font-bold text-white'>
                    {
                        quizData.quizName
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
                                quizData.pointsGradingSystem
                            }
                        </span>
                    </div>
                    <div className='flex gap-2 text-lg'>
                        Total Time
                    <span className='text-center px-2 bg-black rounded-md text-lg'> 
                            {
                                quizData.timeLimit
                            } Minutes
                        </span>
                    </div>
            </div>
        </nav>
    </>
  )
}

export default QuestionNavbar;