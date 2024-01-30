import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {
  return (
    <React.Fragment>
      <HashRouter>
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </React.Fragment>
  )
}

export default App