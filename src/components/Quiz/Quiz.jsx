import React, { useEffect, useState } from 'react'
import axios from 'axios';

import QuizPoster from './QuizPoster'
import Navbar from '../Navbar/Navbar'
const Quiz = () => {
    const [formData, setFormData] = useState();
    // const [formData, setFormData] = useState(JSON.parse(localStorage.getItem('quizData')));
    useEffect(()=>{
        axios.get('http://localhost:4000/all').then((response)=>{
            setFormData(response.data.quizData);
        }).catch((exception)=>{
            console.log(exception);
        })
    },[]);

    console.log(formData);
    
  return (
    <>
        <div className="bg-red-500 ">
            <Navbar />
        </div>
        <div className='py-8 w-full'>
            <div className='flex gap-6 flex-col lg:flex-row container mx-auto px-4 lg:px-24 '>
                {formData && formData.map((item) => (
                        <QuizPoster {...item}/>
                ))}
            </div>
            
        </div>
    </>
  )
}

export default Quiz