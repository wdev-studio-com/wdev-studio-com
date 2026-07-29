import Home from "../components/layout/sections/Home"
import Header from "../components/layout/header"
import React from 'react'
import Sobre from "../components/layout/sections/Sobre"
import Planos from "../components/layout/sections/Planos"
import Duvidas from "../components/layout/sections/Duvidas"
import Footer from "../components/layout/footer"

function App() {

  return (
    <main className="w-full h-auto bg-[#05B2C2]">
      <Header />
      <Home id="home" />
      {/* <Sobre id="sobre" />
      <Planos id="planos" />
      <Duvidas id="duvidas" /> */}
      <Footer/>
    </main>
  )
}

export default App
