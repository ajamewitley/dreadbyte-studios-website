import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Games } from './pages/Games'
import { Join } from './pages/Join'
import { Support } from './pages/Support'
import { Contact } from './pages/Contact'
import { Invest } from './pages/Invest'
import { Legal } from './pages/Legal'

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/join" element={<Join />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/legal" element={<Legal />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
