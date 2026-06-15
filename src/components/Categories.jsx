import React from 'react';

const CATEGORIES_DATA = [
  {
    id: 1,
    title: 'Rose Bouquets',
    image: 'https://images.unsplash.com/photo-1533604085492-c423cf9e38c7?q=80&w=800&auto=format&fit=crop',
    link: '#shop',
  },
  {
    id: 2,
    title: 'Wedding Flowers',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
    link: '#shop',
  },
  {
    id: 3,
    title: 'Birthday Bouquets',
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=800&auto=format&fit=crop',
    link: '#shop',
  },
  {
    id: 4,
    title: 'Anniversary Flowers',
    image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?q=80&w=800&auto=format&fit=crop',
    link: '#shop',
  },
  {
    id: 5,
    title: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?q=80&w=800&auto=format&fit=crop',
    link: '#shop',
  },
  {
    id: 6,
    title: 'Gift Hampers',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=800&auto=format&fit=crop',
    link: '#shop',
  },
];

export default function Categories() {
  return (
    <section className="section-padding" id="categories" style={{ backgroundColor: 'var(--color-white)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Curated Collection</span>
          <h2 className="section-title">Featured Categories</h2>
        </div>

        <div className="categories-grid">
          {CATEGORIES_DATA.map((cat) => (
            <div key={cat.id} className="category-card">
              <img src={cat.image} alt={cat.title} className="category-image" />
              <div className="category-overlay">
                <h3 className="category-title">{cat.title}</h3>
                <a href={cat.link} className="category-link">
                  View Collection 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
