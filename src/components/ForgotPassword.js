import { useEffect, useState } from "react"
import useLocalStorage from "./useLocalStorage";

const ForgotPassword = () =>{
//    const [email,setEmail] = useState("");

//    useEffect(() =>{
//        let emailDefault =  localStorage.getItem("email");
//        setEmail(emailDefault);
//    },[]);
   

//    useEffect(() =>{
//         localStorage.setItem("email",email);
//     },[email]);
const {email,setEmail} = useLocalStorage("");
   return(
    <>
        <h1>Forgot Password</h1>
        <input type="email" placeholder="enter the email" value={email}
        onChange={(e) =>{
            setEmail(e.target.value);
        }}
        />
    </>
     
   )
}

export default ForgotPassword;