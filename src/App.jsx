import React from 'react'
// import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import {Header} from "./component/header"
import {Display} from "./component/display"

export const App = () => {
  return (
    <div>
      <Header />
      <Display />
    </div>
  )
}

export default App

