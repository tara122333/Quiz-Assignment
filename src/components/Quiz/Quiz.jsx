import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import QuizPoster from './QuizPoster'
import Navbar from '../Navbar/Navbar'
import { addQuizData } from '../Context/Contextprovider';


const Quiz = () => {
    const BASE_URL="https://quizbackend-faiu.onrender.com"

    const {quizadd , setQuizadd} = useContext(addQuizData);

    useEffect(()=>{
        const fun = async() =>{
            const response = await axios.get(`${BASE_URL}/all`);
            setQuizadd(response.data.quizData);
        };
        fun();
    });
    
  return (
    <>
        <div className="bg-red-500 ">
            <Navbar />
        </div>
        <div className='py-8 w-full'>
            <div className='flex gap-6 flex-col flex-wrap justify-center lg:flex-row px-4 lg:px-24 '>
                {quizadd && quizadd.map((item) => (
                        <QuizPoster {...item}/>
                ))}
            </div>
            
        </div>
    </>
  )
}

export default Quiz;