export function Invest() {
  return (
    <main>
      <div className="page-shell">
        {/* PAGE HERO */}
        <header className="page-header">
          <div className="page-kicker">
            <span>Investment</span>
          </div>
          <div>
            <h1 className="page-title" style={{ fontSize: 'clamp(42px, 7vw, 64px)', letterSpacing: '-0.02em' }}>
              A portfolio built to sustain and scale
            </h1>
            <p className="page-subtitle" style={{ fontSize: '20px', color: '#999', maxWidth: '720px', lineHeight: 1.8 }}>
              For qualified partners interested in a disciplined, focused studio building games for players who demand depth and respect competitive integrity.
            </p>
          </div>
        </header>

        <hr className="divider" />

        {/* VISION & POSITIONING */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>Strategy</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Vision & Market Positioning
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Our Mission</h3>
              <div style={{ fontSize: '18px', lineHeight: 1.8, color: '#ccc' }}>
                <p style={{ marginBottom: '16px' }}>
                  Dreadbyte Studios is building a compact, focused portfolio of games that feel sharp from the first encounter and deep enough to sustain long-term mastery.
                </p>
                <p>
                  We operate at the intersection of dark fantasy, survival horror, and competitive multiplayer—markets hungry for authentic, clearly-designed experiences built on respect rather than exploitation.
                </p>
              </div>
            </div>

            <div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px' }}>Market Opportunity</h3>
              <div style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '20px', color: '#ff4655', fontWeight: '700' }}>→</span>
                    <span><strong>Dark Fantasy / Souls-like</strong> — millions of players seeking atmospheric challenge</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '20px', color: '#ff4655', fontWeight: '700' }}>→</span>
                    <span><strong>Survival Horror</strong> — audiences craving tension and immersion</span>
                  </li>
                  <li style={{ display: 'flex', gap: '12px' }}>
                    <span style={{ fontSize: '20px', color: '#ff4655', fontWeight: '700' }}>→</span>
                    <span><strong>Competitive Multiplayer</strong> — players tired of pay-to-win mechanics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* PROJECT OVERVIEW */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>Portfolio</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Current & Planned Projects
            </h2>
          </div>

          {/* FZ Arena */}
          <div className="grid grid-2" style={{ gap: '60px', alignItems: 'start', marginBottom: '80px' }}>
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>FZ Arena — Flagship</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '20px' }}>Competitive Multiplayer Shooter</div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '16px' }}>
                Fast-paced local multiplayer competitive shooter with advanced ballistics and skill-based gameplay. Currently in pre-alpha with core systems actively under development.
              </p>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong>Platforms:</strong> Android & iOS mobile</li>
                <li><strong>Target Market:</strong> Competitive gamers, esports-adjacent</li>
                <li><strong>Monetization:</strong> Fair cosmetics + expansions, no pay-to-win</li>
                <li><strong>Revenue Model:</strong> Direct sales + seasonal content</li>
              </ul>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Live Titles</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '20px' }}>Proven Prototypes & R&D</div>
              
              <div style={{ marginBottom: '24px' }}>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>The Last Brethren</p>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#999' }}>Dark fantasy roguelike. 1000+ players, positive reception. Validates tone and systems depth.</p>
              </div>

              <div>
                <p style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Zanni</p>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#999' }}>Psychological horror survival. 5000+ players. Demonstrates our ability to build immersive, tension-driven experiences.</p>
              </div>
            </div>
          </div>

          <hr className="divider" style={{ margin: '60px 0' }} />

          {/* Future Roadmap */}
          <div style={{ marginBottom: '60px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '30px' }}>Planned Expansion</h3>
            <div className="grid grid-3">
              <div className="section-card" style={{ padding: '32px' }}>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#ff4655', marginBottom: '8px' }}>Yr 1-2</div>
                <p style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>FZ Arena Launch</p>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#999' }}>Alpha → Beta → full release with live ops infrastructure</p>
              </div>

              <div className="section-card" style={{ padding: '32px' }}>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#ff4655', marginBottom: '8px' }}>Yr 2-3</div>
                <p style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Expand Portfolio</p>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#999' }}>New IP launches, FZ Arena content expansions</p>
              </div>

              <div className="section-card" style={{ padding: '32px' }}>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#ff4655', marginBottom: '8px' }}>Yr 3+</div>
                <p style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Platform Growth</p>
                <p style={{ fontSize: '14px', lineHeight: 1.6, color: '#999' }}>Console ports, franchises, live service maturation</p>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* FUNDING & USE */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>CAPITAL NEEDS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
              Use of Funds & Financial Strategy
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '60px' }}>
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Use of Capital</h3>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li><strong style={{ color: '#ccc' }}>Development (50%):</strong> Engineering, design, art, animation, audio</li>
                <li><strong style={{ color: '#ccc' }}>Operations (25%):</strong> Tools, infrastructure, QA, servers, services</li>
                <li><strong style={{ color: '#ccc' }}>Marketing (15%):</strong> Campaigns, trailers, key art, community management</li>
                <li><strong style={{ color: '#ccc' }}>Contingency (10%):</strong> Buffer for scaling and unforeseen costs</li>
              </ul>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '24px' }}>Financial Outlook</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '16px' }}>
                We prioritize sustainable growth over hypergrowth. Revenue projections will be shared with qualified partners based on:
              </p>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>• Comparable title performance in our genres</li>
                <li>• Conservative player acquisition estimates</li>
                <li>• Live service monetization benchmarks</li>
              </ul>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* TEAM & OPERATIONS */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em' }}>
              Team & Execution
            </h2>
            <p style={{ fontSize: '16px', color: '#999', marginTop: '16px' }}>
              Distributed, production-focused team with proven shipping experience.
            </p>
          </div>

          <div className="grid grid-3">
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Leadership</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Experienced game directors, technical leads, and producers with shipped titles across indie, AA, and AAA studios.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Culture</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Asynchronous, remote-first workflows. Clear scope, transparent communication, and realistic timelines.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Scaling</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Structured hiring plan. Capital into talent acquisition across design, engineering, and art disciplines.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* CONTACT */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>NEXT STEPS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em', marginBottom: '24px' }}>
              Investment Inquiry
            </h2>
            <p style={{ fontSize: '16px', color: '#999', lineHeight: 1.8, marginBottom: '40px' }}>
              For qualified investment partners interested in learning more about our vision, financial projections, and partnership models:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center', fontSize: '18px' }}>
              <div style={{ padding: '24px', background: 'rgba(255, 70, 85, 0.1)', borderRadius: '12px', width: '100%' }}>
                <strong>invest@dreadbyte-studios.com</strong>
              </div>
              <p style={{ fontSize: '14px', color: '#666' }}>
                Please include: fund details, investment range, time horizon, and relevant portfolio companies
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* FINAL CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Let's Build Something Great</h2>
            <p>
              We're looking for partners who understand early-stage game development, value disciplined execution, and believe in games built for players, not extractive systems.
            </p>
            <div className="cta-buttons">
              <a href="mailto:invest@dreadbyte-studios.com" className="btn btn-primary">
                Get in Touch
              </a>
              <a href="/contact" className="btn btn-outline">
                Ask Questions
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
