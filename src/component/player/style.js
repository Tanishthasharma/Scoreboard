import { styled } from "styled-components";


const Wrapper = styled.section
`
background-color:lightblue;
height:60%;
max-height:600px;
margin:30px 15px ;

.Team{
    display:flex;
    justify-content:space-evenly;
    margin: 30px auto;
    flex-direction:column;
    text-align:center;
   
}
h2{
    text-align:center;
    margin-bottom:20px;
    margin-top:20px;
  }
form
{

width:70%;
max-width:390px;
height :300px;
margin: 30px auto; 
background-color:#f8f8f8;
border-radius:8px;
padding:5px;
}

label{

font-size:20px;
}

select {
    width:90%;
    margin: 15px auto;
    text-align: center;
    border-radius:4px;
    border:none;
    padding:5px;
    background-color: #e8e8e8;

}

input{
    width:90%;
    margin: 15px auto;
    text-align: center;
    border-radius:4px;
    border:none;
    padding:5px;
    background-color: #e8e8e8;
    
  }

.lets{
     color:black;
     padding: 10px 10px;
    text-align:center;
    
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
`

export default Wrapper