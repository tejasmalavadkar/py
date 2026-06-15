import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('Subscribing...');
    setTimeout(() => {
      setStatus('Thank you for subscribing! Check your email for your 20% off code.');
      setEmail('');
    }, 1200);
  };

  const newsletterBg = 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?q=80&w=1200&auto=format&fit=crop';

  return (
    <section className="newsletter-section" id="newsletter">
      <div className="newsletter-card">
        {/* Backdrop Image */}
        <div 
          className="newsletter-bg"
          style={{ backgroundImage: `url(${newsletterBg})` }}
        ></div>

        {/* Content Box */}
        <div className="newsletter-content">
          <h2 className="newsletter-title">Join the Bloom Haven Club</h2>
          <p className="newsletter-desc">
            Subscribe to our newsletter to receive styling tips, seasonal collection previews, and an instant **20% discount** code on your first order.
          </p>

          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="newsletter-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email Address"
            />
            <button type="submit" className="newsletter-submit">
              Subscribe
            </button>
          </form>

          {status && (
            <p style={{ marginTop: '15px', fontSize: '0.9rem', color: 'var(--color-secondary-dark)', fontWeight: '600' }}>
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
