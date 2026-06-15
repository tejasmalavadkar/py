import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/src/assets/logo.svg" alt="Bloom Haven Logo" className="footer-logo-img" />
              <span className="footer-logo-title">Bloom Haven</span>
            </div>
            <p className="footer-desc">
              Crafting premium floral moments that inspire. Delivering fresh, seasonal, and custom flower arrangements right to your doorstep.
            </p>
            <div className="footer-socials">
              {/* Facebook */}
              <a href="#facebook" className="footer-social-link" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#instagram" className="footer-social-link" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              {/* Pinterest */}
              <a href="#pinterest" className="footer-social-link" aria-label="Pinterest">
                <svg viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 .0-2.9.2-.9 1.4-6.1 1.4-6.1s-.4-.7-.4-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.8 1.5 1.7 0 1-.6 2.6-.9 4-.3 1.2.6 2.2 1.8 2.2 2.1 0 3.7-2.2 3.7-5.5 0-2.9-2.1-4.9-5.1-4.9-3.5 0-5.5 2.6-5.5 5.3 0 1 .4 2.2 1 2.9.1.1.1.2.1.3-.1.4-.3 1.2-.3 1.3 0 .1-.1.2-.3.1-1.3-.6-2.1-2.5-2.1-4 0-3.3 2.4-6.3 6.9-6.3 3.6 0 6.4 2.6 6.4 6 0 3.6-2.3 6.5-5.4 6.5-1.1 0-2.1-.6-2.4-1.2 0 0-.5 2-.6 2.4-.2.8-.8 1.9-1.2 2.6 1 .3 2.1.5 3.2.5 5.5 0 10-4.5 10-10S17.5 2 12 2z"/></svg>
              </a>
              {/* Twitter */}
              <a href="#twitter" className="footer-social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-column-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#categories">Featured Categories</a></li>
              <li><a href="#bestsellers">Shop Collection</a></li>
              <li><a href="#whychooseus">Why Choose Us</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="footer-column-title">Customer Care</h4>
            <ul className="footer-links">
              <li><a href="#shipping">Shipping & Delivery</a></li>
              <li><a href="#returns">Returns & Refunds</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#care">Flower Care Guide</a></li>
              <li><a href="#contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="footer-column-title">Contact Info</h4>
            <ul className="footer-info">
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                <span>100 Floral Gardens Ave, Bloomtown, NY 10001</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                <span>support@bloomhaven.com</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span>Mon - Sun: 8:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Bloom Haven Flower Shop. All Rights Reserved. Crafted with love for elegant spaces.</p>
        </div>
      </div>
    </footer>
  );
}
