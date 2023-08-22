import React from 'react'
import { useNavigate } from 'react-router-dom'
import Wrapper from './style'

const Enter = () => {
    const navigate =  useNavigate();
    const register =() =>{
        navigate ('/register')
    }
    const login =() =>{
        navigate ('/login')
    }
  return (
    <Wrapper>
      
      <main>
        <input type='button'  value='Register' onClick={register} />
        <input type='button'  value='Login'  onClick={login} />
       </main>
    </Wrapper>
  )
}

export default Enter
