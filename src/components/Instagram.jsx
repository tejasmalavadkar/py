import React from 'react';

const INSTAGRAM_DATA = [
  { id: 1, img: 'https://images.unsplash.com/photo-1452827073306-6e6e661baf57?q=80&w=500&auto=format&fit=crop', likes: '1.2k', comments: 85 },
  { id: 2, img: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=500&auto=format&fit=crop', likes: '956', comments: 42 },
  { id: 3, img: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=500&auto=format&fit=crop', likes: '2.1k', comments: 112 },
  { id: 4, img: 'https://images.unsplash.com/photo-1487070183336-b8a25866a289?q=80&w=500&auto=format&fit=crop', likes: '842', comments: 31 },
  { id: 5, img: 'https://images.unsplash.com/photo-1444930694458-01babf71870c?q=80&w=500&auto=format&fit=crop', likes: '1.5k', comments: 90 },
  { id: 6, img: 'https://images.unsplash.com/photo-1508789454646-bef72439f197?q=80&w=500&auto=format&fit=crop', likes: '1.8k', comments: 74 },
];

export default function Instagram() {
  return (
    <section className="section-padding" id="instagram" style={{ backgroundColor: 'var(--color-white)', paddingBottom: '0' }}>
      <div className="container" style={{ marginBottom: 'var(--spacing-md)' }}>
        <div className="section-header" style={{ marginBottom: 'var(--spacing-md)' }}>
          <span className="section-subtitle">Social Feed</span>
          <h2 className="section-title">Share the Bloom</h2>
          <p style={{ marginTop: '15px', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
            Follow us on Instagram <a href="#instagram" style={{ color: 'var(--color-primary-dark)', fontWeight: '600' }}>@BloomHavenFleurs</a> for daily floral inspiration.
          </p>
        </div>
      </div>

      <div className="instagram-grid">
        {INSTAGRAM_DATA.map((item) => (
          <div key={item.id} className="instagram-item">
            <img src={item.img} alt={`Bloom Haven Instagram post ${item.id}`} className="instagram-img" loading="lazy" />
            <div className="instagram-overlay">
              {/* Heart Likes */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <span>{item.likes}</span>
              </div>
              {/* Message Comments */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <svg viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm0-3h12v2H6V6zm0 6h9v2H6v-2z"/>
                </svg>
                <span>{item.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
