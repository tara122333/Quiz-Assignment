import React from 'react'

const QuizPoster = () => {
  return (
    <>
        <div className='border-2 border-blue-500 w-full px-2 py-4 lg:w-96 lg:py-6 lg:px-4'>
                <div className='flex justify-between px-3'>
                    <div>
                        <h1>Name</h1>
                    </div>
                    <div className='flex gap-2 justify-center items-center'>
                    <span>Edit</span>
                    <span>Delete</span>
                    </div>
                </div>
                <div className='flex flex-col py-2 lg:py-6'>
                    <span>Description</span>
                    <span>Time</span>
                    <span>Grade</span>
                </div>
                <div className='flex justify-center items-center px-4 py-1 bg-blue-500 text-white'>
                    <h3>Start</h3>
                </div>
        </div>
    </>
  )
}

export default QuizPoster