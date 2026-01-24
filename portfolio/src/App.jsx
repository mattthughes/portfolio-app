import React from 'react'
import "./index.css"
import NavBar from './components/NavBar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
    
  )
}

export default App
