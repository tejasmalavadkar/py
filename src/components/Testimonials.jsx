import React from 'react';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Sophia Martinez',
    role: 'Verified Purchaser',
    text: '"The Blushing Romance bouquet was absolutely stunning! The roses stayed fresh for over a week, and the delicate floral scent filled the whole room. Highly recommend Bloom Haven!"',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Liam Anderson',
    role: 'Happy Husband',
    text: '"Same-day delivery was incredibly fast. I ordered anniversary flowers at 11:00 AM and they were delivered to my wife\'s office by 2:00 PM. Exceptional service and gorgeous arrangement!"',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Isabella Croft',
    role: 'Wedding Client',
    text: '"Bloom Haven styled all the floral decor for our wedding, and it was a dream! The soft sage green and blush palette was exactly what we envisioned. Simply perfect, thank you!"',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(
        <svg key={i} className="star-icon" viewBox="0 0 24 24" style={{ width: '16px', height: '16px', fill: 'var(--color-gold)' }}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="section-padding" id="testimonials" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Heartfelt Feedback</span>
          <h2 className="section-title">What Our Customers Say</h2>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="testimonial-card">
              {/* Giant decorative quote symbol */}
              <div className="quote-icon">“</div>
              
              <div>
                <div className="testimonial-stars">
                  {renderStars(t.rating)}
                </div>
                <p className="testimonial-text">{t.text}</p>
              </div>

              <div className="testimonial-user">
                <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                <div>
                  <h4 className="testimonial-name">{t.name}</h4>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
