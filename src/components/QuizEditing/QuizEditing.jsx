import React, { useEffect, useState } from 'react'

import QuestionNavbar from '../Navbar/QuestionNavbar'
import { useParams } from 'react-router-dom';
import axios from 'axios';

import QuizQuestionPoster from './Question/QuizQuestionPoster';

const QuizEditing = () => {
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

    console.log(questionData);

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