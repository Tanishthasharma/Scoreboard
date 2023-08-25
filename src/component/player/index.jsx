import React from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router-dom'

const Player = ({setBalls , setOvers}) => {

    const navigate = useNavigate();
    const start = () =>{
         navigate('/display')
         

    }
    const totalOvers = (e) =>{
     const value = e.target.value;
     switch(value) {
          case "5.0":
          case "10.0":
          case "15.0":
          case "20.0":          
     
     //  setBalls(balls => value * 6)
      setOvers(overs => value)
    }
}
   
  return (
    <Wrapper>
    <div className='Team'>
        <div className='Team1'>
        <form>
        <div>
               <label>Overs:</label>
              <select name='overs' id='overs'>
              <option disabled selected>...select overs..</option>
               <option value="5.0" onSelect={totalOvers}>5 overs</option>
               <option value="10.0">10 overs</option>
               <option value="15">15 overs</option>
               <option value="20">20 overs</option>
              </select>
             
          </div>
           
             <div>
                 <label >Team 1:</label>
                 <input type='text' placeholder='enter team name'  />
            </div>
            {/* <div>
                 <label >Captain name:</label>
                 <input type='text' placeholder='enter captain name' />
            </div> */}
           
           {/* <div>
            <label>Enter member:</label>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            </div> */}
           </form>
        </div>

        
        {/* <div className='Team2'> */}
        <form>
          
            
            <div>
                 <label >Team 2:</label>
                 <input type='text' placeholder='enter team name' />
            </div>
            {/* <div>
                 <label >Captain name:</label>
                 <input type='text' placeholder='enter captain name' />
            </div> */}
           
           {/* <div>
            <label>Enter member:</label>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            <div className='member'>
            <input type='text' placeholder='enter member name' />
            <input type='text' placeholder='enter contact no.' />
            </div>
            </div> */}
          </form>
        {/* </div> */}
    </div>
   

    <div className='lets'>
    <input type='button' value={"Lets Play"}  onClick={start} />
    </div>

    </Wrapper>
  )
}

export default Player
