import React from 'react'
import {Wrapper} from './style'
import { Link, NavLink } from 'react-router-dom'

export const Header = () => {
  return (
   <header>
    <Wrapper>
      <h1>ScoreBoard</h1>
      <div className='header'>
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <Link to = "/display">Display</Link>
      </div>

    </Wrapper>
   </header>
  )
}

export default Header
