import React from 'react'
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import {Header} from "./component/header"
import {Display} from "./component/display"
// import {Adder}  from "./component/adder"
import Mark from "./component/mark"
export const App = () => {
  return (
    // <BrowserRouter>
    // <Routes>
    <>
      <Header />
      <Display />
      {/* <Adder /> */}
      </>
      // </Routes>
      // </BrowserRouter>
  )
}

export default App

