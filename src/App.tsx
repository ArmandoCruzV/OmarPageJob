import { Navbar } from './Nav';
import { About } from './pages/About';
import { Skills } from './pages/Skills';
import { Services } from './pages/Services';
import { ContactMe } from './pages/ContactMe';
import { Projects } from './pages/Projects';
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Services />
      <Projects />
      <ContactMe />
    </>
  )
}

export default App
