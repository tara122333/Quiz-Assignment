import React, { useState } from 'react'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdOutlineEdit} from 'react-icons/md'
import QuizFormPopUp from './QuizFormPopUp'
import { Link } from 'react-router-dom'
const QuizPoster = (props) => {
    const [quizFormOpen, setQuizFormOpen] = useState(false);
    const quizFormOpenModel = () => setQuizFormOpen(true);
    const [quizData, setQuizData] = useState(JSON.parse(localStorage.getItem('quizData')),[]);
    // console.log(quizData);
    const quizDelete = (id) => {
        const updatedQuizData = quizData.filter((item) => item.id !== id);
        localStorage.setItem('quizData', JSON.stringify(updatedQuizData));
        setQuizData(updatedQuizData);
        window.location.reload(true); 
      };

  return (
    <>
        <QuizFormPopUp isOpen={quizFormOpen} setIsOpen={setQuizFormOpen} />
        <div className='border-2 border-blue-500 w-full lg:w-2/6 py-1 rounded-lg bg-red-100' key={props.id}>
                <div className='flex justify-between items-center border-b-2 border-b-red-500 pb-1'>
                    <div className='px-2 lg:px-4'>
                        <h1 className='px-4 text-center text-xl font-bold uppercase'>
                            {props.quizName}
                        </h1>
                    </div>
                    <div className='flex gap-2 justify-center items-center px-2 lg:px-4'>
                        <span className='bg-green-500 px-4 text-white rounded-md py-1 md:py-2 cursor-pointer' onClick={quizFormOpenModel}>
                            <MdOutlineEdit className='text-2xl hover:scale-125 duration-500'/>
                        </span>
                        <span className='bg-red-500 px-4 text-white rounded-md py-1 md:py-2 cursor-pointer' 
                        onClick={() => quizDelete(props.id)}
                        >
                            <AiOutlineDelete className='text-2xl hover:scale-125 duration-500'/>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col px-2 lg:px-4 py-2 pt-8 lg:pt-8 lg:py-4 gap-2'>
                    <div className=''>
                        <h1 className='font-bold text-center rounded-sm w-24'>Description</h1>
                        <span className='px-2 text-gray-500'>
                        {props.description}
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2'>
                            <h1 className='font-bold text-center'>Total Points</h1>
                            <span className='bg-yellow-400 px-2 text-white rounded-md'>
                            {props.pointsGradingSystem}
                            </span>
                        </div>
                        <div className='flex gap-2'>
                            <h1 className='font-bold text-center'>TimeLimit</h1>
                            <span className='bg-yellow-400 px-2 text-white rounded-md'>
                            {props.timeLimit} Minutes
                            </span>
                        </div>
                    </div>
                </div>
                <Link to={`/quiz/${props.id}`}>
                    <div className='flex items-center px-5 py-1 my-4 cursor-pointer'>
                        <h3 className='bg-blue-500 rounded-md py-1 hover:bg-blue-700 text-white px-8 font-semibold'>Start</h3>
                    </div>
                </Link>
        </div>
    </>
  )
}

export default QuizPoster