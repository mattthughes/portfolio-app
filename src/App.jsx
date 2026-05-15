import React from 'react'
import "./index.css"
import NavBar from './components/NavBar'
import Home from './pages/home/Home'

const App = () => {
  return (
    <>
    <div className='bg-zinc-100 min-h-screen'>
      <NavBar/>
    <Home/>
    </div>
    
    </>
    
  )
}

export default App
