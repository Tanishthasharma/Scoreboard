import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Header} from "./component/header"
import {Display} from "./component/display"
import {Register } from './component/team_register'
import { Home } from './component/home'
import Login from './component/login'
// import {Adder}  from "./component/adder"
import Mark from "./component/mark"
import { BrowserRouter } from 'react-router-dom'
export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
      
      {/* <Routes>
        <Route path='/home' element = {<Home />} />

        <Route path="/login" element = {<Login/>} />
        <Route path="/register" element = {<Register/>} />
        <Route path="/display" element = {<Display/>} />

      </Routes> */}
      </BrowserRouter>

      

      </div>
      // {/* <Display /> */}
      // {/* <Adder /> */}
      
      //  {/* </Routes> */}
      // {/* </BrowserRouter> */}
  )
}

export default App

