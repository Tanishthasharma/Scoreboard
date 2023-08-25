import { styled } from "styled-components";


export const Wrapper = styled.section`
background-color:lightblue;
  
.inner{
  max-width : 50%;
  margin: 30px auto;
  display : flex;
  justify-content:center;
  align-items: center;
  
  

  .loginForm{
    width:70%;
    margin: 30px auto; 
    background-color:#f8f8f8;
    border-radius:8px;
    
    h2{
      text-align:center;
      margin-bottom:20px;
      margin-top:20px;
    }
    form{
      width:70%;
      margin:  0 auto;
      display:flex;
      flex-direction : column;
      
      input{
        width:60%;
        margin: 15px auto;
        text-align: center;
        border-radius:4px;
        border:none;
        padding:5px;
        background-color: #e8e8e8;
        
      }

      input[type=button]{
        width:60%;
        margin: 15px auto;
        text-align: center;
        background-color: royalblue;
        padding: 3px;
        color:white;
        border:none;
        border-radius:4px;
        cursor:pointer;
      }
    }

    label{
      text-align:center;
    }
    a{
      display:flex;
      justify-content:center;
      color:blue;
      margin-bottom:20px;
      cursor:pointer;
      
    }
  }
}

`

export default Wrapper
