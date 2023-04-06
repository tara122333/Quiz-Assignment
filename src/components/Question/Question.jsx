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

    const [questionAnswerData, setQuestionAnswerData] = useState([{
        id : 0,
        answer : '',
        answer1 : '',
        answer2 : '',
        answer3 : '',
        answer4 : '',
    }]);

    const [answerData, setAnswerData] = useState({
        id : questionIndex,
        answer : '',
        answer1 : '',
        answer2 : '',
        answer3 : '',
        answer4 : '',
    });
    
    const handleSubmit = (e,_id) => {
        setAnswerData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [scorData, setScoreData] = useState(0);

    let Score = 0;

    const SubmitAndNext = () => {

        setQuestionAnswerData([...questionAnswerData, answerData]);
        
        setAnswerData({
            id : questionIndex +1,
            answer : '',
            answer1 : '',
            answer2 : '',
            answer3 : '',
            answer4 : '',
        })
      };
    
    const Submit = () => {
        setQuestionAnswerData([...questionAnswerData, answerData]);
        // setAnswerData({
        //     id : questionIndex+1,
        //     answer : '',
        //     answer1 : '',
        //     answer2 : '',
        //     answer3 : '',
        //     answer4 : '',
        // })
        var len = questionData.length;
        var questionLen = questionAnswerData.length;
        var index = 0;
        var tempSum = 0;
        while(len > index){
            var i = 1;
            while(i<questionLen){
                console.log(questionAnswerData[i].id)
                console.log(index)
                if(questionAnswerData[i].id  === index){
                    
                    console.log("condition true");
                    if(questionData[index].isMultipleAnswer === "true"){
                        // console.log("is Mul");
                        // if((questionData[index].answer1 === questionAnswerData[i].answer1) &&(questionData[index].answer2 === questionAnswerData[i].answer2) &&(questionData[index].answer3 === questionAnswerData[i].answer3) &&(questionData[index].answer4 === questionAnswerData[i].answer4)){
                        //     tempSum = questionData[index].marks;
                        //     Score = Score + parseInt(tempSum);
                        //     setScoreData(Score);
                        // }
                    }
                    else{
                        // if(questionData[index].answer === questionAnswerData[i].answer){
                        //     tempSum = questionData[index].marks;
                        //     Score = Score + parseInt(tempSum);
                        //     setScoreData(Score);
                        //     // console.log(scorData);
                        // }
                        // console.log("not mul");
                    }
                }
                i = i + 1;
            }
            index = index + 1;   
        }
      };
    //   console.log(questionAnswerData);
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
                                    <div className='flex gap-2 items-center'>
                                        <h1 className='font-bold text-lg'>Question : </h1>
                                        <p>
                                            {
                                                questionData[questionIndex].questionName
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        {
                                            questionData[questionIndex].isMultipleAnswer === "true" ? (
                                                <>
                                                    <div className="mb-4">
                                                        <h1 className='text-gray-700 font-bold mb-2'>Select Multiple Answer</h1>
                                                        <div className='flex justify-evenly items-center'>
                                                            <div>
                                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="answer1">
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2"
                                                                    id="answer1"
                                                                    name="answer1"
                                                                    type="checkbox"
                                                                    checked={answerData.answer1 === "answer1"}
                                                                    value="answer1"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)} />
                                                                    {
                                                                        questionData[questionIndex].option1

                                                                    }
                                                                </label>

                                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="answer2">
                                                                    
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                                    id="answer2"
                                                                    name='answer2'
                                                                    checked={answerData.answer2 === "answer2"}
                                                                    type="checkbox"
                                                                    placeholder="Single choise"
                                                                    value="answer2"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)} />
                                                                    {
                                                                        questionData[questionIndex].option2

                                                                    }
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="answer3">
                                                                    
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                                    id="answer3"
                                                                    name='answer3'
                                                                    checked={answerData.answer3 === "answer3"}
                                                                    type="checkbox"
                                                                    value="answer3"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)} />
                                                                    {
                                                                        questionData[questionIndex].option3

                                                                    }
                                                                </label>
                                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="answer4">
                                                                   
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                                    id="answer4"
                                                                    name='answer4'
                                                                    checked={answerData.answer4 === "answer4"}
                                                                    type="checkbox"
                                                                    value="answer4"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)} />
                                                                    {
                                                                        questionData[questionIndex].option4

                                                                    }
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="mb-4">
                                                        <h1 className='text-gray-700 font-bold mb-2'>Select Single Answer</h1>
                                                        <div className='flex justify-evenly items-center'>
                                                            <div>
                                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="Answer1">
                                                                    
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2"
                                                                    id="Answer1"
                                                                    name='answer'
                                                                    type="radio"
                                                                    // placeholder="Multiple choise"
                                                                    checked={answerData.answer === "Answer1"}
                                                                    value="Answer1"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)}/>
                                                                    {
                                                                        questionData[questionIndex].option1

                                                                    }
                                                                </label>

                                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="Answer2">
                                                                    
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                                    id="Answer2"
                                                                    name='answer'
                                                                    checked={answerData.answer === "Answer2"}
                                                                    type="radio"
                                                                    placeholder="Single choise"
                                                                    value="Answer2"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)} />
                                                                    {
                                                                        questionData[questionIndex].option2

                                                                    }
                                                                </label>
                                                            </div>
                                                            <div>
                                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="Answer3">
                                                                    
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                                    id="Answer3"
                                                                    name='answer'
                                                                    checked={answerData.answer === "Answer3"}
                                                                    type="radio"
                                                                    value="Answer3"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)}/>
                                                                     {
                                                                        questionData[questionIndex].option3

                                                                    }
                                                                </label>
                                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="Answer4">
                                                                    
                                                                    <input
                                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                                    id="Answer4"
                                                                    name='answer'
                                                                    checked={answerData.answer === "Answer4"}
                                                                    type="radio"
                                                                    value="Answer4"
                                                                    onChange={(e)=> handleSubmit(e,questionData[questionIndex]._id)} />
                                                                    {
                                                                        questionData[questionIndex].option4

                                                                    }
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        }
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

                                    {
                                        questionIndex === questionData.length - 1 ? (
                                            <>
                                            </>
                                        ) : (
                                            <>
                                                <span className='cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-800  rounded-lg text-white font-semibold' onClick={()=>{
                                                    SubmitAndNext();
                                                    setQuestionIndex(questionIndex+1)
                                                }}>
                                                    Save and Next
                                                </span>
                                            </>
                                        )
                                    }
                                    {
                                        questionData.length === questionIndex + 1 ? (
                                            <>
                                                <span className='cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-800  rounded-lg text-white font-semibold' onClick={()=> {
                                                    Submit();
                                                    setQuestionIndex(questionIndex+1)
                                                    }} >
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