import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mercury from "./pages/Mercury/Mercury.jsx" 

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/">
          {/* <Route index element={<Home />} /> */}
          <Route path="Mercury" element={<Mercury />} />

        </Route>
      </Routes>
    </BrowserRouter>

   

    </>
  )
}

export default App
