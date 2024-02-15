import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar'
import Header2 from './Components/Header2'
import Info from './Components/Info'
import PricingTable from './Components/PricingTable'
import PricingTable2 from './Components/PricingTable2'
import CardWithImage from './Components/CardWithImage'
import Footer from './Components/Footer'
import FAQ from './Components/FAQ'
import Home from './Pages/Home'
import FAQPage from './Pages/FAQPage'
import AboutUs from './Pages/AboutUs'
import Plans from './Pages/Plans'
 
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path ="/" element={<Home />} />
      <Route path ="/AboutUs" element={<AboutUs />} />
      <Route path ="/FAQPage" element={<FAQPage />} />
      <Route path ="/Plans" element={<Plans />} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
