import React from 'react';

export default function SpecialOffer() {
  const offerImage = 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=1600&auto=format&fit=crop';

  return (
    <section className="special-offer">
      <div className="offer-banner">
        {/* Background Image */}
        <div 
          className="offer-background"
          style={{ backgroundImage: `url(${offerImage})` }}
        ></div>

        {/* Content Container */}
        <div className="offer-content">
          <span className="offer-tag">Limited Time Promo</span>
          <h2 className="offer-title">Get 20% Off on Your First Order</h2>
          <p className="offer-subtitle">
            Sign up for our newsletter today and receive a 20% discount code on your first handcrafted arrangement!
          </p>
          <a href="#newsletter" className="btn offer-btn">Claim Your Code</a>
        </div>
      </div>
    </section>
  );
}
