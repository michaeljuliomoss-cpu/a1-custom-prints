export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">A1<span className="dot"></span></div>
            <p style={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '350px' }}>
              Custom DTF printing and embroidery services in The Bahamas.
              Premium products, personalized for you.
            </p>
          </div>
          <div>
            <h4>Categories</h4>
            <ul>
              <li><a href="/category/dtf-tshirts">DTF T-Shirts</a></li>
              <li><a href="/category/corporate-shirts">Corporate Shirts</a></li>
              <li><a href="/category/school-uniforms">School Uniforms</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+12424548112">(242) 454-8112</a></li>
              <li><a href="mailto:designerprinting001@gmail.com">designerprinting001@gmail.com</a></li>
              <li><a href="/contact">Get a Quote</a></li>
              <li>Nassau, The Bahamas</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} A1 Custom Prints & Embroidery. All rights reserved.</span>
          <span>Custom prints & embroidery · Nassau, The Bahamas</span>
        </div>
      </div>
    </footer>
  );
}
