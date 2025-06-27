import React from 'react'
import Nav from './components/Nav'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
import Waiting from './components/Waiting'
import Count from './components/Count'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Cards />
      <Waiting />
      {/* <Count /> */}
      <Footer />
    </>
  )
}

export default App