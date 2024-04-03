import React,{useState} from 'react'
import { createContext, useContext } from "react";

const itemContext = createContext();

export default function UseValue()
{
    const value = useContext(itemContext);
    console.log(value)
    return value
};


 export function CustomProvider({children}) {
    const [modal,setModal] = useState(false)
    function handleModal()
    {
        setModal(!modal)
    }
  return (
        <itemContext.Provider value={{modal,setModal,handleModal}}>
            {children}
        </itemContext.Provider>
  )
}
