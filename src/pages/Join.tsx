export function Join() {
  return (
    <main>
      <div className="page-shell">
        {/* PAGE HERO */}
        <header className="page-header">
          <div className="page-kicker">
            <span>We're Hiring</span>
          </div>
          <div>
            <h1 className="page-title" style={{ fontSize: 'clamp(42px, 7vw, 64px)', letterSpacing: '-0.02em' }}>
              Help us build the next generation of games
            </h1>
            <p className="page-subtitle" style={{ fontSize: '20px', color: '#999', maxWidth: '720px', lineHeight: 1.8 }}>
              If you're obsessed with game feel, clarity, and competitive depth—and you want to work on titles that matter—we want to talk to you.
            </p>
          </div>
        </header>

        <hr className="divider" />

        {/* WHY JOIN US */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>WHY DREADBYTE</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
              What We Offer
            </h2>
          </div>

          <div className="grid grid-3">
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Focused Scope</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                No bloated projects. Every game we build has a clear design philosophy and reasonable scope. Your work has impact.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Remote-First</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Work from anywhere. Flexible hours. Asynchronous communication. We respect your time and geography.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Clear Terms</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Paid roles, revenue share, contract work—whatever works for you. No surprises. Full transparency.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Craft-Focused</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Your craft matters. We obsess over game feel, feedback, and moment-to-moment gameplay. No compromises.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Player Respect</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Games built here respect player intelligence, time, and wallets. Fair mechanics. Clear rules. No exploitation.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Growth Opportunity</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                As we scale, so do you. Build your portfolio on meaningful projects. Real career advancement.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* OPEN POSITIONS */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>Open Positions</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Roles We're Filling
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px' }}>
            {/* Unity Developer */}
            <div className="section-card" style={{ padding: '32px', paddingBottom: '28px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Unity Developer</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Paid / Revenue Share</div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px', flex: 1 }}>
                Build responsive, performant gameplay systems. You'll work on combat, survival mechanics, and competitive arenas with an obsessive eye for feel and frame-time.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                <span className="tag">Unity</span>
                <span className="tag">C#</span>
                <span className="tag">Gameplay Systems</span>
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Intermediate–Senior</div>
              <a href="#application" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Apply Now</a>
            </div>

            {/* 3D Artist */}
            <div className="section-card" style={{ padding: '32px', paddingBottom: '28px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>3D Artist</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Revenue Share / Contract</div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px', flex: 1 }}>
                Build environments, props, and characters that reinforce our dark, atmospheric worlds without compromising clarity during gameplay.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                <span className="tag">Environment</span>
                <span className="tag">Characters</span>
                <span className="tag">Game-Ready Assets</span>
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Portfolio-Driven</div>
              <a href="#application" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Apply Now</a>
            </div>

            {/* Animator */}
            <div className="section-card" style={{ padding: '32px', paddingBottom: '28px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Animator</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Revenue Share / Contract</div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px', flex: 1 }}>
                Shape combat readability and atmosphere through motion. Work on locomotion, attacks, reactions, and environmental animation that serves gameplay.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                <span className="tag">Character Animation</span>
                <span className="tag">Combat Timing</span>
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Intermediate+</div>
              <a href="#application" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Apply Now</a>
            </div>

            {/* UI Designer */}
            <div className="section-card" style={{ padding: '32px', paddingBottom: '28px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>UI / UX Designer</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Paid / Revenue Share</div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px', flex: 1 }}>
                Design crisp, legible interfaces across our portfolio—from horror survival menus to competitive arena HUDs that support high-pressure play.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                <span className="tag">Game UI</span>
                <span className="tag">Prototyping</span>
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Intermediate–Senior</div>
              <a href="#application" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Apply Now</a>
            </div>

            {/* Sound Designer */}
            <div className="section-card" style={{ padding: '32px', paddingBottom: '28px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Sound Designer</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Revenue Share / Contract</div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px', flex: 1 }}>
                Create impact and atmosphere. From footsteps to weapon hits to horror ambience, your sound brings our worlds to life and heightens tension.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                <span className="tag">SFX</span>
                <span className="tag">Atmosphere</span>
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Portfolio-Driven</div>
              <a href="#application" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Apply Now</a>
            </div>

            {/* Marketing / Community */}
            <div className="section-card" style={{ padding: '32px', paddingBottom: '28px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '8px' }}>Marketing / Community</h3>
              <div style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Revenue Share / Part-Time</div>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px', flex: 1 }}>
                Tell our story. From demo launches to community building, help us reach competitive-minded players who love what we're building.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                <span className="tag">Campaigns</span>
                <span className="tag">Community</span>
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginBottom: '16px' }}>Indie / AA / AAA Welcome</div>
              <a href="#application" className="btn btn-primary" style={{ width: '100%', textAlign: 'center' }}>Apply Now</a>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* APPLICATION FORM */}
        <section id="application" style={{ margin: '120px 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
              <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
                <span>SUBMIT YOUR APPLICATION</span>
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
                Ready to Apply?
              </h2>
              <p style={{ fontSize: '16px', color: '#999', marginTop: '16px' }}>
                Tell us who you are, what you do best, and why Dreadbyte excites you. We review every application seriously.
              </p>
            </div>

            <form className="form-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label className="form-label" htmlFor="apply-role">Role of Interest *</label>
                  <select id="apply-role" className="form-select" required>
                    <option>Select a role...</option>
                    <option>Unity Developer</option>
                    <option>3D Artist</option>
                    <option>Animator</option>
                    <option>UI / UX Designer</option>
                    <option>Sound Designer</option>
                    <option>Marketing / Community</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="apply-exp">Experience Level *</label>
                  <select id="apply-exp" className="form-select" required>
                    <option>Select level...</option>
                    <option>Junior</option>
                    <option>Intermediate</option>
                    <option>Senior</option>
                    <option>Lead</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label className="form-label" htmlFor="apply-name">Name *</label>
                  <input id="apply-name" className="form-input" type="text" placeholder="Your name" required />
                </div>

                <div className="form-field">
                  <label className="form-label" htmlFor="apply-email">Email *</label>
                  <input id="apply-email" className="form-input" type="email" placeholder="your@email.com" required />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="apply-portfolio">Portfolio / Work Samples</label>
                <input id="apply-portfolio" className="form-input" type="url" placeholder="ArtStation, GitHub, personal site, etc." />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="apply-engagement">Engagement Preference</label>
                <select id="apply-engagement" className="form-select">
                  <option>Select preference...</option>
                  <option>Paid</option>
                  <option>Revenue Share</option>
                  <option>Contract/Project</option>
                  <option>Open to Any</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="apply-why">Why Dreadbyte? *</label>
                <textarea
                  id="apply-why"
                  className="form-textarea"
                  placeholder="What excites you about our games, philosophy, and vision?"
                  rows={6}
                  required
                ></textarea>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="apply-notes">Additional Notes</label>
                <textarea
                  id="apply-notes"
                  className="form-textarea"
                  placeholder="Timezone, availability, shipped titles, or anything else we should know..."
                  rows={4}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start', paddingInline: '32px' }}>
                Submit Application
              </button>

              <p style={{ fontSize: '13px', color: '#666' }}>
                By submitting, you agree we may store your details for recruitment purposes. We'll respond within 1-2 weeks.
              </p>
            </form>
          </div>
        </section>

        <hr className="divider" />

        {/* FINAL CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Don't See Your Role?</h2>
            <p>
              If you have skills and passion but don't see a matching position, reach out anyway. We're always interested in talking to talented people who believe in our vision.
            </p>
            <div className="cta-buttons">
              <a href="mailto:hello@dreadbyte-studios.com" className="btn btn-primary">
                Email Us Directly
              </a>
              <a href="/contact" className="btn btn-outline">
                Contact Page
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
