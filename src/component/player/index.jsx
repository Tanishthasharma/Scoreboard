import React from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router-dom'

const Player = () => {

    const navigate = useNavigate();
    const start = () =>{
         navigate('/display')
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
               <option value="5 overs">5 overs</option>
               <option value="10 overs">10 overs</option>
               <option value="15 overs">15 overs</option>
               <option value="20 overs">20 overs</option>
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
