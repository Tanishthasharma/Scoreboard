import { styled } from "styled-components";


export const Wrapper = styled.section`
   background-color:blue;
max-width :50%;
margin  auto ;
padding : 50px; 

  .inner{
     background-color : yellow;
     max widht:90%;
         diplay : flex;
  }
  .registerForm  {
    background-color : pink;
    display: flex;
     flex-direction: row-reverse;
     align-items: center;
     padding : 20px;
  }

  .form{
    background-color : orange;
    padding : 20px 20px 20px 20px;
    display : flex;
    flex-direction : column;
  }
`

 export default Wrapper