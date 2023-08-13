import React from 'react'
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Header} from "./component/header"
import {Display} from "./component/display"
// import {Adder}  from "./component/adder"

export const App = () => {
  return (
    <div>
      <Header />
      <Display />
      {/* <Adder /> */}
    </div>
  )
}

export default App

