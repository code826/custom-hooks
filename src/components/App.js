import { useState } from "react";
import ForgotPassword from "./ForgotPassword";
import Form from "./Form";


function App() {
  const [page,setPage] = useState("form");
  return (
    <div className="App">
      {page == "form" ? <Form/>:<ForgotPassword/>}

      <button onClick={() =>{
        setPage(page == "form"?"forgotPassword":"form");
      }}>{page == "form"?"Forgot Password":"Back To Login"}</button>
    </div>
  );
}

export default App;
