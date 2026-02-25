export function About() {
  return (
    <main>
      {/* PAGE HERO */}
      <div className="page-shell">
        <header className="page-header">
          <div className="page-kicker">
            <span>Our Story</span>
          </div>
          <div>
            <h1 className="page-title" style={{ fontSize: 'clamp(42px, 7vw, 64px)', letterSpacing: '-0.02em' }}>
              Founded on the belief that games deserve better
            </h1>
            <p className="page-subtitle" style={{ fontSize: '20px', color: '#999', maxWidth: '720px', lineHeight: 1.8 }}>
              Dreadbyte Studios is an independent video game development studio creating dark, competitive experiences where every mechanic is intentional and every interaction respects the player.
            </p>
          </div>
        </header>

        <hr className="divider" />

        {/* STORY SECTION */}
        <section style={{ margin: '120px 0' }}>
          <div className="grid grid-2" style={{ gap: '80px', alignItems: 'start' }}>
            <div>
              <div className="page-kicker" style={{ marginBottom: '40px' }}>
                <span>Our Foundation</span>
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '30px' }}>
                Built from a simple conviction
              </h2>
              <div style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc' }}>
                <p style={{ marginBottom: '20px' }}>
                  We started Dreadbyte Studios because the market was missing something: dark, atmospheric games that also demand respect for the player's time and intelligence. Modern games too often choose between clarity and atmosphere—we refuse that choice.
                </p>
                <p style={{ marginBottom: '20px' }}>
                  From our earliest prototypes like <strong>The Last Brethren</strong> (a roguelike exploring resurrection and mastery) to <strong>Zanni</strong> (a psychological horror survival game that gets under your skin), every project has been a deliberate evolution toward tighter systems, better feedback, and stronger identity.
                </p>
                <p>
                  Now, with <strong>FZ Arena</strong>, we're bringing that philosophy to competitive multiplayer—a fast-paced local shooter where skill is everything and the mechanics are crystal clear.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="section-card">
                <h3 style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ff4655', marginBottom: '12px' }}>
                  Founded
                </h3>
                <p style={{ fontSize: '28px', fontWeight: '700' }}>2024</p>
              </div>
              <div className="section-card">
                <h3 style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ff4655', marginBottom: '12px' }}>
                  Games in Portfolio
                </h3>
                <p style={{ fontSize: '28px', fontWeight: '700' }}>3 Titles</p>
                <p style={{ fontSize: '14px', color: '#999', marginTop: '4px' }}>The Last Brethren · Zanni · FZ Arena</p>
              </div>
              <div className="section-card">
                <h3 style={{ fontSize: '16px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ff4655', marginBottom: '12px' }}>
                  Studio Structure
                </h3>
                <p style={{ fontSize: '28px', fontWeight: '700' }}>Independent</p>
                <p style={{ fontSize: '14px', color: '#999', marginTop: '4px' }}>Remote-first, distributed team</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CORE VALUES */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '80px', textAlign: 'center' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>WHAT WE BELIEVE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
              Core Values That Guide Everything
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '40px' }}>
            <article className="section-card" style={{ padding: '40px' }}>
              <h3 className="section-card-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Clarity First</h3>
              <p className="section-card-subtitle" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                Dark atmospheres and high tension are earned through clear mechanics and fair rules. Confusion isn't drama—it's frustration. Every system is designed to be readable, responsive, and understandable, so players can make intentional decisions under pressure.
              </p>
            </article>

            <article className="section-card" style={{ padding: '40px' }}>
              <h3 className="section-card-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Respect for Players</h3>
              <p className="section-card-subtitle" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                No pay-to-win mechanics. No predatory monetization. No artificial difficulty padding. We respect players' time, intelligence, and wallets. Games that earn loyalty are games that deserve it.
              </p>
            </article>

            <article className="section-card" style={{ padding: '40px' }}>
              <h3 className="section-card-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Craft Over Noise</h3>
              <p className="section-card-subtitle" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                A small portfolio done exceptionally well beats a crowded slate of mediocrity. We focus on depth over breadth, quality over quantity. Every game represents our best work, not our fastest work.
              </p>
            </article>

            <article className="section-card" style={{ padding: '40px' }}>
              <h3 className="section-card-title" style={{ fontSize: '24px', marginBottom: '16px' }}>Competitive Integrity</h3>
              <p className="section-card-subtitle" style={{ fontSize: '16px', lineHeight: 1.8 }}>
                Whether building roguelikes, survival games, or competitive shooters—skill matters. Consistency matters. Fairness matters. The grind is respected, not exploited.
              </p>
            </article>
          </div>
        </section>

        <hr className="divider" />

        {/* OPERATIONS */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>HOW WE WORK</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Remote-First, Production-Focused
            </h2>
          </div>

          <div className="grid grid-3">
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Global Team</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                We operate as a distributed, remote-first studio with collaborators across regions and timezones. Asynchronous workflows let us maintain focus while embracing diverse perspectives.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Production Discipline</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Clear pipelines for development, art, sound, and balance. Regular milestones, transparent communication, and disciplined scope management ensure ambitions align with execution.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Player-Focused</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Early access, feedback loops, and live iteration. Our players aren't QA—they're collaborators in shaping our games into their best versions.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* ROADMAP */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>OUR DIRECTION</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Strategic Goals & Timeline
            </h2>
          </div>

          <div className="progress-track">
            <div className="progress-item">
              <div className="progress-label">Immediate: FZ Arena Foundation</div>
              <div>
                <div className="progress-description">
                  Solidify core multiplayer gameplay, balance, and netcode. Establish competitive integrity systems. Launch pre-alpha to community.
                </div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">Short-term: Content & Community</div>
              <div>
                <div className="progress-description">
                  Expand game portfolios based on player feedback. Build live operations pipelines. Establish tournament infrastructure and competitive community.
                </div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">Medium-term: Scale & Sustainability</div>
              <div>
                <div className="progress-description">
                  Grow the team strategically. Establish sustainable revenue models. Begin new original titles while maintaining existing franchises.
                </div>
              </div>
            </div>

            <div className="progress-item">
              <div className="progress-label">Long-term: Industry Leadership</div>
              <div>
                <div className="progress-description">
                  Become a recognized voice in competitive game design. Foster an independent studio culture that attracts top talent. Build lasting franchises players return to annually.
                </div>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CTA */}
        <section className="cta-section" style={{ margin: '120px 0 0 0' }}>
          <div className="cta-content">
            <h2>Want to Be Part of This?</h2>
            <p>
              Whether you're a player ready to dive into our games, a creator ready to contribute your craft, or an investor who believes in our vision—there's a place for you.
            </p>
            <div className="cta-buttons">
              <a href="https://dreadbyte-studios.itch.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Play Our Games
              </a>
              <a href="/join" className="btn btn-outline">
                Join Our Team
              </a>
              <a href="/support" className="btn btn-ghost">
                Support Development
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
