import React, { createContext, useState } from 'react'

export const addQuizData = createContext();
export const updateData = createContext();
export const dltdata = createContext();

const ContextProvider = ({ children }) => {

    const [quizadd, setQuizadd] = useState("");
    const [update, setUpdate] = useState("");
    const [deletedata, setDLtdata] = useState("");

    return (
        <>
            <addQuizData.Provider value={{ quizadd, setQuizadd }}>
                <updateData.Provider value={{ update, setUpdate }}>
                    <dltdata.Provider value={{deletedata, setDLtdata}}>
                        {children}
                    </dltdata.Provider>
                </updateData.Provider>
            </addQuizData.Provider>
        </>
    )
}

export default ContextProvider