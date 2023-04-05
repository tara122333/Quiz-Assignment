import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios';
import { Fragment, useState } from 'react'
import { useParams } from 'react-router-dom';


export default function UpdateQuestionDataPopUpModel({isOpen, setIsOpen,_id}) {
    const [question, setQuestion] = useState({
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
    });

    const handleSubmit = (e) => {
        setQuestion((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    console.log(question);

    const submit = () => {
        axios.put(`http://localhost:4000/update/quiz/question/${_id}`,{question}).then((response) => {
            console.log(response.questionData);
        }).catch((exception)=>{
          console.log(exception);
        });
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
                    Update Question
                  </Dialog.Title>
                  <div className="mt-4">
                    <form className="w-full max-w-lg mx-auto" onSubmit={submit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="questionName">
                            Question Name
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="questionName"
                            name='questionName'
                            type="text"
                            placeholder="Enter question name"
                            value={question.questionName}
                            onChange={handleSubmit}
                            />
                        </div>
                        <div>
                            <div className='flex gap-2'>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="option1">
                                    Option 1
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="option1"
                                    type="text"
                                    name='option1'
                                    placeholder="Enter option 1"
                                    value={question.option1}
                                    onChange={handleSubmit}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="option2">
                                    Option 2
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="option2"
                                    name='option2'
                                    type="text"
                                    placeholder="Enter option 2"
                                    value={question.option2}
                                    onChange={handleSubmit}
                                    />
                                </div>
                            </div>
                            <div className='flex gap-2'>
                            <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="option3">
                                    Option 3
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="option3"
                                    name='option3'
                                    type="text"
                                    placeholder="Enter option 3"
                                    value={question.option3}
                                    onChange={handleSubmit}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="option4">
                                    Option 4
                                    </label>
                                    <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="option4"
                                    name='option4'
                                    type="text"
                                    placeholder="Enter option 4"
                                    value={question.option4}
                                    onChange={handleSubmit} />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="marks">
                            Option 4
                            </label>
                            <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="marks"
                            name='marks'
                            type="number"
                            placeholder="Enter Marks"
                            value={question.marks}
                            onChange={handleSubmit} />
                        </div>
                        <div className="mb-4 flex gap-4 items-center">
                            <h1 className='text-gray-700 font-bold mb-2'>IsMultipleAnswer</h1>
                            <label className="block text-gray-700 font-bold mb-2" htmlFor="isMultipleAnswerYes">
                                Yes
                                <input
                                className="focus:outline-none focus:shadow-outline mx-2"
                                id="isMultipleAnswerYes"
                                name='isMultipleAnswer'
                                type="radio"
                                // placeholder="Multiple choise"
                                checked={question.isMultipleAnswer === "true"}
                                value="true"
                                onChange={handleSubmit} />
                            </label>

                            <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="isMultipleAnswerNo">
                                No
                                <input
                                className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                id="isMultipleAnswerNo"
                                name='isMultipleAnswer'
                                checked={question.isMultipleAnswer === "false" }
                                type="radio"
                                placeholder="Single choise"
                                value="false"
                                onChange={handleSubmit} />
                            </label>
                        </div>
                        {
                            question.isMultipleAnswer === "true" ? (
                                <>
                                    <div className="mb-4">
                                        <h1 className='text-gray-700 font-bold mb-2'>Select Multiple Answer</h1>
                                        <div className='flex justify-evenly items-center'>
                                            <div>
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="answer1">
                                                    Option 1
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2"
                                                    id="answer1"
                                                    name="answer1"
                                                    type="checkbox"
                                                    // placeholder="Multiple choise"
                                                    checked={question.answer1 === "answer1"}
                                                    value="answer1"
                                                    onChange={handleSubmit} />
                                                </label>

                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="answer2">
                                                    Option 2
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                    id="answer2"
                                                    name='answer2'
                                                    checked={question.answer2 === "answer2"}
                                                    type="checkbox"
                                                    placeholder="Single choise"
                                                    value="answer2"
                                                    onChange={handleSubmit} />
                                                </label>
                                            </div>
                                            <div>
                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="answer3">
                                                    Option 3
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                    id="answer3"
                                                    name='answer3'
                                                    checked={question.answer3 === "answer3"}
                                                    type="checkbox"
                                                    value="answer3"
                                                    onChange={handleSubmit} />
                                                </label>
                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="answer4">
                                                    Option 4
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                    id="answer4"
                                                    name='answer4'
                                                    checked={question.answer4 === "answer4"}
                                                    type="checkbox"
                                                    value="answer4"
                                                    onChange={handleSubmit} />
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
                                                    Option 1
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2"
                                                    id="Answer1"
                                                    name='answer'
                                                    type="radio"
                                                    // placeholder="Multiple choise"
                                                    checked={question.answer === "Answer1"}
                                                    value="Answer1"
                                                    onChange={handleSubmit} />
                                                </label>

                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="Answer2">
                                                    Option 2
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                    id="Answer2"
                                                    name='answer'
                                                    checked={question.answer === "Answer2"}
                                                    type="radio"
                                                    placeholder="Single choise"
                                                    value="Answer2"
                                                    onChange={handleSubmit} />
                                                </label>
                                            </div>
                                            <div>
                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="Answer3">
                                                    Option 3
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                    id="Answer3"
                                                    name='answer'
                                                    checked={question.answer === "Answer3"}
                                                    type="radio"
                                                    value="Answer3"
                                                    onChange={handleSubmit} />
                                                </label>
                                                <label className="flex justify-center items-center text-gray-700 font-bold mb-2" htmlFor="Answer4">
                                                    Option 4
                                                    <input
                                                    className="focus:outline-none focus:shadow-outline mx-2 text-center"
                                                    id="Answer4"
                                                    name='answer'
                                                    checked={question.answer === "Answer4"}
                                                    type="radio"
                                                    value="Answer4"
                                                    onChange={handleSubmit} />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }
                        <div className="flex items-center justify-center">
                            <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            >
                            Update
                            </button>
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
