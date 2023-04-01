import React from 'react'

import QuizPoster from './QuizPoster'
import Navbar from '../Navbar/Navbar'
const Quiz = () => {
    const storedFormData = JSON.parse(localStorage.getItem('quizData'));
    console.log(storedFormData);
  return (
    <>
        <div className="bg-red-500 ">
            <Navbar />
        </div>
        <div className='py-8 container mx-auto w-full'>
            <QuizPoster />
        </div>
    </>
  )
}

export default Quiz