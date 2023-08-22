import React , {useState} from "react";
import cricket from "./images/cricket.jpeg";
import google from "./images/Google_Logo.png"
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";


export const Register = () => {
  
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name , setName ] = useState("");
  const [contact , setContact ] = useState("");

  const register = (e) =>{
    e.preventDefault();
   console.log("Password", password);
  }; 

  const submit = () =>{
    navigate('/login')
  } 

  return (
    
      <div className="inner">
     <div className="registerForm">
      <form action=""  className="form">
        <input type="name" placeholder="Enter Name"   /> 
        <input type="contact" placeholder="Enter Contact" />
        <input type="password" placeholder = "Password"  className = "password" onChange={(e)=> setPassword(e.target.value)} />
      <input type="submit" className="" id="userSubmitButton"  onClick={submit} />
        

      </form>
      </div>
      </div>
   
  );
};

export default Register;
