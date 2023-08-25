import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";


export const Register = () => {
  
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name , setName ] = useState("");
  const [contact , setContact ] = useState("");

  const submit = () =>{
   navigate('/login')
   localStorage.setItem("name",name)
   localStorage.setItem("contact",contact)
   localStorage.setItem("password",password)
   console.log("name",localStorage.getItem("name"))
   console.log("contact",contact)
   console.log("password",password)
  } 

  return (
    
   <Wrapper>
      <section>
      <div className="inner">
      <div className="registerForm">
        <h2>Register</h2>
        <form action=""  className="form">
          <input type="name" placeholder="Enter Name"  value={name}  onChange={(e) => setName(e.target.value)}/> 
          <input type="contact" placeholder="Enter Contact"  value={contact}  onChange={(e) => setContact(e.target.value)}/>
          <input type="password" placeholder = "Password"   value={password}  onChange={(e)=> setPassword(e.target.value)} />
          <input type="button" value="Submit"   onClick={submit} disabled={!(name,contact,password)}  />
        </form>
        <p>Already have an account?</p><span><a href="./login">Login Here</a></span>
      </div>
    </div>
      </section>
   </Wrapper>
   
  );
};

export default Register;