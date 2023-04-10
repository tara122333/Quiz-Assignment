import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useState } from 'react'

export default function QuizFormPopUp({isOpen,setIsOpen}) {

  const BASE_URL='https://quizbackend-faiu.onrender.com';
  // const BASE_URL='http://localhost:4000';

    const [quizData, setQuizData] = useState({
        quizName : '',
        description : '',
        pointsGradingSystem : '',
        timeLimit : '',
    });

    const handleSubmit = (e) => {
        setQuizData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const submit = async() => { 
      const response = await axios.post(`${BASE_URL}/create`, {quizData});
        if(response.status === 200){
          setQuizData({
            quizName : '',
            description : '',
            pointsGradingSystem : '',
            timeLimit : '',
        })
        window.location.reload(true);
      }
      };

  function closeModal() {
    setIsOpen(false)
  }
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Quiz
                  </Dialog.Title>
                  <div className='py-6'>
                    <form className="w-full max-w-lg mx-auto">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="quiz-name">
                            Quiz Name
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="quiz-name"
                            name='quizName'
                            type="text"
                            placeholder="Enter quiz name"
                            value={quizData.quizName}
                            onChange={handleSubmit}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
                            Description
                            </label>
                            <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="description"
                            name='description'
                            placeholder="Enter quiz description"
                            value={quizData.description}
                            onChange={handleSubmit}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="points-grading-system">
                            Points
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="points-grading-system"
                            type="number"
                            name='pointsGradingSystem'
                            placeholder="Enter total points"
                            value={quizData.pointsGradingSystem}
                            onChange={handleSubmit}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="time-limit">
                            Time Limit (in minutes)
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="time-limit"
                            type="number"
                            name='timeLimit'
                            placeholder="Enter time limit in minutes"
                            value={quizData.timeLimit}
                            onChange={handleSubmit}
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <div
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
                            onClick={()=> submit()}
                            >
                            Create Quiz
                            </div>
                        </div>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
