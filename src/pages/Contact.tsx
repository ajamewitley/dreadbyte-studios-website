import { Link } from 'react-router-dom'

export function Contact() {
  return (
    <main>
      <div className="page-shell">
        {/* PAGE HERO */}
        <header className="page-header">
          <div className="page-kicker">
            <span>Let's Talk</span>
          </div>
          <div>
            <h1 className="page-title" style={{ fontSize: 'clamp(42px, 7vw, 64px)', letterSpacing: '-0.02em' }}>
              Get in touch with Dreadbyte Studios
            </h1>
            <p className="page-subtitle" style={{ fontSize: '20px', color: '#999', maxWidth: '720px', lineHeight: 1.8 }}>
              Player feedback. Partnership inquiries. Career opportunities. Press coverage. Investment questions. Whatever brings you here, we want to hear from you.
            </p>
          </div>
        </header>

        <hr className="divider" />

        {/* CONTACT CHANNELS */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
              <span>CONTACT METHODS</span>
            </div>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
              Multiple Ways to Reach Us
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '40px' }}>
            {/* Email */}
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>Email Channels</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '16px' }}>
                <div>
                  <div style={{ fontWeight: '600', color: '#ccc', marginBottom: '6px' }}>General Inquiries</div>
                  <div style={{ color: '#ff4655', fontSize: '18px' }}>hello@dreadbyte-studios.com</div>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#ccc', marginBottom: '6px' }}>Business & Partnerships</div>
                  <div style={{ color: '#ff4655', fontSize: '18px' }}>business@dreadbyte-studios.com</div>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#ccc', marginBottom: '6px' }}>Press & Media</div>
                  <div style={{ color: '#ff4655', fontSize: '18px' }}>press@dreadbyte-studios.com</div>
                </div>
                <div>
                  <div style={{ fontWeight: '600', color: '#ccc', marginBottom: '6px' }}>Investment Inquiries</div>
                  <div style={{ color: '#ff4655', fontSize: '18px' }}>invest@dreadbyte-studios.com</div>
                </div>
              </div>
              <p style={{ fontSize: '14px', color: '#666', marginTop: '24px' }}>
                Please provide relevant context (project, timeline, region) so we can route your inquiry quickly.
              </p>
            </div>

            {/* Community & Social */}
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '20px', fontWeight: '700', marginBottom: '24px' }}>Community & Social</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999', marginBottom: '24px' }}>
                Join our community to get real-time updates, development insights, and early announcements.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="https://dreadbyte-studios.itch.io" target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ textAlign: 'center' }}>
                  itch.io Community
                </a>
                <span className="tag" style={{ textAlign: 'center', padding: '12px' }}>Discord (Coming Soon)</span>
                <span className="tag" style={{ textAlign: 'center', padding: '12px' }}>Twitter / X (Coming Soon)</span>
              </div>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* QUICK CONTACT FORM */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <div style={{ marginBottom: '60px', textAlign: 'center' }}>
              <div className="page-kicker" style={{ justifyContent: 'center', marginBottom: '20px' }}>
                <span>DIRECT MESSAGE</span>
              </div>
              <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em' }}>
                Send a Message
              </h2>
              <p style={{ fontSize: '16px', color: '#999', marginTop: '16px' }}>
                Use the form below to send us a message directly. We'll respond within 1-2 business days.
              </p>
            </div>

            <form className="form-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-name">Your Name</label>
                  <input id="contact-name" className="form-input" type="text" placeholder="Name" />
                </div>
                <div className="form-field">
                  <label className="form-label" htmlFor="contact-email">Email Address</label>
                  <input id="contact-email" className="form-input" type="email" placeholder="email@example.com" />
                </div>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="contact-topic">Inquiry Type</label>
                <select id="contact-topic" className="form-select">
                  <option>Select a topic...</option>
                  <option>Player Feedback</option>
                  <option>Business & Partnerships</option>
                  <option>Press & Media</option>
                  <option>Investment</option>
                  <option>Career Related</option>
                  <option>Technical Support</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  className="form-textarea"
                  placeholder="Your message here..."
                  rows={8}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message
              </button>

              <p style={{ fontSize: '13px', color: '#666' }}>
                For job applications, please use the dedicated form on the{' '}
                <Link to="/join" style={{ color: '#ff4655', textDecoration: 'none' }}>Join the Studio</Link> page.
              </p>
            </form>
          </div>
        </section>

        <hr className="divider" />

        {/* RESPONSE TIME & FAQ */}
        <section style={{ margin: '120px 0' }}>
          <div style={{ marginBottom: '60px', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 48px)', letterSpacing: '-0.02em', marginBottom: '40px' }}>
              Quick Answers
            </h2>
          </div>

          <div className="grid grid-2" style={{ gap: '40px' }}>
            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>How fast will you respond?</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                We aim to respond to all inquiries within 1-2 business days. During heavy periods, it may take slightly longer. Thanks for your patience.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>What about technical support?</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                For bug reports and technical issues, please report directly on the games' itch.io pages or contact us via email with detailed information.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Can I partner/collaborate?</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Yes! Publishers, developers, artists, and creators—reach out to business@dreadbyte-studios.com with details about your proposal.
              </p>
            </div>

            <div className="section-card" style={{ padding: '40px' }}>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '12px' }}>Is this the right place for feedback?</h3>
              <p style={{ fontSize: '16px', lineHeight: 1.8, color: '#999' }}>
                Feedback is always welcome! Email hello@dreadbyte-studios.com or join our community on itch.io to discuss directly with the team.
              </p>
            </div>
          </div>
        </section>

        <hr className="divider" />

        {/* FINAL CTA */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>We're Here to Help</h2>
            <p>
              From partnership opportunities to player feedback to career inquiries—we're genuinely interested in what brings you here. Let's start the conversation.
            </p>
            <div className="cta-buttons">
              <Link to="/games" className="btn btn-primary">
                Explore Our Games
              </Link>
              <Link to="/join" className="btn btn-outline">
                View Career Opportunities
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
