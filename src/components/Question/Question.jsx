import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Question = () => {
    const BASE_URL="https://quizbackend-faiu.onrender.com"
    const { _id } = useParams();
    const [questionData, setQuestionData] = useState([]);

    const [quizData, setQuizData] = useState({
        id: '',
        quizName: '',
        description: '',
        pointsGradingSystem: '',
        timeLimit: '',
    }) || [];

    const [time, setTime] = useState(0);
    const [spiner , setSpiner] = useState(true);

    const fun = async()=>{
        const response = await axios.get(`${BASE_URL}/quiz/question/${_id}`);
        setQuestionData(response.data.quizQuestionData.question);
        setSpiner(false);
    }
    useEffect(()=>{
        fun();
    })

    const fun1 = async()=>{
        const response = await axios.get(`${BASE_URL}/quiz/${_id}`);
        setQuizData(response.data.findQuiz);
        if(response.status === 200 && time === 0){
            setTime((response.data.findQuiz.timeLimit) * 60);
        }
        setSpiner(false);
    }

    useEffect(()=>{
        fun1();   
    });
    
    useEffect(()=>{
        const interval = setInterval(() => {
            setTime(time => time - 1);
            
        }, 1000);
        return () => clearInterval(interval);
    },[])

    const [questionIndex, setQuestionIndex] = useState(0, []);
    const [questionAnswerData, setQuestionAnswerData] = useState([{
        id: 0,
        answer: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
    }]);

    const [answerData, setAnswerData] = useState({
        id: questionIndex,
        answer: '',
        answer1: '',
        answer2: '',
        answer3: '',
        answer4: '',
    });

    const handleSubmit = (e, _id) => {
        setAnswerData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const [scorData, setScoreData] = useState(0, []);
    let Score = 0;
    const SubmitAndNext = () => {
        setQuestionAnswerData([...questionAnswerData, answerData]);
        setAnswerData({
            id: questionIndex + 1,
            answer: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
        })
    };

    const Submit = () => {
        var len = questionData.length;
        var questionLen = questionAnswerData.length;
        var index = 0;
        while (len > index) {
            var tempSum = 0;
            var i = 1;
            while (i < questionLen) {
                if (questionAnswerData[i]?.id === index) {
                    if (questionData[index].isMultipleAnswer === "true") {
                        if ((questionData[index].answer1 === questionAnswerData[i].answer1) && (questionData[index].answer2 === questionAnswerData[i].answer2) && (questionData[index].answer3 === questionAnswerData[i].answer3) && (questionData[index].answer4 === questionAnswerData[i].answer4)) {
                            tempSum = questionData[index].marks;
                        }
                    }
                    else {
                        if (questionData[index].answer === questionAnswerData[i].answer) {
                            tempSum = questionData[index].marks;
                        }
                    }
                }
                i = i + 1;
            }
            Score = Score + parseInt(tempSum);
            setScoreData(Score);
            index = index + 1;
        }
    };

    return (
        <>
            {
                questionData.length  ? (
                    <>
                        {
                            time <= 0 ? (
                                <>
                                </>
                            ) : (
                                <>
                                    <div className='bg-red-600 h-20 w-full text-black flex items-center justify-evenly flex-col md:flex-row gap-2 '>
                                        <div className=' px-2 lg:px-10 flex gap-2 lg:gap-10 items-center justify-around lg:justify-center w-full lg:w-auto'>
                                            <h1 className='font-bold text-white text-lg lg:text-xl'>
                                                {
                                                    quizData.quizName
                                                }
                                            </h1>
                                            <h1 className='font-semibold text-white flex justify-center items-center'>
                                                Total Poins
                                                <span className='px-1 lg:px-6 mx-1 lg:mx-2 bg-black rounded-lg'>
                                                    {
                                                        quizData.pointsGradingSystem
                                                    }
                                                </span>
                                            </h1>
                                        </div>
                                        <div className='flex gap-2'>
                                            <h1 className='font-bold text-white'>
                                                Remaining Time :
                                            </h1>
                                            <span className='px-4 bg-black text-white rounded-lg'>
                                                {
                                                    Math.trunc(time / 60)
                                                }
                                                <span className='px-1'>Min</span>
                                                {
                                                    time % 60
                                                }
                                                <span className='px-1'>
                                                    sec
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </>
                            )
                        }

                        {
                            time <= 0 ? (
                                <>
                                    <div className='flex justify-center items-center w-full h-full py-28'>

                                        <div className='flex justify-center items-center w-96 h-48 border-2 rounded-xl border-red-700 bg-red-100 rounded-2x gap-4 flex-col'>
                                            <div className='text-red-600 text-xl font-bold'>
                                                <h1>Time Out !!</h1>
                                            </div>

                                            <div className='flex gap-4 justify-center items-center '>
                                                <h1 className='font-bold'>
                                                    Your Score is :
                                                </h1>
                                                <h1 className='bg-black font-bold rounded-lg text-white px-8 text-center flex justify-center items-center w-12'>
                                                    {
                                                        scorData
                                                    }
                                                </h1>
                                            </div>
                                            <div className='py-4'>
                                                <Link to={`/`}>
                                                    <span className='bg-green-500 px-4 py-1 rounded-lg text-white font-semibold cursor-pointer hover:bg-green-700'>Home</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {
                                        questionData[0]?.marks > 0 ? (
                                            <>
                                                {
                                                    questionData.length <= questionIndex ? (
                                                        <>
                                                            {
                                                                questionData.length < questionIndex ? (
                                                                    <div className='flex justify-center items-center w-full h-full py-28'>

                                                                        <div className='flex flex-col justify-center items-center w-96 h-48 border-2 rounded-xl border-red-700 bg-red-100 rounded-2x gap-4'>
                                                                            <div>
                                                                                <h1 className='font-bold text-2xl'>Successfully Submitted</h1>
                                                                            </div>

                                                                            <div className='flex gap-2'>
                                                                                <h1 className='font-bold'>
                                                                                    Your Score is :
                                                                                </h1>
                                                                                <h1 className='bg-black font-bold rounded-lg text-white px-8 text-center flex justify-center items-center w-12'>
                                                                                    {
                                                                                        scorData
                                                                                    }
                                                                                </h1>
                                                                            </div>
                                                                            <div className='py-4'>
                                                                                <Link to={`/`}>
                                                                                    <span className='bg-green-500 px-4 py-1 rounded-lg text-white font-semibold cursor-pointer hover:bg-green-700'>Home</span>
                                                                                </Link>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ) : (
                                                                    <>
                                                                        <div className='flex justify-center items-center py-20'>
                                                                            <div className='flex gap-5 border-2 border-red-500 p-20'>
                                                                                <span className='cursor-pointer px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-lg text-white font-semibold' onClick={() => setQuestionIndex(questionIndex - 1)}>
                                                                                    Previous
                                                                                </span>

                                                                                <span className='cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-800  rounded-lg text-white font-semibold' onClick={() => {
                                                                                    Submit();
                                                                                    setQuestionIndex(questionIndex + 1)
                                                                                }} >
                                                                                    Submit
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                )
                                                            }

                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className='flex justify-center items-center gap-5 py-20 flex-wrap w-full'>
                                                                {
                                                                    <div className='py-5 px-6 bg-red-100 w-full lg:w-2/5 flex flex-col gap-5 rounded-lg' key={questionData[questionIndex]?._id}>
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
                                                                                    questionData[questionIndex]?.marks
                                                                                }
                                                                            </span>
                                                                        </div>
                                                                        <div>
                                                                            <div className='flex gap-2 items-center'>
                                                                                <h1 className='font-bold text-lg'>Question : </h1>
                                                                                <p>
                                                                                    {
                                                                                        questionData[questionIndex]?.questionName
                                                                                    }
                                                                                </p>
                                                                            </div>
                                                                            <div>
                                                                                {
                                                                                    questionData[questionIndex]?.isMultipleAnswer === "true" ? (
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
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]?._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option1

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
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]?._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option2

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
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option3

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
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]?._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option4

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
                                                                                                                checked={answerData.answer === "Answer1"}
                                                                                                                value="Answer1"
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]?._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option1

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
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]?._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option2

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
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]?._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option3

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
                                                                                                                onChange={(e) => handleSubmit(e, questionData[questionIndex]?._id)} />
                                                                                                            {
                                                                                                                questionData[questionIndex]?.option4

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
                                                                                        <span className='cursor-pointer px-3 py-1 bg-purple-600 hover:bg-purple-800 rounded-lg text-white font-semibold' onClick={() => setQuestionIndex(questionIndex - 1)}>
                                                                                            Previous
                                                                                        </span>
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                    </>
                                                                                )
                                                                            }

                                                                            {
                                                                                questionIndex === questionData.length ? (
                                                                                    <>
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <span className='cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-800  rounded-lg text-white font-semibold' onClick={() => {
                                                                                            SubmitAndNext();
                                                                                            setQuestionIndex(questionIndex + 1)
                                                                                        }}>
                                                                                            Save and Next
                                                                                        </span>
                                                                                    </>
                                                                                )
                                                                            }
                                                                            {
                                                                                questionData.length === questionIndex ? (
                                                                                    <>
                                                                                        <span className='cursor-pointer px-3 py-1 bg-green-600 hover:bg-green-800  rounded-lg text-white font-semibold' onClick={() => {
                                                                                            Submit();
                                                                                            setQuestionIndex(questionIndex + 1)
                                                                                        }} >
                                                                                            Submit
                                                                                        </span>
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        <span className='cursor-pointer px-3 py-1 bg-blue-600 hover:bg-blue-800  rounded-lg text-white font-semibold' onClick={() => setQuestionIndex(questionIndex + 1)} >
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
                                        ) : (
                                            <>
                                                <div className='flex justify-center items-center py-20'>
                                                    <h1 className='text-2xl font-bold text-red-500'>No question</h1>
                                                </div>
                                            </>
                                        )
                                    }
                                </>
                            )
                        }                               
                    </>
                ) : (<>

                {
                    !spiner ? (<>
                        <div className='flex flex-col lg:flex-row justify-center h-screen items-center gap-2 '>
                            <h1 className='text-xl font-bold'>
                                No question here Go home
                            </h1>
                            <Link to={"/"} className='px-4 bg-green-500 py-1 rounded-lg hover:bg-green-700 text-white'>
                                Home
                            </Link>
                        </div>
                    </>) : (<>
                        <div className='flex justify-center items-center h-screen'>
                                <Box sx={{ display: 'flex' }}>
                                    <CircularProgress />
                                </Box>
                            </div>
                        </>)
                }
                    
                </>)
            }
        </>
    )
}

export default Question