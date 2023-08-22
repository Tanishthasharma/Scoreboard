import React , {useState} from "react";
import cricket from "./images/cricket.jpeg";
// import styles from "./style.module.css";
import google from "./images/Google_Logo.png"
import Register from "../register";
import Wrapper from "./style";
import { useNavigate } from "react-router-dom";
import { Display } from "../display";

const Login = () => {
  // const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [contact , setContact] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("ontact:",contact);
    console.log("Password", password);
  };
  const submit = () =>{
    navigate ('/display')

  }
  const register = () => {
    navigate ('/Register')
  }
  return (
    <Wrapper>
      <div 
        onSubmit={handleSubmit}>
      <div className="inner">
      <img src={cricket} alt="" height={"90%"} width={"50%"}/>
      <div className="loginForm">
      <form action=""  className="form">
        <input type="contact" placeholder="Contact"  className = "email" onChange={(e)=> setContact(e.target.value)} /> 
        <input type="password" placeholder = "Password"  className = "password" onChange={(e)=> setPassword(e.target.value)} />
        {/* <div className={styles.innerForm}>
          <label htmlFor="" className={styles.rememberme}><input type="checkbox" />Remember Me</label>
          <label htmlFor="" className={styles.forgotpass}><a href="">Forgot Password</a></label>
        </div> */}
        <input type="submit" className="" id="userSubmitButton"  onClick={submit}></input>
        <label htmlFor="">Don't have an Account ? <a href={register}>Register Here</a></label>
          
          
        {/* <div >
        
          <button className={styles.googleBtn} ><img src={google}  height="20px" width= "20px"alt="" /> <label htmlFor="" className="styles.googleBtn">Login With Google</label></button>
          <input type="submit"  className=""> <img src={google}  height= "20px" width = "20px" alt="" /><label>Login With Google</label></input>
        </div> */}

      </form>
      </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default Login;
