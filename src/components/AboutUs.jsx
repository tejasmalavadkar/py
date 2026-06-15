import React, { useEffect } from 'react';

const TEAM_MEMBERS = [
  {
    id: 1,
    name: 'Clara Rivers',
    role: 'Founder & Head Florist',
    bio: 'With over 15 years of floral design experience, Clara brings a vision of luxurious, organic styling to every arrangement.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Marcus Finch',
    role: 'Senior Floral Designer',
    bio: 'Marcus specializes in structural wedding designs and custom installations, crafting pieces that tell unique love stories.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Chloe Bennett',
    role: 'Botanical Specialist',
    bio: 'Chloe manages our local greenhouse and indoor plant collection, ensuring every pot and leaf meets premium botanical standards.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
];

const SUSTAINABLE_POINTS = [
  {
    id: 1,
    title: 'Eco-Conscious Farms',
    desc: 'We partner exclusively with certified organic farms that prioritize soil health, biodiversity, and water conservation.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Zero Waste Packaging',
    desc: 'All our bouquets are wrapped in 100% biodegradable kraft papers, linen ties, and reusable glass vessels.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Direct Sourcing',
    desc: 'By cutting out middlemen, we support growers directly and ensure flowers arrive at your door within 36 hours of harvest.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];

const MILESTONES = [
  {
    year: '2012',
    title: 'The Flower Cart',
    description: 'Began as a mobile cart in Manhattan, serving handpicked fresh daily blooms to locals.'
  },
  {
    year: '2016',
    title: 'Flagship Soho Boutique',
    description: 'Opened our first physical location in Soho, designing premium custom floral decor.'
  },
  {
    year: '2020',
    title: '100% Sustainable Shift',
    description: 'Transitioned to fully bio-degradable packaging and partnered exclusively with eco-conscious farms.'
  },
  {
    year: '2024',
    title: 'Premium Digital Studio',
    description: 'Launched our tailored online boutique and custom subscription model, delivering country-wide.'
  }
];

export default function AboutUs() {
  const storyImage = '/src/assets/about_florist_workshop.png';
  const bannerImage = 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?q=80&w=1600&auto=format&fit=crop';

  useEffect(() => {
    document.title = 'About Us | Bloom Haven | Premium Floral Boutique';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page-wrapper" id="about-us-page">
      {/* 1. Page Header */}
      <section className="about-hero" style={{ backgroundImage: `url(${bannerImage})` }}>
        <div className="about-hero-overlay">
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="about-hero-tagline">Since 2012</span>
            <h1 className="about-hero-title">Our Floral Journey</h1>
            <p className="about-hero-desc">Crafting handpicked premium moments with botanical elegance.</p>
          </div>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="story-split">
            <div className="story-image-box">
              <img src={storyImage} alt="Florists arranging flowers in workshop" className="story-image" />
              <div className="story-image-badge">Bloom Haven Artistry</div>
            </div>
            
            <div className="story-content-box">
              <span className="section-subtitle">Our Heritage</span>
              <h2 className="section-title" style={{ textAlign: 'left', display: 'block', paddingBottom: '15px' }}>Grown from Pure Passion</h2>
              <p className="story-paragraph">
                Bloom Haven began as a small botanical cart on the streets of New York, fueled by a simple dream: to bring natural, luxury floristry into everyday lives. Our founder, Clara Rivers, believed that flowers should not just be passive decorations, but dynamic storytellers that elevate feelings, celebrate love, and spark joy.
              </p>
              <p className="story-paragraph">
                Today, Bloom Haven has blossomed into a premium boutique workshop. Every stem is inspected, every petal is pampered, and every arrangement is individually custom-designed by our small team of artisans. We fuse antique botanical romance with contemporary color palettes to present something truly unique.
              </p>
              
              <div className="story-quote">
                <span className="quote-mark">“</span>
                <p>We do not just sell flowers; we curate emotional expressions captured in nature's absolute finest colors.</p>
                <span className="quote-author">— Clara Rivers, Founder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Sourcing & Sustainability */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-secondary-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Conscious Design</span>
            <h2 className="section-title">Rooted in Sustainability</h2>
          </div>

          <div className="about-points-grid">
            {SUSTAINABLE_POINTS.map((point) => (
              <div key={point.id} className="about-point-card" id={`sustainable-point-${point.id}`}>
                <div className="about-point-icon">
                  {point.icon}
                </div>
                <h3 className="about-point-title">{point.title}</h3>
                <p className="about-point-desc">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline / Milestones Section */}
      <section className="section-padding timeline-section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Growth</span>
            <h2 className="section-title">Milestones Along the Way</h2>
          </div>

          <div className="timeline-container">
            {MILESTONES.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-desc">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Meet the Team */}
      <section className="section-padding" style={{ backgroundColor: 'var(--color-secondary-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">The Artisans</span>
            <h2 className="section-title">Meet Our Florists</h2>
          </div>

          <div className="team-grid">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="team-card" id={`team-card-${member.id}`}>
                <div className="team-image-box">
                  <img src={member.image} alt={member.name} className="team-image" />
                  <div className="team-social-overlay">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="team-social-link-icon" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="team-social-link-icon" aria-label="Pinterest">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 .0-2.9.2-.9 1.4-6.1 1.4-6.1s-.4-.7-.4-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.8 1.5 1.7 0 1-.6 2.6-.9 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.7-2.2 3.7-5.5 0-2.9-2.1-4.9-5.1-4.9-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.2 1 2.9.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.3 0 .1-.1.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2 0 0-.5 2-.6 2.4-.2.8-.8 1.9-1.2 2.6 1 .3 2.1.5 3.2.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
                    </a>
                    <a href="mailto:contact@bloomhaven.com" className="team-social-link-icon" aria-label="Email">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    </a>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <span className="team-role">{member.role}</span>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action */}
      <section className="about-cta-section" style={{ backgroundColor: 'var(--color-white)' }}>
        <div className="container" style={{ textAlign: 'center', padding: '60px 20px' }}>
          <h2 className="about-cta-title">Ready to Send a Beautiful Message?</h2>
          <p className="about-cta-desc">Explore our custom seasonal bouquets and experience the Bloom Haven touch.</p>
          <a href="/" className="btn btn-primary" style={{ marginTop: '25px', display: 'inline-block' }}>Browse Collection</a>
        </div>
      </section>
    </div>
  );
}

