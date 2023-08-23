import { createContext, useContext, useState } from "react";

const ReferenceContext = createContext()

export const ReferenceContextProvider = ({children})=>{
    const[references, setReferences]= useState([]);

    return(
        <ReferenceContext.Provider value={[references, setReferences]}>
         {children}    
        </ReferenceContext.Provider>
    )
}

export const useReferenceContext = ()=>useContext(ReferenceContext)