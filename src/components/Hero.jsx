import React from 'react';

export default function Hero() {
  const heroImage = 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=1600&auto=format&fit=crop';

  return (
    <header className="hero" id="hero">
      {/* Background Image with elegant overlay */}
      <div 
        className="hero-background" 
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>

      {/* Floating Floral Decorative Elements */}
      <svg className="floating-leaf floating-leaf-1" width="80" height="80" viewBox="0 0 100 100" fill="none">
        <path d="M50 0 C75 25, 75 75, 50 100 C25 75, 25 25, 50 0 Z" fill="hsl(155, 20%, 75%)" opacity="0.25" />
      </svg>
      <svg className="floating-leaf floating-leaf-2" width="60" height="60" viewBox="0 0 100 100" fill="none">
        <path d="M0 50 C25 25, 75 25, 100 50 C75 75, 25 75, 0 50 Z" fill="hsl(350, 65%, 82%)" opacity="0.25" />
      </svg>

      <div className="container">
        <div className="hero-content">
          <span className="hero-tagline">Welcome to Bloom Haven</span>
          <h1 className="hero-title">
            Fresh Flowers <br />
            <span>Delivered with Love</span>
          </h1>
          <p className="hero-subheading">
            Handcrafted bouquets for every special moment. Select from our fresh, premium seasonal collection designed by professional florists.
          </p>
          <div className="hero-ctas">
            <a href="#bestsellers" className="btn btn-primary">Shop Now</a>
            <a href="#categories" className="btn btn-secondary">Explore Collection</a>
          </div>
        </div>
      </div>
    </header>
  );
}
