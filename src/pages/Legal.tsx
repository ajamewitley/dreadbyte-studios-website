export function Legal() {
  return (
    <main>
      <div className="page-shell">
        {/* PAGE HERO */}
        <header className="page-header">
          <div className="page-kicker">
            <span>Legal</span>
          </div>
          <div>
            <h1 className="page-title" style={{ fontSize: 'clamp(42px, 7vw, 64px)', letterSpacing: '-0.02em' }}>
              Legal & Compliance
            </h1>
            <p className="page-subtitle" style={{ fontSize: '20px', color: '#999', maxWidth: '720px', lineHeight: 1.8 }}>
              Our policies around privacy, terms of use, and data protection. We believe in transparency and protecting player trust.
            </p>
          </div>
        </header>

        <hr className="divider" />

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          {/* PRIVACY POLICY */}
          <section style={{ margin: '120px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.01em' }}>
              Privacy Policy
            </h2>

            <div className="section-card" style={{ padding: '40px', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Website Data Collection</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px' }}>
                This website may collect limited information that you provide voluntarily:
              </p>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                <li>• Contact form submissions (name, email, message)</li>
                <li>• Career application data (resume, portfolio)</li>
                <li>• Newsletter signups (email address)</li>
                <li>• Basic analytics (page views, traffic sources, device type)</li>
              </ul>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                <strong>What we do with this data:</strong>
              </p>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '12px' }}>
                <li>• Respond to inquiries and support requests</li>
                <li>• Process job applications</li>
                <li>• Send updates and announcements (with opt-out available)</li>
                <li>• Improve the website and user experience</li>
              </ul>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>What We Don't Do</h3>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li><strong style={{ color: '#ccc' }}>✓ We do not sell your personal data</strong> to third parties</li>
                <li><strong style={{ color: '#ccc' }}>✓ We do not share data</strong> with advertisers or marketing networks</li>
                <li><strong style={{ color: '#ccc' }}>✓ We do not use dark patterns</strong> or deceptive tracking</li>
                <li><strong style={{ color: '#ccc' }}>✓ We respect your privacy</strong> by default</li>
              </ul>
            </div>

            <p style={{ fontSize: '13px', color: '#666', marginTop: '24px', fontStyle: 'italic' }}>
              This is a high-level privacy summary. Before launch, consult with legal counsel to ensure compliance with GDPR, CCPA, and other applicable regulations.
            </p>
          </section>

          <hr className="divider" />

          {/* TERMS OF SERVICE */}
          <section style={{ margin: '120px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.01em' }}>
              Terms of Service
            </h2>

            <div className="section-card" style={{ padding: '40px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '24px' }}>
                By accessing or using the Dreadbyte Studios website and services, you agree to these terms of service. Use of our site is permitted only for lawful purposes and in ways that do not:
              </p>

              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                <li>• Violate applicable laws or regulations</li>
                <li>• Infringe on intellectual property rights</li>
                <li>• Harass, defame, or harm others</li>
                <li>• Compromise site security or integrity</li>
              </ul>

              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Content & Intellectual Property</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px' }}>
                All content on this site—including designs, text, images, logos, and game assets—is the exclusive property of Dreadbyte Studios or our partners, protected by copyright law.
              </p>
              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>• You may not reproduce, distribute, or modify our content without permission</li>
                <li>• Game demos and titles remain subject to their respective licenses</li>
                <li>• Third-party links (itch.io, etc.) are provided for convenience only</li>
              </ul>
            </div>

            <div className="section-card" style={{ padding: '40px', marginTop: '24px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Disclaimer</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                This website and all content are provided "as is" without any warranties, express or implied. Dreadbyte Studios is not liable for any damages resulting from use or inability to use this site.
              </p>
            </div>
          </section>

          <hr className="divider" />

          {/* COOKIE POLICY */}
          <section style={{ margin: '120px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.01em' }}>
              Cookie Policy
            </h2>

            <div className="section-card" style={{ padding: '40px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '24px' }}>
                Our website may use cookies or similar tracking technologies to:
              </p>

              <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '30px' }}>
                <li>
                  <strong style={{ color: '#ccc' }}>Essential Cookies</strong><br />
                  Keep the site functional (logins, forms, preferences)
                </li>
                <li>
                  <strong style={{ color: '#ccc' }}>Analytics Cookies</strong><br />
                  Understand how visitors use the site (anonymized, non-identifying)
                </li>
                <li>
                  <strong style={{ color: '#ccc' }}>Preference Cookies</strong><br />
                  Remember your choices (theme, language, etc.)
                </li>
              </ul>

              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '16px' }}>Your Control</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                You can disable non-essential cookies through your browser settings. Note that disabling cookies may affect site functionality. We do not use intrusive third-party tracking.
              </p>
            </div>
          </section>

          <hr className="divider" />

          {/* COMPLIANCE & SAFEGUARDS */}
          <section style={{ margin: '120px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.01em' }}>
              Data Security & Compliance
            </h2>

            <div className="grid grid-2" style={{ gap: '32px' }}>
              <div className="section-card" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Security Measures</h3>
                <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li>• Encrypted data transmission (HTTPS)</li>
                  <li>• Regular security audits</li>
                  <li>• Secure form submissions</li>
                  <li>• Limited data retention</li>
                </ul>
              </div>

              <div className="section-card" style={{ padding: '40px' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '16px' }}>Regulatory Compliance</h3>
                <ul style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <li>• GDPR (EU data protection)</li>
                  <li>• CCPA (California privacy)</li>
                  <li>• COPPA (children's privacy)</li>
                  <li>• Local jurisdiction laws</li>
                </ul>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: '#666', marginTop: '32px', textAlign: 'center', fontStyle: 'italic' }}>
              We are committed to protecting your data. As our services expand, we will maintain compliance with all applicable laws and regulations.
            </p>
          </section>

          <hr className="divider" />

          {/* POLICY UPDATES */}
          <section style={{ margin: '120px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '30px', letterSpacing: '-0.01em' }}>
              Policy Updates
            </h2>

            <div className="section-card" style={{ padding: '40px' }}>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px' }}>
                As Dreadbyte Studios grows—launching multiplayer games, community platforms, and new services—we will update these policies to reflect actual data flows and operational practices.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '20px' }}>
                We recommend checking this page periodically for updates. Material changes will be communicated clearly to affected users.
              </p>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                <strong style={{ color: '#ccc' }}>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </section>

          <hr className="divider" />

          {/* CONTACT */}
          <section style={{ margin: '120px 0 80px' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', letterSpacing: '-0.01em' }}>
                Questions About These Policies?
              </h2>
              <p style={{ fontSize: '16px', color: '#999', marginBottom: '32px' }}>
                If you have questions or concerns about our privacy practices or these terms:
              </p>
              <a href="/contact" className="btn btn-primary" style={{ display: 'inline-block' }}>
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
