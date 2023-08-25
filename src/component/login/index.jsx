import React , {useState} from "react";
import Wrapper from "./style";
import { useNavigate } from "react-router-dom";


const Login = () => {
  
  const navigate = useNavigate();
  const [contact , setContact] = useState("");
  const [password, setPassword] = useState("");

  

  const submit = () =>{
   
    const logContact = localStorage.getItem("contact")
    const logPassword = localStorage.getItem("password")
    console.log("contact: ", contact)
    console.log(" password:", password )
    console.log("logPassword",logPassword)
    console.log("logContact",logContact)
    if(contact === logContact && password === logPassword){
      navigate('/player')
    }
    else{navigate('/login')
      alert("Wrong Credentials")}
  };

  

  return (
  <Wrapper>
    <section>
    
        <div className="inner">
          <div className="loginForm">
          <h2>Login</h2>
            <form action=""  className="form">
              <input type="contact" placeholder="Contact"  className = "email" onChange={(e)=> setContact(e.target.value)} /> 
              <input type="password" placeholder = "Password"  className = "password" onChange={(e)=> setPassword(e.target.value)} />
              <input type="button" value="Login"  id="userSubmitButton"  onClick={submit}  disabled={!(contact,password)}/>
              <label htmlFor="">Don't have an Account ? <a href="./register">Register Here</a></label>
            </form>
        </div>
        </div>
     
    </section>
</Wrapper>
  );
};

export default Login;
