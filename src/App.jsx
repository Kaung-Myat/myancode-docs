import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Learn from './pages/Learn.jsx'
import About from './pages/About.jsx'
import Download from './pages/Download.jsx'
import Docs from './pages/Docs.jsx'
import Contribute from './pages/Contribute.jsx'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname.split('/')[1]} className="flex-1 page-enter">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/learn/:slug" element={<Learn />} />
          <Route path="/about" element={<About />} />
          <Route path="/download" element={<Download />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/contribute" element={<Contribute />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
