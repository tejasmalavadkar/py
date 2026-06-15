import React from 'react';

const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Blushing Romance',
    category: 'Rose Bouquets',
    price: '$65.00',
    originalPrice: null,
    rating: 5,
    reviews: 24,
    image: 'https://images.unsplash.com/photo-1559734885-167b1239b98e?q=80&w=600&auto=format&fit=crop',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Pure Elegance',
    category: 'Wedding Flowers',
    price: '$85.00',
    originalPrice: '$95.00',
    rating: 5,
    reviews: 18,
    image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=600&auto=format&fit=crop',
    badge: 'Sale',
  },
  {
    id: 3,
    name: 'Lavender Dreams',
    category: 'Anniversary Flowers',
    price: '$55.00',
    originalPrice: null,
    rating: 4,
    reviews: 32,
    image: 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?q=80&w=600&auto=format&fit=crop',
    badge: null,
  },
  {
    id: 4,
    name: 'Sunshine Radiance',
    category: 'Birthday Bouquets',
    price: '$48.00',
    originalPrice: null,
    rating: 4,
    reviews: 15,
    image: 'https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=600&auto=format&fit=crop',
    badge: 'New',
  },
  {
    id: 5,
    name: 'Sage & Rose Symphony',
    category: 'Rose Bouquets',
    price: '$72.00',
    originalPrice: null,
    rating: 5,
    reviews: 19,
    image: 'https://images.unsplash.com/photo-1572451479139-6a308211d8be?q=80&w=600&auto=format&fit=crop',
    badge: null,
  },
  {
    id: 6,
    name: 'White Lily Serenade',
    category: 'Wedding Flowers',
    price: '$78.00',
    originalPrice: '$88.00',
    rating: 5,
    reviews: 14,
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?q=80&w=600&auto=format&fit=crop',
    badge: 'Sale',
  },
  {
    id: 7,
    name: 'Crimson Passion',
    category: 'Anniversary Flowers',
    price: '$90.00',
    originalPrice: null,
    rating: 5,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?q=80&w=600&auto=format&fit=crop',
    badge: 'Popular',
  },
  {
    id: 8,
    name: 'Garden Meadow',
    category: 'Gift Hampers',
    price: '$60.00',
    originalPrice: null,
    rating: 4,
    reviews: 27,
    image: 'https://images.unsplash.com/photo-1508789454646-bef72439f197?q=80&w=600&auto=format&fit=crop',
    badge: null,
  },
];

export default function BestSellers() {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg 
          key={i} 
          className={`star-icon ${i > rating ? 'empty' : ''}`} 
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <section className="section-padding" id="bestsellers" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Customer Favorites</span>
          <h2 className="section-title">Best Selling Products</h2>
        </div>

        <div className="products-grid">
          {PRODUCTS_DATA.map((product) => (
            <div key={product.id} className="product-card">
              {/* Image Container with Badges */}
              <div className="product-image-container">
                <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
                {product.badge && <span className="product-badge">{product.badge}</span>}
                <button className="product-wishlist" aria-label="Add to wishlist">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </button>
              </div>

              {/* Product Info */}
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                
                <div className="product-rating">
                  {renderStars(product.rating)}
                  <span className="product-reviews">({product.reviews} reviews)</span>
                </div>

                <div className="product-footer">
                  <div className="product-price">
                    {product.price}
                    {product.originalPrice && <span className="original">{product.originalPrice}</span>}
                  </div>
                  <button className="add-to-cart-btn" aria-label="Add to Cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
