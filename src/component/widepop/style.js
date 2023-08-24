import {styled} from "styled-components";

const Wrapper = styled.section
`
text-align:center;
display:flex;
justify-content:space-evenly;
 margin:auto; 


 .popup {
    position:fixed;
    top : 250px;
 
    width :100%;
    max-width:500px;
    background-color:#fff;
     
    display:flex;
    flex-diection:column;
    align-items:center;
 }
 
 .popup-inner{
    position:relative;
    padding:32px;
    width:90%;
    max-width:360px;
    background-color:white;
    display:flex;
    flex-wrap:wrap;
    margin:auto;
   padding :50px 0px;
 

 input{
       flex:1;
       text-align:center;
       min-width: 100px ;
       min-height: 100px ;
       font-size:1.2rem;
       cursor:pointer;
       
   }
   }
`
export default Wrapper