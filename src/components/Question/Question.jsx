import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Question = () => {
    const {_id} = useParams();
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
    }]);

    useEffect(()=>{
        axios.get(`http://localhost:4000/quiz/question/${_id}`).then((response)=>{
            setQuestionData(response.data.quizQuestionData.question);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [answerData, setAnswerData] = useState(

    );
    const [scorData, setScoreData] = useState(0);
    
    console.log(questionIndex);
  return (
    <>
        <h1 className='bg-red-600 h-12 w-full text-black'>Navbar</h1>

        {
            questionData.length === questionIndex ? (
                <>
                    <div>
                        Result
                    </div>
                </>
            ) : (
                <>
                    <div className='flex justify-center items-center gap-5 py-20 flex-wrap w-full'>
                    {
                            <div className='py-5 px-6 bg-red-100 w-full lg:w-2/5 flex flex-col gap-5 rounded-lg' key={questionData[questionIndex]._id}>
                                <div className='flex justify-between bg-cyan-200 px-4 py-2'>
                                    <h1 className='flex gap-1 font-bold'>
                                        <p className='font-bold'>
                                            Question
                                        </p>
                                        {   
                                            questionIndex + 1 
                                        }
                                    </h1>
                                    <span className='flex bg-black text-white rounded-md px-3'>
                                        <p className='font-semibold px-2'>Marks</p>
                                        {
                                            questionData[questionIndex].marks
                                        }
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        <h1>Question Name</h1>
                                    </div>
                                    <div>
                                        Question Option
                                    </div>
                                </div>
                                <div className='flex justify-evenly'>
                                        {
                                            questionIndex >= 1 ? (
                                                <>
                                                    <span className='cursor-pointer px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-lg text-white font-semibold' onClick={()=> setQuestionIndex(questionIndex-1)}>
                                                        Previous
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                </>
                                            )
                                        }

                                    
                                    <span className='cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-800  rounded-lg text-white font-semibold'>
                                        Save and Next
                                    </span>

                                    {
                                        questionData.length === questionIndex + 1 ? (
                                            <>
                                                <span className='cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-800  rounded-lg text-white font-semibold' onClick={()=> setQuestionIndex(questionIndex+1)} >
                                                    Submit
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className='cursor-pointer px-3 py-1 bg-blue-600 hover:bg-blue-800  rounded-lg text-white font-semibold' onClick={()=> setQuestionIndex(questionIndex+1)} >
                                                    Next
                                                </span>
                                            </>
                                        )
                                    }
                                    
                                </div>

                            </div>
                    }
                </div>
                </>
            )
        }

        
    </>
  )
}

export default Question