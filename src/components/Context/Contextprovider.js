import React, { createContext, useState } from 'react'

export const addQuizData = createContext();

const ContextProvider = ({ children }) => {

    const [quizadd, setQuizadd] = useState("");

    return (
        <>
            <addQuizData.Provider value={{ quizadd, setQuizadd }}>
                        {children}
            </addQuizData.Provider>
        </>
    )
}

export default ContextProvider