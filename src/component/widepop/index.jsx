import React from 'react'
import Wrapper from "./style"
import { useEffect } from 'react';

const Widepop = ({children, handleClose,setScore}) => {

  useEffect(() => {
    
    const handleOutsideClick = (e) => {
      if (e.target === e.currentTarget) {
        handleClose();
      }
      
    };
    
    window.addEventListener('mousedown', handleOutsideClick);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleClose]);

   const updateScore =(e) =>{
       const value = e.target.value
       switch(value){
          case "0":
          case "1":
          case "2":
          case "3":
         case "4":
         case "5":
        case "6":
          setScore(score => score + parseInt(value))
          
          handleClose();
          
       }
   }

  return  (
    <Wrapper>
        <div className="popup">
      <div className="popup-inner">
        <input type='button' value={3} onClick={updateScore}/>
        <input type='button' value={5} onClick={updateScore}/>
        <input type='button' value={2} onClick={updateScore}/>
        <input type='button' value={6} onClick={updateScore}/>
        <input type='button' value={4} onClick={updateScore}/>
        <input type='button' value={1} onClick={updateScore}/>
        <input type='button' value={0} onClick={updateScore}/>
        {children}
      </div>
    </div>

    </Wrapper>
    )
  
}

export default Widepop 
