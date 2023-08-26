import React from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from './style'

 const Home = () => {
     const navigate = useNavigate();
  const  play = () =>{
        navigate('/login')
  }
  

  return (
    <Wrapper>
      <main>
        
        <input type='button' value='PLAY'  onClick={play}/>
        
      </main>
      </Wrapper>
  )
}

export default Home;
