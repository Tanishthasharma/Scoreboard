import React , {useState} from "react";
import cricket from "./images/cricket.jpeg";
import styles from "./style.module.css";
import google from "./images/Google_Logo.png"
import { useNavigate } from "react-router-dom";
import Wrapper from "./style";


export const Register = () => {
  // const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name , setName ] = useState("");
  const [contact , setContact ] = useState("");
  const register = (e) =>{
    e.preventDefault();
    // console.log("Email:",email);
    console.log("Password", password);
  };
  const submit = () =>{
    navigate('/login')
  }
  return (
   <Wrapper>
     <div 
        // onSubmit={handleSubmit}
        >
      <div className="inner">
      <img src={cricket} alt="" height={"90%"} width={"50%"}/>
      <div className="registerForm">
      <form action=""  className="form">
        <input type="name" placeholder="Enter Name"  className = ""  /> 
        <input type="contact" placeholder="Enter Contact" />
        <input type="password" placeholder = "Password"  className = "password" onChange={(e)=> setPassword(e.target.value)} />
        {/* <div className={styles.innerForm}>
          <label htmlFor="" className={styles.rememberme}><input type="checkbox" />Remember Me</label>
          <label htmlFor="" className={styles.forgotpass}><a href="">Forgot Password</a></label>
        </div> */}
        <input type="submit" className="" id="userSubmitButton"  onClick={submit}></input>
        {/* <label htmlFor="">Don't have an Account ? <a href={} >Register Here</a></label> */}
          
          
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

export default Register;
