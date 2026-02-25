import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsExpanded(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <span className="nav-toggle-icon" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        <nav className={`nav-links ${isExpanded ? 'is-open' : ''}`} aria-label="Primary navigation">
          <Link to="/games" className="nav-link">Games</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/join" className="nav-link">Join the Studio</Link>
          <Link to="/support" className="nav-link">Support</Link>
          <Link to="/invest" className="nav-link">Invest</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/legal" className="nav-link">Legal</Link>
        </nav>
        <div className="nav-cta">
          <Link to="/join" className="btn btn-ghost">Join the team</Link>
          <Link to="/support" className="btn btn-primary">Support development</Link>
        </div>
      </div>
    </header>
  )
}
