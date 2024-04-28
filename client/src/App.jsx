import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import Home from './Pages/Home'
import About from './Pages/About'
import Projects from './Pages/Projects'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path='Projects' element={<Projects />} />
        <Route path='SignIn' element= {<SignIn />} />
        <Route path='SignUp' element= {<SignUp />} />
        
        

      </Routes>
    </BrowserRouter>
  )
}
