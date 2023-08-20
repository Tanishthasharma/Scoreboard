import React, { useState } from 'react'
import Wrapper from "./style"
import { BrowserRouter } from 'react-router-dom';
// import Control from  './component/control/index.js'
 

const Display = () => {
    const[score,setScore] = useState(0);
  return (
   
    <Wrapper>
   <main>
    <div className='inner'>
    <p>
        Score : {score}
    </p>
    </div>
   </main>
   </Wrapper>

  )
}

export default Display
