import { useEffect, useState } from "react";

function useLocalStorage(defaultVal){
    const [email,setEmail] = useState(defaultVal);


    useEffect(() =>{
         let emailDefault =  localStorage.getItem("email");
         setEmail(emailDefault);
     },[]);
     
    useEffect(() =>{
         localStorage.setItem("email",email);
    },[email]);

    return {
        email,
        setEmail
    }
 
}

export default  useLocalStorage;