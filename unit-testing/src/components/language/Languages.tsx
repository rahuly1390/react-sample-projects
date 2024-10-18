import { useEffect, useState } from "react";
import { LangProps } from "./Languages.types";

export const Languages = (props:LangProps) =>{

    const{languages} = props;
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoggedIn(true)
        },2000)
    })
    return(
        <>
        <ul>
            {languages.map(langs =><li key={langs}>{langs}</li>)}
        </ul>
        {isLoggedIn ? <button>Start Course</button> : 
        <button onClick={() => setIsLoggedIn(true)}>Login</button>}
        </>
    )
}