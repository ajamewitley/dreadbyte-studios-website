export function Support() {
  return (
    <main>
      <div className="page-shell">
        {/* PAGE HERO */}
        <header className="page-header">
          <div className="page-kicker">
            <span>Support Us</span>
          </div>
          <div>
            <h1 className="page-title" style={{ fontSize: 'clamp(42px, 7vw, 64px)', letterSpacing: '-0.02em' }}>
              Fund the games you believe in
            </h1>
            <p className="page-subtitle" style={{ fontSize: '20px', color: '#999', maxWidth: '720px', lineHeight: 1.8 }}>
              Support is about belief, not equity. Every contribution—no matter the size—helps us move faster: building content, sharpening gameplay, and delivering the full vision.
            </p>
          </div>
        </header>

        <hr className="divider" />

        {/* WHY SUPPORT */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>YOUR IMPACT</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
              What Your Support Funds
            </h2>
          </div>

          <div className="grid grid-3">
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>New Content</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Environments, characters, weapons, cosmetics, and seasonal content that keep our games fresh and engaging long after launch.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Development Tools</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Software, middleware, asset licenses, and infrastructure that accelerate our pipeline and improve production quality.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Team Expansion</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                More hands on deck. Supporting us helps us hire more talented artists, engineers, and designers faster.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Live Operations</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Tournaments, seasonal events, live balance updates, and the community features that build lasting engagement.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Platform Expansion</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Console ports, cloud support, and new platform launches that bring our games to more players globally.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '12px' }}>Quality & Polish</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Time for iteration. We obsess over game feel, and every contribution gives us more time to perfect core mechanics.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* SUPPORT PLATFORMS */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px' }}>
            <div className="page-kicker">
              <span>Support Options</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 54px)', letterSpacing: '-0.02em', marginTop: '20px' }}>
              Multiple Ways to Contribute
            </h2>
          </div>

          <div className="grid grid-3" style={{ gap: '32px' }}>
            {/* Patreon */}
            <div className="section-card" style={{ padding: '40px', paddingBottom: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Patreon</h3>
              <p style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Monthly support · Flexible tiers</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '24px', flex: 1 }}>
                Back us month-to-month and stay directly connected to development. Access behind-the-scenes content, early builds, and exclusive supporter updates.
              </p>
              <a href="https://patreon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Coming Soon
              </a>
            </div>

            {/* Ko-fi */}
            <div className="section-card" style={{ padding: '40px', paddingBottom: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Ko-fi</h3>
              <p style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>One-time support · Any amount</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '24px', flex: 1 }}>
                Give a one-off boost whenever you want, no recurring commitment. Perfect for saying "keep going, I believe in this."
              </p>
              <a href="https://ko-fi.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Coming Soon
              </a>
            </div>

            {/* Early Access */}
            <div className="section-card" style={{ padding: '40px', paddingBottom: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ fontSize: '22px', fontWeight: '700', marginBottom: '12px' }}>Early Access Packs</h3>
              <p style={{ fontSize: '14px', color: '#ff4655', fontWeight: '600', marginBottom: '16px' }}>Direct funding · Game rewards</p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '24px', flex: 1 }}>
                Get guaranteed access to early builds and exclusive in-game cosmetics. Direct support fuels faster development.
              </p>
              <button className="btn btn-primary" disabled style={{ opacity: 0.6, cursor: 'not-allowed' }}>
                Available with Alpha
              </button>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* SUPPORTER TIERS */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>Support Tiers</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
              Progression & Rewards
            </h2>
            <p style={{ fontSize: '16px', color: '#999', marginTop: '16px' }}>
              Supporter tiers are designed to recognize your belief at every level. From casual backers to founding supporters.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
            {/* Tier 1 */}
            <div className="section-card" style={{ padding: '40px', border: '1px solid #ff4655' }}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#ff4655', marginBottom: '8px' }}>$5</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Backer</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '16px' }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Early dev updates & behind-the-scenes notes
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Name in supporter credits
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Access to supporter-only Discord channel
                </li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }} disabled>
                Coming Soon
              </button>
            </div>

            {/* Tier 2 */}
            <div className="section-card" style={{ padding: '40px', border: '2px solid #ff4655', background: 'rgba(255, 70, 85, 0.05)' }}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#ff4655', marginBottom: '8px' }}>$20</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Founder</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '16px' }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Everything from Backer, plus:
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Guaranteed early access to alpha/beta builds
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Founder badge in community spaces
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> In-game founder cosmetics & titles
                </li>
              </ul>
              <button className="btn btn-primary" style={{ width: '100%' }} disabled>
                Coming Soon
              </button>
            </div>

            {/* Tier 3 */}
            <div className="section-card" style={{ padding: '40px', border: '1px solid #ff4655' }}>
              <div style={{ fontSize: '32px', fontWeight: '700', color: '#ff4655', marginBottom: '8px' }}>$50+</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '24px' }}>Architect</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', fontSize: '16px' }}>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Everything from Founder, plus:
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Monthly direct conversation with the team
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Architect credits (all future games)
                </li>
                <li style={{ display: 'flex', gap: '8px' }}>
                  <span>✓</span> Exclusive cosmetic items & lifetime benefits
                </li>
              </ul>
              <button className="btn btn-outline" style={{ width: '100%' }} disabled>
                Coming Soon
              </button>
            </div>
          </div>

          <p style={{ fontSize: '14px', color: '#666', marginTop: '40px', textAlign: 'center' }}>
            Final tier structure, rewards, and platform launch dates will be confirmed as projects move from development to live service. All rewards respect competitive integrity and avoid pay-to-win mechanics.
          </p>
        </section>

        <hr className="divider" />

        {/* TRANSPARENCY */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
              Where Your Money Goes
            </h2>
            <p style={{ fontSize: '16px', color: '#999', marginTop: '16px' }}>
              We believe in transparency. When we launch support platforms, we'll share regular updates showing exactly where funds go.
            </p>
          </div>

          <div className="grid grid-3" style={{ gap: '40px' }}>
            <div className="section-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#ff4655', marginBottom: '12px' }}>40%</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Team & Staffing</h3>
              <p style={{ fontSize: '14px', color: '#999' }}>Salaries and contractor payments</p>
            </div>

            <div className="section-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#ff4655', marginBottom: '12px' }}>35%</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Content & Tools</h3>
              <p style={{ fontSize: '14px', color: '#999' }}>Assets, software, middleware, licenses</p>
            </div>

            <div className="section-card" style={{ padding: '32px', textAlign: 'center' }}>
              <div style={{ fontSize: '28px', fontWeight: '700', color: '#ff4655', marginBottom: '12px' }}>20%</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '8px' }}>Operations & Growth</h3>
              <p style={{ fontSize: '14px', color: '#999' }}>Infrastructure, marketing, contingency</p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* FINAL CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Join a Meaningful Mission</h2>
            <p>
              Your support doesn't just fund games—it funds a philosophy. Clear mechanics. Competitive integrity. Games built for players, not extractive systems.
            </p>
            <div className="cta-buttons">
              <a href="https://patreon.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Support on Patreon (Coming Soon)
              </a>
              <a href="/contact" className="btn btn-outline">
                Have Questions?
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
