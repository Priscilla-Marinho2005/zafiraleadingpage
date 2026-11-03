import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projeto from "./components/Projeto";
import Localizacao from "./components/Localizacao";
import Lazer from "./components/Lazer";
import Plantas from "./components/Plantas";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import ScrollProgressBar from "./components/ScrollProgressBar";

function App() {
  return (
    <>
      <Nav />
      <ScrollProgressBar />
      <main>
        <Hero />
        <Projeto />
        <Localizacao />
        <Lazer />
        <Plantas />
        <Cta />
      </main>
      <Footer />
    </>
  )
}

export default App
