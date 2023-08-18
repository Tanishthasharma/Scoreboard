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


import React from 'react'
import { useState } from 'react';
// import { Adder}   from './component/adder'
import {Wrapper} from './style'
import Mark from "../mark/index.js"
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';

export const Display = () => {
    const[score, setScore ] = useState(0);
    const[wicket, setWickets ] = useState(0);
    // const[overs,setOvers] = useState(0);
    // const [past, setPast] = useState([]);
    // const [present, setPresent] = useState(null);
    const[balls, setBalls] = useState(0);
    // const navigate = useNavigate();
    // const add = (run) =>{
    //   switch (run){
    //     case 0:
    //       return setScore(score + run);
    //     case 1:
    //       return setScore(score + run);
    //     case 2:
    //       return setScore(score + run);
    //     case 3:
    //       return setScore(score + run);
    //     case 4:
    //       return setScore(score + run);
    //     case 6:
    //       return setScore(score + run);  
    //   }
      

    // }
//  const dispatch = useDispatch()
// const add = () =>{
// dispatch({
//   type: "1" ,
//   payload: {score}
// })
// }
   
const dispatch = useDispatch


  return (
    // <>
    //   {
        <BrowserRouter>
        {
    <Wrapper>
      
        <h1>{score}/{wicket}</h1>
      <h2>9.8 overs</h2>
      <p>Balls:{balls}</p>
      <div className='run'>
         
         {
        <div className='inner'>
           {/* <Routes> */}
            {/* <input type='button' value="0" onClick={() => add(0)} /> */}
              {/* <input type='button' value="1"  path='/mark' element={<Mark run = {1}/>}  />                                   */}
               {/* <input type='button' value="2" onClick={() => add(2)} />
               <input type='button' value="3" onClick={() => add(3)} />
              <input type='button' value="4" onClick={() => add(4)} />
            <input type='button' value="6" onClick={() => add(6)} />
            {/* <input type='button' value="Wide" onClick={wide} />
              <input type='button' value="No Ball"  />
            <input type='button' value="Out"  onClick={out} /> */}
            {/* <input type='button' value="Undo"  /> */} 
            {/* <Route path='./component/mark' element={<><input type='button'  value="1"/><Mark run = "1"/></>} /> */}
            {/* </Routes> */}
            {/* <input type='button' value="1"  onClick={() => <Mark score={1}/>}/> */}
            {/* <input type='button' value="1"  onClick={() => navigate("/mark")}/> */}

            <input type='button'   placeholder='1' onClick={add} />
      </div>
        } 
        
      </div>
 
    </Wrapper>
      }
    </BrowserRouter>
    // }
    // </>
  )
}

export default Display
