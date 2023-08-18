import  { useState } from 'react'
 
const Mark = (run) => {
    const[score, setScore ] = useState(0);
        switch(run) {
          case 1:
            return setScore(score + run);
            
         
            
          
            default:return {score};
     }
    
       
  return (
    <div>
      
    </div>
  )
}

export default Mark
