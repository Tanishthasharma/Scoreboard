import React from 'react'
import Wrapper from "./style"

const Widepop = ({inputValue ,onClose, onInputChange}) => {
  return (
    <Wrapper>
    <div classname="popup">
      <div className='popup-content'>
        <p>Enter score</p>
        <input
          type="text"
          value={inputValue}
          onChange={(e) =>onInputChange(e.target.value)}
          placeholder="Type here..."
        />
        <button onClick={onClose}>Set</button>
      </div>
    </div>
    </Wrapper>
  )
}

export default Widepop
