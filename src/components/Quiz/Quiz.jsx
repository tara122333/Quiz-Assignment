import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import QuizPoster from './QuizPoster'
import Navbar from '../Navbar/Navbar'
import { addQuizData } from '../Context/Contextprovider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Quiz = () => {
    const BASE_URL="https://quizbackend-faiu.onrender.com"

    const {quizadd , setQuizadd} = useContext(addQuizData);
    const [spiner, setSpiner] = useState(true);
    useEffect(()=>{
        const fun = async() =>{
            const response = await axios.get(`${BASE_URL}/all`);
            setQuizadd(response.data.quizData);
            setSpiner(false);
        };
        fun();
    });
    
  return (
    <>
        <div className="bg-red-500 ">
            <Navbar />
        </div>
        {
            quizadd? (
                <>
                    <div className='py-8 w-full'>
                        <div className='flex gap-6 flex-col flex-wrap justify-center lg:flex-row px-4 lg:px-24 '>
                            {quizadd && quizadd.map((item) => (
                                    <QuizPoster {...item}/>
                            ))}
                        </div>
                        
                    </div>
                </>
            ) : (
                <>
                    
                    {
                        spiner ? (<>
                            <div className='flex justify-center items-center h-screen'>
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                            </div>
                        </>) : (<>
                                <div>
                                    No Quiz.. Add Quiz
                                </div>
                            </>)
                    }
                </>
            )
        }
    </>
  )
}

export default Quiz;