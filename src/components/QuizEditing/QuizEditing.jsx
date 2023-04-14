import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import QuestionNavbar from '../Navbar/QuestionNavbar'
import axios from 'axios';
import QuizQuestionPoster from './Question/QuizQuestionPoster';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from '@mui/material/CircularProgress';


const QuizEditing = () => {



    const { _id } = useParams();
    const BASE_URL='https://quizbackend-faiu.onrender.com';
    const [questionData, setQuestionData] = useState();

    const [quizData, setquizData] = useState();
    const [spiner, setSpiner] = useState(true);
    useEffect(()=>{
        const functi = async()=>{
          const response = await axios.get(`${BASE_URL}/quiz/${_id}`);
            setquizData(response.data.findQuiz);
            setSpiner(false);
        }
        functi();
    });

    

    useEffect(()=>{
      const fun = async()=>{
        const response = await axios.get(`${BASE_URL}/quiz/question/${_id}`);
        if(response.status === 200){
          setQuestionData(response.data.quizQuestionData.question);
        }
      }
      fun();
    });
  
  return (
    <>
        {
          quizData ? (
            <>
              <div>
                <QuestionNavbar {...quizData} />
              </div>
            </>
          ) : (
            <>
                  <div className='py-5'>
                    <Box sx={{ width: '100%' }}>
                      <LinearProgress />
                    </Box>
                  </div>
            </>
          )
        }
        <div className='flex gap-4 flex-col justify-center lg:flex-row lg:flex-wrap px-2 lg:px-6 py-4 lg:py-8'>
          {
            questionData ? (
            <>
              {
                questionData.map((data)=>(
                  <QuizQuestionPoster {...data} />
                ))
            }
            </>
            ) : (
              <>
                  
                  {
                spiner ? (
                  <div className='py-20 flex justify-center items-center w-full'>
                    <Box sx={{ display: 'flex' }}>
                              <CircularProgress />
                    </Box>
                  </div>
                ) :
                (
                  <>
                    <div>
                      No Question Here Add some Question
                    </div>
                  </>
                )
              }
              </>
              )
            
          }
        </div>
    </>
  )
}

export default QuizEditing