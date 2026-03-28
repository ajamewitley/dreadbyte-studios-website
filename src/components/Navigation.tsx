import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsExpanded(false)
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsExpanded(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!isExpanded) {
      return
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsExpanded(false)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleEscape)
    }
  }, [isExpanded])

  const handleNavClose = () => setIsExpanded(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="nav-left">
          <Link to="/" className="brand" aria-label="Dreadbyte Studios home">
            <img src="/pics/Dreadbyte Studios Logo.jpeg" alt="Dreadbyte Studios" className="brand-logo" />
            <div>
              <div className="brand-text-main">Dreadbyte Studios</div>
              <div className="brand-text-sub">Competitive game experiences</div>
            </div>
          </Link>
          <button
            className="nav-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={isExpanded}
            aria-controls="primary-nav"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="nav-toggle-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <nav id="primary-nav" className={`nav-links ${isExpanded ? 'is-open' : ''}`} aria-label="Primary navigation">
          <Link to="/games" className="nav-link" onClick={handleNavClose}>Games</Link>
          <Link to="/about" className="nav-link" onClick={handleNavClose}>About</Link>
          <Link to="/join" className="nav-link" onClick={handleNavClose}>Join the Studio</Link>
          <Link to="/support" className="nav-link" onClick={handleNavClose}>Support</Link>
          <Link to="/invest" className="nav-link" onClick={handleNavClose}>Invest</Link>
          <Link to="/contact" className="nav-link" onClick={handleNavClose}>Contact</Link>
          <Link to="/legal" className="nav-link" onClick={handleNavClose}>Legal</Link>
        </nav>
        {isExpanded && <button type="button" className="nav-backdrop" aria-label="Close navigation menu" onClick={handleNavClose}></button>}
        <div className="nav-cta">
          <Link to="/join" className="btn btn-ghost">Join the team</Link>
          <Link to="/support" className="btn btn-primary">Support development</Link>
        </div>
      </div>
    </header>
  )
}
