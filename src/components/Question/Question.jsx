import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Question = () => {
    const {_id} = useParams();
    const [questionData, setQuestionData] = useState() || [];
    useEffect(()=>{
        axios.get(`http://localhost:4000/quiz/question/${_id}`).then((response)=>{
            setQuestionData(response.data.quizQuestionData.question);
        }).catch((error)=>{
            console.log(error);
        })
    },[]);
  return (
    <>
        <h1>This is Question Data</h1>
        {
            questionData && questionData.map((item)=>(
                <div className='py-5 px-6 bg-red-500' key={item._id}>
                    <h1>Good
                    </h1>
                </div>
            ))
            
        }
    </>
  )
}

export default Question