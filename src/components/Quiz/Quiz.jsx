import React, { useEffect, useState } from 'react'
import axios from 'axios';
import QuizPoster from './QuizPoster'
import Navbar from '../Navbar/Navbar'

const Quiz = () => {
    const BASE_URL="https://quizbackend-faiu.onrender.com"
    const [formData, setFormData] = useState();
    useEffect(()=>{
        const fun = async() =>{
            const response = await axios.get(`${BASE_URL}/all`);
            setFormData(response.data.quizData);
        };
        fun();
    },[]);
    
  return (
    <>
        <div className="bg-red-500 ">
            <Navbar />
        </div>
        <div className='py-8 w-full'>
            <div className='flex gap-6 flex-col flex-wrap justify-center lg:flex-row px-4 lg:px-24 '>
                {formData && formData.map((item) => (
                        <QuizPoster {...item}/>
                ))}
            </div>
            
        </div>
    </>
  )
}

export default Quiz;