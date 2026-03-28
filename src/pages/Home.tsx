import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const heroSlides = [
  {
    title: 'The Last Brethren',
    subtitle: 'Dark fantasy soulslike experience',
    description:
      'A cursed cycle of death and resurrection where every run sharpens skill, timing, and tactical mastery.',
    image: '/pics/the-last-brethren.png',
    status: 'Playable Demo',
    tags: ['PC Demo', 'Dark Fantasy'],
  },
  {
    title: 'FZ Arena',
    subtitle: 'Competitive local multiplayer shooter',
    description:
      'Fast rounds, precision gunplay, and skill-based arenas built for high-pressure competitive sessions.',
    image: '/pics/Fz Icon.png',
    status: 'Pre-alpha Build',
    tags: ['Android & iOS', 'Local Multiplayer'],
  },
  {
    title: 'Zanni',
    subtitle: 'Psychological horror survival',
    description:
      'Face distorted realities and escalating tension in a survival horror world designed for high replay value.',
    image: '/pics/zanni.png',
    status: 'Demo Available',
    tags: ['PC Demo', 'Horror Survival'],
  },
]

export function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isHeroPaused, setIsHeroPaused] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  useEffect(() => {
    if (isHeroPaused) {
      return
    }

    const slideTimer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length)
    }, 5500)

    return () => window.clearInterval(slideTimer)
  }, [isHeroPaused])

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length)
  }

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  }

  const currentSlide = heroSlides[activeSlide]

  const handleHeroTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.changedTouches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
  }

  const handleHeroTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const touch = event.changedTouches[0]
    if (touchStartX.current === null || touchStartY.current === null) {
      return
    }

    const deltaX = touch.clientX - touchStartX.current
    const deltaY = touch.clientY - touchStartY.current
    const swipeThreshold = 48

    // Only slide when horizontal intent is clear.
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold) {
      if (deltaX < 0) {
        goToNextSlide()
      } else {
        goToPreviousSlide()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  return (
    <main>
      {/* HERO SECTION */}
      <section
        className="hero-fullscreen"
        aria-label="Featured games slideshow"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        onTouchStart={handleHeroTouchStart}
        onTouchEnd={handleHeroTouchEnd}
      >
        <div className="hero-spotlight-image-wrap">
          <img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.title}
            className="hero-spotlight-image"
          />
          <div className="hero-spotlight-overlay"></div>
        </div>

        <button
          type="button"
          className="hero-slide-btn hero-slide-btn--prev"
          aria-label="Previous slide"
          onClick={goToPreviousSlide}
        >
          <span aria-hidden="true">&#10094;</span>
        </button>
        <button
          type="button"
          className="hero-slide-btn hero-slide-btn--next"
          aria-label="Next slide"
          onClick={goToNextSlide}
        >
          <span aria-hidden="true">&#10095;</span>
        </button>

        <div key={currentSlide.title} className="hero-fullscreen-content hero-content-animate">
          <div className="page-kicker">
            <span className="badge-pill pill-accent">
              <span className="badge-dot"></span>
              Featured Project
            </span>
          </div>
          <h1 className="hero-tagline">
            {currentSlide.title}
            <br />
            <span>{currentSlide.subtitle}</span>
          </h1>
          <p className="hero-body">{currentSlide.description}</p>
          <div className="hero-cta-row">
            <Link to="/games" className="btn btn-primary">Explore Our Games</Link>
            <Link to="/join" className="btn btn-outline">Join Our Team</Link>
            <Link to="/support" className="btn btn-ghost">Support Development</Link>
          </div>

          <div className="hero-bottom-row">
            <div className="hero-slide-dots" role="tablist" aria-label="Hero slides">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  className={`hero-slide-dot ${index === activeSlide ? 'is-active' : ''}`}
                  aria-label={`Go to slide ${index + 1}: ${slide.title}`}
                  aria-selected={index === activeSlide}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            <div className="hero-card-inline" aria-label={`Featured details for ${currentSlide.title}`}>
              <div className="status-pill status-pill--alpha">{currentSlide.status}</div>
              <div className="tag-row">
                <span className="tag tag-pill-accent">{currentSlide.tags[0]}</span>
                <span className="tag">{currentSlide.tags[1]}</span>
              </div>
              <Link to="/games" className="btn btn-outline">View Roadmap</Link>
            </div>
          </div>
          <div className="hero-progress" aria-hidden="true">
            <span
              key={`progress-${activeSlide}`}
              className={`hero-progress-bar ${isHeroPaused ? 'is-paused' : ''}`}
              style={{ animationDuration: '5500ms' }}
            ></span>
          </div>
        </div>
      </section>

      {/* STUDIO VISION */}
      <div className="page-shell">
        <hr className="divider" />

        <section style={{ margin: '100px 0' }}>
          <div style={{ marginBottom: '80px', textAlign: 'center', maxWidth: '720px', margin: '0 auto 80px' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>OUR PHILOSOPHY</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '20px' }}>
              Built for players who demand more
            </h2>
            <p style={{ fontSize: '18px', color: '#999', lineHeight: 1.8 }}>
              We believe in creating experiences that respect player intelligence, reward mastery, and deliver consistent quality. Every design decision is driven by clarity, fairness, and the goal of building lasting, replayable worlds.
            </p>
          </div>

          <div className="grid grid-3">
            <article className="section-card section-card--soft">
              <div className="section-card-header">
                <h3 className="section-card-title">Clarity First</h3>
              </div>
              <p className="section-card-subtitle">
                Tension comes from intentional decisions, not confusion. We design systems that are readable, responsive, and fair—the rules are always clear, even when the stakes are high.
              </p>
            </article>

            <article className="section-card section-card--soft">
              <div className="section-card-header">
                <h3 className="section-card-title">Competitive Edge</h3>
              </div>
              <p className="section-card-subtitle">
                Every game in our portfolio is built with competitive integrity as a foundation. Skill matters. Consistency matters. We respect the grind.
              </p>
            </article>

            <article className="section-card section-card--soft">
              <div className="section-card-header">
                <h3 className="section-card-title">Replayability</h3>
              </div>
              <p className="section-card-subtitle">
                Games that stand the test of time are games worth returning to. We build depth into every system, ensuring long-term engagement and mastery paths.
              </p>
            </article>
          </div>
        </section>

        <hr className="divider" />

        {/* DEVELOPMENT PROGRESS */}
        <section className="progress-section">
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>WHAT'S NEXT</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Active Development Roadmap
            </h2>
          </div>

          <div className="progress-track">
            <div className="progress-item">
              <div className="progress-label">FZ Arena Core Alpha</div>
              <div>
                <div className="progress-description">
                  Finalizing core gameplay loops, balance systems, and netcode for local multiplayer. Building the competitive foundation that will carry us into live service.
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '76%' }}></div>
                </div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '13px', color: '#ff4655', fontWeight: '700' }}>76%</div>
            </div>

            <div className="progress-item">
              <div className="progress-label">Content Expansion Pass</div>
              <div>
                <div className="progress-description">
                  New environments, cosmetics, and playable mechanics. Building the depth that keeps players engaged month after month.
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '54%' }}></div>
                </div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '13px', color: '#ff4655', fontWeight: '700' }}>54%</div>
            </div>

            <div className="progress-item">
              <div className="progress-label">Community & Live Ops</div>
              <div>
                <div className="progress-description">
                  Building our competitive community and live operations pipelines. Tournaments, seasons, and seasonal content are coming.
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '38%' }}></div>
                </div>
              </div>
              <div style={{ textAlign: 'right', fontSize: '13px', color: '#ff4655', fontWeight: '700' }}>38%</div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* LATEST NEWS */}
        <section style={{ margin: '100px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>STUDIO UPDATES</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Latest News & Dev Insights
            </h2>
          </div>

          <div className="news-grid">
            <article className="news-card">
              <div className="news-image">
                <img src="/pics/Fz Icon.png" alt="News" />
              </div>
              <div className="news-content">
                <div className="news-date">February 2026</div>
                <h3 className="news-title">FZ Arena Pre-Alpha Now Playable</h3>
                <p className="news-excerpt">
                  Our flagship competitive shooter enters pre-alpha with core gameplay fully playable. Join our Itch.io community for early access.
                </p>
                <div className="news-cta">Read More →</div>
              </div>
            </article>

            <article className="news-card">
              <div className="news-image">
                <img src="/pics/the-last-brethren.png" alt="News" />
              </div>
              <div className="news-content">
                <div className="news-date">January 2026</div>
                <h3 className="news-title">Expanding Our Studio Team</h3>
                <p className="news-excerpt">
                  We're hiring Senior Engineers, 3D Artists, and Community Managers to scale our operations. Remote-friendly roles across all disciplines.
                </p>
                <div className="news-cta">View Openings →</div>
              </div>
            </article>

            <article className="news-card">
              <div className="news-image">
                <img src="/pics/zanni.png" alt="News" />
              </div>
              <div className="news-content">
                <div className="news-date">December 2025</div>
                <h3 className="news-title">Zanni Demo Reaches 5K Players</h3>
                <p className="news-excerpt">
                  Our psychological horror survival game has engaged 5,000+ players on itch.io with overwhelmingly positive feedback.
                </p>
                <div className="news-cta">View Results →</div>
              </div>
            </article>
          </div>
        </section>

        <hr className="divider" />

        {/* SHOWCASE */}
        <section style={{ margin: '100px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>OUR PORTFOLIO</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Complete Game Showcase
            </h2>
          </div>

          <div className="showcase-grid">
            <div className="showcase-card">
              <img src="/pics/the-last-brethren.png" alt="The Last Brethren" />
            </div>
            <div className="showcase-card">
              <img src="/pics/zanni.png" alt="Zanni" />
            </div>
            <div className="showcase-card">
              <img src="/pics/Fz Icon.png" alt="FZ Arena" />
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: '60px' }}>
            <Link to="/games" className="btn btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </section>

        <hr className="divider" />

        {/* COMMUNITY CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Join Our Community</h2>
            <p>
              Be the first to know about new releases, exclusive previews, and tournament announcements. Connect with fellow players and shape the future of our games.
            </p>
            <div className="cta-buttons">
              <a href="https://dreadbyte-studios.itch.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Play on itch.io
              </a>
              <Link to="/support" className="btn btn-outline">
                Support Development
              </Link>
            </div>
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter-section">
          <h3>Stay in the Loop</h3>
          <p>
            Subscribe for development updates, early access signups, and exclusive studio insights. No spam, just quality announcements.
          </p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">
              {submitted ? '✓ Subscribed' : 'Subscribe'}
            </button>
          </form>
        </section>

        {/* FINAL STUDIO INFO */}
        <section style={{ margin: '100px 0' }}>
          <div className="grid grid-3">
            <article className="section-card">
              <div className="section-card-header">
                <h3 className="section-card-title">For Players</h3>
              </div>
              <p className="section-card-subtitle">
                Explore our games. Join our community. Play the demos. We're building experiences worth your time.
              </p>
              <div className="section-card-footer">
                <Link to="/games" className="btn btn-outline">
                  Browse Games
                </Link>
              </div>
            </article>

            <article className="section-card">
              <div className="section-card-header">
                <h3 className="section-card-title">For Talent</h3>
              </div>
              <p className="section-card-subtitle">
                We're looking for passionate creators. Design, engineering, art, sound, marketing — bring your craft to a focused team.
              </p>
              <div className="section-card-footer">
                <Link to="/join" className="btn btn-outline">
                  View Roles
                </Link>
              </div>
            </article>

            <article className="section-card">
              <div className="section-card-header">
                <h3 className="section-card-title">For Backers</h3>
              </div>
              <p className="section-card-subtitle">
                Believe in what we're building? Support our studio. Every contribution accelerates our roadmap.
              </p>
              <div className="section-card-footer">
                <Link to="/support" className="btn btn-outline">
                  Support Us
                </Link>
              </div>
            </article>
          </div>
        </section>
      </div>
    </main>
  )
}
