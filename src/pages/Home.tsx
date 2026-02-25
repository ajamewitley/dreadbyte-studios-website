import { Link } from 'react-router-dom'
import { useState } from 'react'

export function Home() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <main>
      {/* HERO SECTION */}
      <div className="page-shell">
        <section className="hero-layout">
          <div className="hero-copy">
            <div className="page-kicker">
              <span className="badge-pill pill-accent">
                <span className="badge-dot"></span>
                Independent Studio, Global Ambition
              </span>
            </div>
            <h1 className="hero-tagline">
              Dark worlds.<br />
              <span>High-stakes competition.</span>
            </h1>
            <p className="hero-body">
              Dreadbyte Studios is an independent video game development studio crafting dark, atmospheric experiences where every decision matters. Our portfolio spans dark fantasy, survival horror, and competitive arenas — united by a singular focus: clarity, tension, and mastery. We build games for players who demand depth, not compromise.
            </p>
            <div className="hero-cta-row">
              <Link to="/games" className="btn btn-primary">Explore Our Games</Link>
              <Link to="/join" className="btn btn-outline">Join Our Team</Link>
              <Link to="/support" className="btn btn-ghost">Support Development</Link>
            </div>
            <div className="hero-meta-row">
              <span><span className="hero-meta-label">Studio Focus</span> · Dark fantasy, survival, competitive shooter</span>
              <span><span className="hero-meta-label">Development Stage</span> · Launch-ready portfolio & expansion</span>
              <span><span className="hero-meta-label">Structure</span> · Remote-first, distributed team</span>
            </div>
          </div>

          <aside className="hero-game-card" aria-label="Featured project FZ Arena">
            <div className="hero-game-header">
              <div>
                <div className="hero-game-title">FZ Arena</div>
                <div className="hero-game-status">Competitive local multiplayer shooter</div>
              </div>
              <div className="status-pill status-pill--alpha">Pre-alpha Build</div>
            </div>
            <div className="hero-game-art">
              <div className="hero-game-art-main">
                <img src="/pics/Fz Icon.png" alt="FZ Arena" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div className="hero-game-footer">
              <p className="hero-game-caption">
                Intense, skill-based competitive gameplay. Advanced ballistics, responsive controls, and clear sight lines for high-pressure arenas.
              </p>
              <div className="hero-game-tags">
                <div className="tag-row">
                  <span className="tag tag-pill-accent">Android & iOS</span>
                  <span className="tag">Local Multiplayer</span>
                </div>
                <Link to="/games" className="btn btn-outline" style={{ paddingInline: '14px' }}>
                  View Roadmap
                </Link>
              </div>
            </div>
          </aside>
        </section>
      </div>

      {/* FEATURED SPOTLIGHT */}
      <section className="featured-section">
        <div className="featured-content">
          <div>
            <h2>The Last Brethren</h2>
            <p>
              Step into a cursed cycle of death and resurrection. Warriors awaken repeatedly in a dark fantasy world where only mastery of systems can break the curse. Every encounter teaches, every death refines. Built on principles of clarity, fairness, and deep moment-to-moment gameplay.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://dreadbyte-studios.itch.io/the-last-brethren" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Play Demo Now
              </a>
              <Link to="/games" className="btn btn-outline">
                Full Details
              </Link>
            </div>
          </div>
          <div className="featured-image">
            <img src="/pics/the-last-brethren.png" alt="The Last Brethren" />
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
