import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Home /> */}
      <About />
      <Footer />
    </React.Fragment>
  )
}

export default App