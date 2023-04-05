import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineDelete} from 'react-icons/ai'
import {MdOutlineEdit} from 'react-icons/md'
import axios from 'axios'

import UpdateQuestionDataPopUpModel from './UpdateQuestionData'

const QuizQuestionPoster = (props) => {
    const DeleteQuestion = (_id) => {
        axios.delete(`http://localhost:4000/delete/quiz/question/${_id}`).then((response)=>{
            console.log(response.message);
        }).catch((exception)=>{
            console.log(exception);
        });
        window.location.reload(true); 
    }

    const [quizQuestionOpen, setQuizQuestionOpen] = useState(false);
    const quizQuestionOpenModel = () => setQuizQuestionOpen(true);
    
  return (
    <>
        <UpdateQuestionDataPopUpModel isOpen={quizQuestionOpen} setIsOpen={setQuizQuestionOpen} _id={props._id}/>
        <div className='border-2 border-blue-500 w-full lg:w-96 py-1 rounded-lg bg-red-100' key={props._id}>
                <div className='flex justify-between items-center border-b-2 border-b-red-500 pb-1'>
                    <div className='px-2 lg:px-4'>
                        <h1 className='px-4 text-center text-xl font-bold uppercase'>
                            {props.questionName}
                        </h1>
                    </div>
                    <div className='flex gap-2 justify-center items-center px-2 lg:px-4'>
                        <span className='bg-green-500 px-4 text-white rounded-md py-1 md:py-2 cursor-pointer' onClick={quizQuestionOpenModel}>
                            <MdOutlineEdit className='text-2xl hover:scale-125 duration-500'/>
                        </span>
                        <span className='bg-red-500 px-4 text-white rounded-md py-1 md:py-2 cursor-pointer' onClick={()=> DeleteQuestion(props._id)}
                        >
                            <AiOutlineDelete className='text-2xl hover:scale-125 duration-500'/>
                        </span>
                    </div>
                </div>
                <div className='flex flex-col px-2 lg:px-4 py-2 pt-8 lg:pt-8 lg:py-4 gap-2'>
                    <div className='flex gap-2'>
                        <h1 className='font-bold text-lg rounded-sm '>Total Marks</h1>
                        <span className='bg-blue-500 px-4 text-white rounded-md'>
                        {props.marks}
                        </span>
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 justify-evenly flex-col'>
                            <div className='flex gap-2'>
                                <h1 className='font-bold text-center'>Option 1</h1>
                                <span className='bg-yellow-400 px-2 text-white rounded-md'>
                                {props.option1}
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <h1 className='font-bold text-center'>Option 2</h1>
                                <span className='bg-yellow-400 px-2 text-white rounded-md'>
                                {props.option2}
                                </span>
                            </div>
                        </div>
                        <div className='flex gap-2 justify-evenly flex-col'>
                            <div className='flex gap-2'>
                                <h1 className='font-bold text-center'>Option 3</h1>
                                <span className='bg-yellow-400 px-2 text-white rounded-md'>
                                {props.option3}
                                </span>
                            </div>
                            <div className='flex gap-2'>
                                <h1 className='font-bold text-center'>Option 4</h1>
                                <span className='bg-yellow-400 px-2 text-white rounded-md'>
                                {props.option4}
                                </span>
                            </div>
                        </div>
                    </div>
                    {
                        props.isMultipleAnswer === "true" ? (
                            <>
                                <div className='flex gap-2 flex-col'>
                                    <h1 className='font-bold rounded-sm text-lg'>Multiple Choice Answer </h1>
                                    <div className='flex flex-wrap gap-2'>
                                        {
                                                props.answer1 === "answer1" && (
                                                <>
                                                    <span className='bg-blue-500 px-2 text-white rounded-md'>Option 1</span>
                                                </>)
                                        }
                                        
                                        {
                                                props.answer2 === "answer2" && (
                                                <>
                                                    <span className='bg-blue-500 px-4 text-white rounded-md'>Option 2</span>
                                                </>)
                                        }

                                        
                                        {
                                                props.answer3 === "answer3" && (
                                                <>
                                                    <span className='bg-blue-500 px-4 text-white rounded-md'>Option 3
                                            
                                                </span>
                                                </>)
                                        }
                                        {
                                            props.answer4 === "answer4" && (
                                                <>
                                                    <span className='bg-blue-500 px-4 text-white rounded-md'>Option 4</span>
                                                </>)
                                        }
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='flex gap-2 flex-col'>
                                    <h1 className='font-bold text-lg rounded-sm'>Single Choice Answer</h1>
                                    <span className='bg-blue-500 px-4 text-white rounded-md w-24'>
                                        {
                                            props.answer === "Answer1" ? (
                                            <>
                                                <h1>Option 1</h1>
                                            </>) : (
                                                <>
                                                </>
                                            )
                                        }
                                        {
                                            props.answer === "Answer2" ? (
                                            <>
                                                <h1>Option 2</h1>
                                            </>) : (
                                                <>
                                                </>
                                            )
                                        }
                                        {
                                            props.answer === "Answer3" ? (
                                            <>
                                                <h1>Option 3</h1>
                                            </>) : (
                                                <>
                                                </>
                                            )
                                        }
                                        {
                                            props.answer === "Answer4" ? (
                                            <>
                                                <h1>Option 4</h1>
                                            </>) : (
                                                <>
                                                </>
                                            )
                                        }
                                    </span>
                                </div>
                            </>
                        )
                    }
                </div>
        </div>
    </>
  )
}

export default QuizQuestionPoster;