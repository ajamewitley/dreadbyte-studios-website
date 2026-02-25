import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="footer">
      <span>© {year} Dreadbyte Studios. All rights reserved.</span>
      <div className="footer-links">
        <a href="https://dreadbyte-studios.itch.io/the-last-brethren" target="_blank" rel="noopener noreferrer">
          The Last Brethren on itch.io
        </a>
        <a href="https://dreadbyte-studios.itch.io/zanni" target="_blank" rel="noopener noreferrer">
          Zanni on itch.io
        </a>
        <Link to="/legal">Privacy &amp; Terms</Link>
      </div>
    </footer>
  )
}
