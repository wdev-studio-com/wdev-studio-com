import Home from "../components/layout/sections/Home"
import Header from "../components/layout/header"
import Sobre from "../components/layout/sections/Sobre"
import Planos from "../components/layout/sections/Planos"
import Duvidas from "../components/layout/sections/Duvidas"
import Footer from "../components/layout/footer"

function App() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Header />
      <Home id="home" />
      <Sobre id="sobre" />
      <Planos id="projetos" />
      <Duvidas id="experiencia" />
      <Footer />
    </main>
  )
}

export default App