import { Link } from 'react-router-dom'

export function Games() {
  return (
    <main>
      <div className="page-shell">
        {/* PAGE HERO */}
        <header className="page-header">
          <div className="page-kicker">
            <span>Our Portfolio</span>
          </div>
          <div>
            <h1 className="page-title" style={{ fontSize: 'clamp(42px, 7vw, 64px)', letterSpacing: '-0.02em' }}>
              Three games. One vision.
            </h1>
            <p className="page-subtitle" style={{ fontSize: '20px', color: '#999', maxWidth: '720px', lineHeight: 1.8 }}>
              From dark fantasy roguelikes to psychological survival horror to competitive multiplayer arenas—every title in our slate reflects our commitment to clarity, depth, and competitive integrity.
            </p>
          </div>
        </header>

        <hr className="divider" />

        {/* FEATURED SPOTLIGHT - LEAD GAME */}
        <section className="featured-section" style={{ marginBottom: '120px' }}>
          <div className="featured-content">
            <div>
              <div className="page-kicker" style={{ marginBottom: '16px' }}>
                <span className="badge-pill pill-accent">
                  <span className="badge-dot"></span>
                  Flagship Title
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '24px' }}>
                FZ Arena
              </h2>
              <p style={{ fontSize: '18px', lineHeight: 1.8, color: '#999', marginBottom: '24px' }}>
                Our flagship competitive shooter is built from the ground up for skill-based local multiplayer gameplay. Advanced ballistics simulation, responsive controls, and crystal-clear sightlines create an arena where every kill is earned through mastery, not luck.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '24px' }}>
                <span className="tag tag-pill-accent">Android & iOS</span>
                <span className="tag">Local Multiplayer</span>
                <span className="tag">Competitive Shooter</span>
                <span className="tag">Pre-Alpha</span>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <a href="https://dreadbyte-studios.itch.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Play Now on itch.io
                </a>
                <Link to="/contact" className="btn btn-outline">
                  Partnership Inquiry
                </Link>
              </div>
            </div>
            <div className="featured-image">
              <img src="/pics/Fz Icon.png" alt="FZ Arena" />
            </div>
          </div>
        </section>

        {/* GAME GRID */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>Complete Portfolio</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              All Our Titles
            </h2>
          </div>

          <div className="game-grid">
            {/* The Last Brethren */}
            <article className="game-card">
              <header className="game-card-header">
                <div>
                  <h3 className="game-card-title">The Last Brethren</h3>
                  <div className="game-card-meta">
                    <span className="muted">Dark Fantasy · Roguelike · Souls-like</span>
                    <span className="muted">PC (Windows) · Single-player</span>
                  </div>
                </div>
                <div className="status-pill status-pill--demo">Demo Live</div>
              </header>
              <div className="game-card-hero">
                <img src="/pics/the-last-brethren.png" alt="The Last Brethren" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
              </div>
              <div className="game-card-body">
                <p>
                  Warriors are cursed to resurrect endlessly in a world of shadow and desperation. Every cycle of death and resurrection is a test: Can you break the curse through mastery? Or will you become another lost soul, trapped forever?
                </p>
                <p style={{ marginTop: '12px', fontSize: '14px', color: '#999' }}>
                  Built on principles of clarity and fair difficulty, The Last Brethren rewards skill, observation, and persistence. Every encounter is winnable once you understand the systems.
                </p>
              </div>
              <footer className="game-card-footer">
                <div className="tag-row">
                  <span className="tag">Dark Fantasy</span>
                  <span className="tag">Roguelike Loop</span>
                  <span className="tag">Atmospheric</span>
                  <span className="tag">Challenging</span>
                </div>
                <a
                  className="btn btn-primary"
                  href="https://dreadbyte-studios.itch.io/the-last-brethren"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Download Demo</a>
              </footer>
            </article>

            {/* Zanni */}
            <article className="game-card">
              <header className="game-card-header">
                <div>
                  <h3 className="game-card-title">Zanni</h3>
                  <div className="game-card-meta">
                    <span className="muted">Psychological Horror · Survival</span>
                    <span className="muted">PC (Windows) · Single-player</span>
                  </div>
                </div>
                <div className="status-pill status-pill--demo">Demo Live</div>
              </header>
              <div className="game-card-hero">
                <img src="/pics/zanni.png" alt="Zanni" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
              </div>
              <div className="game-card-body">
                <p>
                  Behind a mechanical mask lies a twisted asylum of secrets, deception, and creeping psychological horror. Uncover the truth of what happened to you—but every discovery brings you closer to something far worse.
                </p>
                <p style={{ marginTop: '12px', fontSize: '14px', color: '#999' }}>
                  A high-tension narrative exploration game that prioritizes atmosphere and psychological dread. Discover the story through exploration and environmental clues.
                </p>
              </div>
              <footer className="game-card-footer">
                <div className="tag-row">
                  <span className="tag">Psychological Horror</span>
                  <span className="tag">Survival</span>
                  <span className="tag">Narrative</span>
                  <span className="tag">Immersive</span>
                </div>
                <a
                  className="btn btn-primary"
                  href="https://dreadbyte-studios.itch.io/zanni"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Download Demo</a>
              </footer>
            </article>

            {/* FZ Arena (secondary position) */}
            <article className="game-card">
              <header className="game-card-header">
                <div>
                  <h3 className="game-card-title">FZ Arena</h3>
                  <div className="game-card-meta">
                    <span className="muted">Competitive Shooter · Multiplayer</span>
                    <span className="muted">Android · iOS · Local Multiplayer</span>
                  </div>
                </div>
                <div className="status-pill status-pill--alpha">Pre-Alpha</div>
              </header>
              <div className="game-card-hero">
                <img src="/pics/Fz Icon.png" alt="FZ Arena" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
              </div>
              <div className="game-card-body">
                <p>
                  Strip away the noise. Intense, skill-based competitive multiplayer where every gun works exactly as expected. Advanced ballistics, responsive controls, and clear sightlines make this the purest expression of mechanical mastery.
                </p>
                <p style={{ marginTop: '12px', fontSize: '14px', color: '#999' }}>
                  Built for local multiplayer on mobile platforms, FZ Arena prioritizes competitive integrity, tight controls, and reliable netcode for unforgettable matches.
                </p>
              </div>
              <footer className="game-card-footer">
                <div className="tag-row">
                  <span className="tag">Competitive</span>
                  <span className="tag">Multiplayer</span>
                  <span className="tag">Mobile</span>
                  <span className="tag">Skill-Based</span>
                </div>
                <a
                  className="btn btn-primary"
                  href="https://dreadbyte-studios.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Play Pre-Alpha</a>
              </footer>
            </article>
          </div>
        </section>

        <hr className="divider" />

        {/* ROADMAP & VISION */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>FUTURE DIRECTION</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              How We're Growing Each Title
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '40px' }}>
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Live Iterations</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Every demo is a live experiment. We collect player feedback, balance core mechanics, and refine moment-to-moment feel. Updates are ongoing—your voice shapes what ships.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Content Layers</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Beyond launch, we're building content systems: cosmetics, progression paths, seasonal events, and community features that keep players engaged for years.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Expanded Platforms</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                What starts on PC and mobile will expand. Console ports, cloud gaming, and new device support are on the horizon as each title matures.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Franchise Development</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Successful titles become franchises. Sequels, spin-offs, and expanded universes are planned. Each decision serves the long-term vision.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Looking to Collaborate?</h2>
            <p>
              Whether you're a publisher interested in partnering, a studio wanting to explore joint ventures, or a creator with ideas—let's talk about building something great together.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Contact Us
              </Link>
              <a href="https://dreadbyte-studios.itch.io" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Explore on itch.io
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
