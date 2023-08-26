import { styled } from "styled-components";


const Wrapper = styled.section`
  background-color:#ccc;

  .inner{
    background-color:white;
    width:80%;
    
    margin:10px auto;
    border-radius:10px;
    

    .timeline{
      background-color:white;
      border-radius:10px;
      padding:5px;

      .timeline-item{
        border-radius:50%;
        height:35px;
        padding:4px;
        background-color:lightblue;
        display:flex;
        justify-content:center;
        align-items:center;
      }
    }
  }
   
`

export default Wrapper