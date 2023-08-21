// display

// import React from 'react'
// import { useState } from 'react';
// // import { Adder}   from './component/adder'
// import {Wrapper} from './style'
// import Mark from '../mark';



// export const Display = () => {
    
//     const[wicket, setWickets ] = useState(0);
//     // const[overs,setOvers] = useState(0);
//     // const [past, setPast] = useState([]);
//     // const [present, setPresent] = useState(null);
//     const[balls, setBalls] = useState(0);

//     const add0 = () =>{
//       setScore(score + 0)
//       setBalls(balls + 1)
//      }
//      const add1 = () =>{
//       setScore(score + 1)
//       setBalls(balls + 1)
//      }
//      const add2 = () =>{
//       setScore(score + 2)
//       setBalls(balls + 1)
//      }
//      const add3 = () =>{
//       setScore(score + 3)
//       setBalls(balls + 1)
//      }
//      const add4 = () =>{
//       setScore(score + 4)
//       setBalls(balls + 1)
//      }
//      const add6 = () =>{
//       setScore(score + 6)
//       setBalls(balls + 1)
//      }

//      const out = () =>{
//         setWickets(wicket + 1)
//         }

//         const wide = () =>{
//           setBalls(balls - 1);
//         }
      
//     //  const undo = () =>{
//     //   if(past.length == 0) return;

//     //   const newPast = [...past];
//     //   const newPresent = newPast.pop();

//     //   setPast(newPast);
//     //   setPresent(newPresent);
//     //  }
 
//   return (
//     <>
//       {
//     <Wrapper>
//         <h1>{score}/{wicket}</h1>
//       <h2>9.8 overs</h2>
//       <p>Balls:{balls}</p>
//       <div className='run'>
//         {
//         <div>
//             <input type='button' value="0" onClick={add0} />
//               <input type='button' value="1" onClick={add1} />
//                <input type='button' value="2" onClick={add2} />
//                <input type='button' value="3" onClick={add3} />
//               <input type='button' value="4" onClick={add4} />
//             <input type='button' value="6" onClick={add6} />
//             <input type='button' value="Wide" onClick={wide} />
//               <input type='button' value="No Ball"  />
//             <input type='button' value="Out"  onClick={out} /> */}
//             <input type='button' value="Undo"  />
//       </div>
//         }
//       </div> 
//     </Wrapper>
//     }
//     </>
//   )
// }

// export default Display


// import React from 'react'
// import { useState } from 'react';
// // import { Adder}   from './component/adder'
// import {Wrapper} from './style'
// import Mark from "../mark/index.jsx"
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

// export const Display = () => {
//     const[score, setScore ] = useState(0);
//     const[wicket, setWickets ] = useState(0);
//     // const[overs,setOvers] = useState(0);
//     // const [past, setPast] = useState([]);
//     // const [present, setPresent] = useState(null);
//     const[balls, setBalls] = useState(0);
//     // const navigate = useNavigate();
//     const add = (run) =>{
//       switch (run){
//         case 0:
//           return setScore(score + run);
//         case 1:
//           return setScore(score + run);
//         case 2:
//           return setScore(score + run);
//         case 3:
//           return setScore(score + run);
//         case 4:
//           return setScore(score + run);
//         case 6:
//           return setScore(score + run);  
//       }
      

//     // }
// //  const dispatch = useDispatch()
// // const add = () =>{
// // dispatch({
// //   type: "1" ,
// //   payload: {score}
// // })
// // }
   
// // const dispatch = useDispatch()


//   return (
//     // <>
//     //   {
//         <BrowserRouter>
//         {
//     <Wrapper>
      
//         <h1>{score}/{wicket}</h1>
//       <h2>9.8 overs</h2>
//       <p>Balls:{balls}</p>
//       <div className='run'>
         
//          {
//         <div className='inner'>
//            {/* <Routes> */}
//             {/* <input type='button' value="0" onClick={() => add(0)} /> */}
//               {/* <input type='button' value="1"  path='/mark' element={<Mark run = {1}/>}  />                                   */}
//                {/* <input type='button' value="2" onClick={() => add(2)} />
//                <input type='button' value="3" onClick={() => add(3)} />
//               <input type='button' value="4" onClick={() => add(4)} />
//             <input type='button' value="6" onClick={() => add(6)} />
//             {/* <input type='button' value="Wide" onClick={wide} />
//               <input type='button' value="No Ball"  />
//             <input type='button' value="Out"  onClick={out} /> */}
//             {/* <input type='button' value="Undo"  /> */} 
//             {/* <Route path='./component/mark' element={<><input type='button'  value="1"/><Mark run = "1"/></>} /> */}
//             {/* </Routes> */}
//             {/* <input type='button' value="1"  onClick={() => <Mark score={1}/>}/> */}
//             {/* <input type='button' value="1"  onClick={() => navigate("/mark")}/> */}

//             {/* <input type='button'   placeholder='1' onClick={add} /> */}
//             <input type='button'  value='2'  placeholder='2' />
//       </div>
//         } 
        
//       </div>
 
//     </Wrapper>
//       }
//     </BrowserRouter>
//     // }
//     // </>
//   )
// }

// export default Display

// import { useState } from "react"

// const Display = () => {
//   const[score,setScore] = useState(0);
//   const[wickets,setWickets] = useState(0);
//   return (
//     <>
//     <h1>Team : {score}/{wickets}</h1>
//       <p> Overs :  </p>
//     </>
//   )
// }

// export default Display




//Adder

// import React, { useState } from 'react'
// // import {useNavigate} from 'react-router' ; 
// // import {useNavigate} from 'react-router-dom';

// export const Adder = () => {
// const[score,setScore] = useState(0);
// // const navigate = useNavigate()

//  const add1 = () =>{
//   setScore(score+ 1)
//  }

// //  navigate("/display")
//   return (
//     <div className='run'>
//       {
//      <input type='button' value="1" onClick={add1} />
//     }
//     </div>
//   )
// }

// export default Adder


//mark
// import  { useState } from 'react'
 
// const Mark = ({add}) => {
//     const[score, setScore ] = useState(0);
//         switch(add) {
//           case 1:
//           //  <button onClick = {() => setScore(score + 1)} ></button>
//           //   break;
//             const add1 = () =>{
//                     setScore(score + 1)
//                     // setBalls(balls + 1)
//                    }
         
//   default:return {score};
//      }
    
// }

// export default Mark





// // import  { useState } from 'react'

// // const initialState = {score:[]}
// const mark = (state = initialState,action) => {
//   const[score,setScore] = useState(0);
//   switch(action.type){
//   case "1":
//   return {
//      ...state,
//      score:[...state.score,action.payload]
//   }
//   default : return state;
// }
// }

// export default  mark

//display ka style.js

// // import React from 'react'
// import { styled } from 'styled-components'

// export const Wrapper = styled.section`
// // background-color:beige;
// background-image: linear-gradient(to bottom right,blanchedalmond ,chocolate);
// // background-image: linear-gradient(to bottom right, rgba(200,200,200,0), rgba(0,255,200,5));
// text-align:center;
// padding:10px 10px;
// align-item:center;
//  justify-content:space-evenly;

// .run{
//     background-color:rosybrown;
//     height:250px;
//     width:60%;
//     padding:70px 20px;
//     margin:50px auto;
//     // margin-left:auto;
//     // margin-top:100px;
//     border-radius: 50px;
//     box-shadow: 5px 5px gray;
// }

// .run input[type='button']{
//     border: 2px ;
//     background-color:lemonchiffon;
//     color:peru;
//     width:30%;
//     //margin:10px auto;
//     //  margin-right:5px;
//       margin-top:10px;
//     padding:15px 0px;
//     justify-content:space-between;
//     border-radius: 20px;
//     box-shadow: 3px 3px gray;
   
//     // transition-timing-function: ease; 
//     // transition: width 2s, height 4s;
// }
// // .run input[type='button']:hover{
// //     width:3px;
// //     height:1px;
// // .run{
// //     background-color:rosybrown;
// //     height:250px;
// //     width:400px;
// //     padding:70px 20px;
// //     margin-left:530px;
// //     margin-top:100px;
// //     border-radius: 50px;
// //     box-shadow: 5px 5px gray;
// // }

// // .run input[type='button']{
// //     border: 2px ;
// //     background-color:lemonchiffon;
// //     color:peru;
// //     width:120px;
// //     margin-right:5px;
// //     margin-top:10px;
// //     padding:15px 10px;
// //     justify-content:space-between;
// //     border-radius: 20px;
// //     box-shadow: 3px 3px gray;
   
// //     // transition-timing-function: ease; 
// //     // transition: width 2s, height 4s;
// // }
// // // .run input[type='button']:hover{
// // //     width:3px;
// // //     height:1px;
// // // }

// .score-counter {
//     text-align: center;
//     padding: 20px;
//     background-color: #f5f5f5;
//   }
  
//   .score-counter h1 {
//     font-size: 2rem;
//     margin-bottom: 10px;
//   }
  
//   .score-counter h2 {
//     font-size: 1.5rem;
//     margin-bottom: 5px;
//   }
  
//   .score-counter p {
//     font-size: 1rem;
//     margin-bottom: 20px;
//   }
  
//   .run {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//   }
//   .run .inner{
//     diplay : flex;
//     max-width: 80%
//   }
  
//   .run input[type='button'] {
//     //max-widht : 50px;
//     margin: 5px;
//     padding: 10px 30px;
//     font-size: 1rem;
//     background-color: #3498db;
//     border: none;
//     color: white;
//     cursor: pointer;
//     transition: background-color 0.3s ease-in-out;
//     border-radius: 5px;
//   }
  
//   .run input[type='button']:hover {
//     background-color: #2980b9;
//   }
  
//   /* Add more media queries for responsiveness */
//   @media (max-width: 768px) {
//     .score-counter h1 {
//       font-size: 1.5rem;
//     }
  
//     .score-counter h2 {
//       font-size: 1.2rem;
//     }
  
//     .run input[type='button'] {
//       font-size: 0.9rem;
//     }
//   }
  
// `
 

// export default Wrapper

