import React , {useState} from "react";
import cricket from "./images/cricket.jpeg";
import google from "./images/Google_Logo.png"
import Register from "../register";
import Wrapper from "./style";
import { useNavigate } from "react-router-dom";


const Login = () => {
  
  const navigate = useNavigate();
  const [contact , setContact] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("Contact:",contact);
    console.log("Password", password);
  };

  const submit = () =>{
    navigate ('/player')
  }

  const register = () => {
    navigate ('/register')
  }

  return (
    <Wrapper>
      <div 
        onSubmit={handleSubmit}>
      <div className="inner">
     
      <div className="loginForm">
      <form action=""  className="form">
        <input type="contact" placeholder="Contact"  className = "email" onChange={(e)=> setContact(e.target.value)} /> 
        <input type="password" placeholder = "Password"  className = "password" onChange={(e)=> setPassword(e.target.value)} />
        <input type="submit"  id="userSubmitButton"  onClick={submit} />
        <label htmlFor="">Don't have an Account ? <a href={register}>Register Here</a></label>
          </form>
       </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default Login;
