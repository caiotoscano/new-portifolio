import Navbar from "./components/Navbar.jsx";
import Habilidades from "./components/Habilidades.jsx";
import Hero from "./components/Hero.jsx";
import Projetos from "./components/Projetos.jsx";
import SobreMim from "./components/SobreMim.jsx";
import Contato from "./components/Contato.jsx";
import Footer from "./components/Footer.jsx"
function App() {
  return (
    <>
    <Navbar />
    <main>
      <Hero />
      <SobreMim />
      <Habilidades />
      <Projetos />
      <Contato />
    </main>
    <Footer />
    </>
  )
}

export default App;