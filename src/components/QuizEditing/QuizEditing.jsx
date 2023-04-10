import React, { useEffect, useState } from 'react'

import QuestionNavbar from '../Navbar/QuestionNavbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import QuizQuestionPoster from './Question/QuizQuestionPoster';

const QuizEditing = () => {
  const BASE_URL='https://quizbackend-faiu.onrender.com';
    const { _id } = useParams();
    const [questionData, setQuestionData] = useState([{
        questionName : '',
        option1 : '',
        option2 : '',
        option3 : '',
        option4 : '',
        isMultipleAnswer : false,
        answer : '',
        answer1 : '',
        answer2 : '',
        answer3 : '',
        answer4 : '',
        marks : '',
    }]) || [];
    const [quizData, setquizData] = useState({
            id : '',
            quizName : '',
            description : '',
            pointsGradingSystem : '',
            timeLimit : '',
    });

    useEffect(()=>{
        const fun = async()=>{
          const response = await axios.get(`${BASE_URL}/quiz/${_id}`);
            setquizData(response.data.findQuiz);
        }
        fun();
    },[]);

    useEffect(()=>{
      const fun = async()=>{
        const response = await axios.get(`${BASE_URL}/quiz/question/${_id}`);
          setQuestionData(response.data.quizQuestionData.question);
      }
      fun();
    },[]);
    
  return (
    <>
        <div>
            <QuestionNavbar {...quizData} />
        </div>
        <div className='flex gap-4 flex-col justify-center lg:flex-row lg:flex-wrap px-2 lg:px-6 py-4 lg:py-8'>
          {
            questionData.map((data)=>(
              <QuizQuestionPoster {...data} />
            ))
          }
        </div>
    </>
  )
}

export default QuizEditing