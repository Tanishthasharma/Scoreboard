import { styled } from "styled-components";


const Wrapper = styled.section
`
header{
  text-align:center;
  h1{
    font-size:56px;
  }
}

main{
   
   input{
    min-width:20%;
    margin-top:10%;
    // padding:20px 20px;
    font-size:40px;
    border-radius:10px 5px;
    // box-shadow:5px 10px lightgray;
   }
}

footer{
  background-color:black;
  color:white;
  text-align:center;
 postion:absolute;
  bottom:0;
  
}
`

export default Wrapper