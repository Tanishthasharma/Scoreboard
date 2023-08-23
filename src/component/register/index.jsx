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
    
   <Wrapper>
      <section>
      <div className="inner">
      <div className="registerForm">
        <h2>Register</h2>
        <form action=""  className="form">
          <input type="name" placeholder="Enter Name"   /> 
          <input type="contact" placeholder="Enter Contact" />
          <input type="password" placeholder = "Password"  className = "password" onChange={(e)=> setPassword(e.target.value)} />
          <input type="button" value="Submit" className="" id="userSubmitButton"  onClick={submit} />
        </form>
        <p>Already have an account?</p><span><a href="./login">Login Here</a></span>
      </div>
    </div>
      </section>
   </Wrapper>
   
  );
};

export default Register;