import React from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from './style'

export const Home = () => {
     const navigate = useNavigate();
  const  play = () =>{
        navigate('/enter')
  }
  

  return (
    <Wrapper>
      <header>
       <h1>SCOREZZ</h1> 
      </header>
      <main>
        <input type='button' value='PLAY'  onClick={play}/>
      </main>
      <footer>
       <p> &copy;Copyright 2023 alrights reserved to SCOREZZ</p>
      </footer>
      </Wrapper>
  )
}

// export default Home;
