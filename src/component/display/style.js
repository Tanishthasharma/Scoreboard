// import React from 'react'
import { styled } from 'styled-components'

export const Wrapper = styled.section`
// background-color:beige;
background-image: linear-gradient(to bottom right,blanchedalmond ,chocolate);
// background-image: linear-gradient(to bottom right, rgba(200,200,200,0), rgba(0,255,200,5));
text-align:center;
padding:10px 10px;
align-item:center;
 justify-content:space-evenly;

.run{
    background-color:rosybrown;
    height:250px;
    width:60%;
    padding:70px 20px;
    margin:50px auto;
    // margin-left:auto;
    // margin-top:100px;
    border-radius: 50px;
    box-shadow: 5px 5px gray;
}

.run input[type='button']{
    border: 2px ;
    background-color:lemonchiffon;
    color:peru;
    width:30%;
    //margin:10px auto;
    //  margin-right:5px;
      margin-top:10px;
    padding:15px 0px;
    justify-content:space-between;
    border-radius: 20px;
    box-shadow: 3px 3px gray;
   
    // transition-timing-function: ease; 
    // transition: width 2s, height 4s;
}
// .run input[type='button']:hover{
//     width:3px;
//     height:1px;
// .run{
//     background-color:rosybrown;
//     height:250px;
//     width:400px;
//     padding:70px 20px;
//     margin-left:530px;
//     margin-top:100px;
//     border-radius: 50px;
//     box-shadow: 5px 5px gray;
// }

// .run input[type='button']{
//     border: 2px ;
//     background-color:lemonchiffon;
//     color:peru;
//     width:120px;
//     margin-right:5px;
//     margin-top:10px;
//     padding:15px 10px;
//     justify-content:space-between;
//     border-radius: 20px;
//     box-shadow: 3px 3px gray;
   
//     // transition-timing-function: ease; 
//     // transition: width 2s, height 4s;
// }
// // .run input[type='button']:hover{
// //     width:3px;
// //     height:1px;
// // }

.score-counter {
    text-align: center;
    padding: 20px;
    background-color: #f5f5f5;
  }
  
  .score-counter h1 {
    font-size: 2rem;
    margin-bottom: 10px;
  }
  
  .score-counter h2 {
    font-size: 1.5rem;
    margin-bottom: 5px;
  }
  
  .score-counter p {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .run {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .run .inner{
    diplay : flex;
    max-width: 80%
  }
  
  .run input[type='button'] {
    //max-widht : 50px;
    margin: 5px;
    padding: 10px 30px;
    font-size: 1rem;
    background-color: #3498db;
    border: none;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    border-radius: 5px;
  }
  
  .run input[type='button']:hover {
    background-color: #2980b9;
  }
  
  /* Add more media queries for responsiveness */
  @media (max-width: 768px) {
    .score-counter h1 {
      font-size: 1.5rem;
    }
  
    .score-counter h2 {
      font-size: 1.2rem;
    }
  
    .run input[type='button'] {
      font-size: 0.9rem;
    }
  }
  
`
 

export default Wrapper
