import React from 'react'
import Wrapper from './style'
import { useNavigate } from 'react-router-dom'

const Player = ({overs,setOvers,setTeam1Name,team1Name,team2Name,setTeam2Name}) => {

    const navigate = useNavigate();
    const start = () =>{
         navigate('/display')
    }

    
   
  return (
    <Wrapper>
    <div className='Team'>
        
        <form>
        <div>
               <label>Overs:</label>
              <select name='overs' id='overs'  value={overs} onChange={(e) => setOvers(e.target.value)}>
              <option disabled selected>...select overs..</option>
               <option value="5.0 ">5 overs</option>
               <option value="10.0 ">10 overs</option>
               <option value="15.0 ">15 overs</option>
               <option value="20.0 ">20 overs</option>
              </select>
          </div>
           
             <div>
                 <label >Team 1:</label>
                 <input type='text'  placeholder='enter team name' value={team1Name} onChange={(e) => setTeam1Name(e.target.value)} />
            </div>
           </form>
        
      <form>
          
            
            <div>
                 <label >Team 2:</label>
                 <input type='text'  placeholder='enter team name' value={team2Name} onChange={(e) => setTeam2Name(e.target.value)}/>
            </div>
            
           
            
          </form>
       
    </div>
   

    <div className='lets'>
    <input type='button' value={"Lets Play"}  onClick={start}  disabled={!(team1Name,team2Name)}/>
    </div>

    </Wrapper>
  )
}

export default Player
