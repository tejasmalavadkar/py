import React from 'react';

const FEATURES = [
  {
    id: 1,
    title: 'Fresh Flowers Daily',
    desc: 'Our blossoms are harvested at dawn and designed to reach your hands in pristine, fresh condition.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a15 15 0 0 0-3.5 9 3.5 3.5 0 0 0 7 0A15 15 0 0 0 12 2z"></path>
        <path d="M12 21a15 15 0 0 1-3.5-9 3.5 3.5 0 0 1 7 0A15 15 0 0 1 12 21z"></path>
        <path d="M21 12a15 15 0 0 0-9-3.5 3.5 3.5 0 0 0 0 7 15 15 0 0 0 9-3.5z"></path>
        <path d="M3 12a15 15 0 0 1 9-3.5 3.5 3.5 0 0 1 0 7 15 15 0 0 1-9-3.5z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Same Day Delivery',
    desc: 'Order by 1:00 PM for swift, contactless local delivery. Perfect for last minute gifting.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2" ry="2"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Premium Quality',
    desc: 'Hand-selected premium blooms sourced from standard growers to deliver unmatched elegance.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7"></circle>
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Secure Payment',
    desc: 'We support fully encrypted payment channels ensuring your transactions are safe and easy.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding" id="whychooseus" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Our Promise</span>
          <h2 className="section-title">Why Choose Bloom Haven</h2>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon-container">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
