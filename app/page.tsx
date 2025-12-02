"use client";

import Image from "next/image";
import "./home.css";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="landing-wrapper">

      {/* ================= NAVBAR ================= */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="nav-left">Baker's cafe</div>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#menu">Menu</a>
            <a href="#offers">Offers</a>
            <a href="#service">Service</a>
            <a href="#restaurant">Restaurant</a>
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </nav>
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">

        <div className="hero-left">
          <h1 className="hero-title">
            The Real Taste of <br />
            <span className="red">Indian </span>
            <span className="yellow">Food</span>
          </h1>

          <p className="hero-sub">
            Enjoy authentic Indian flavors prepared fresh every day.
            Scan the QR code and start ordering instantly!
          </p>

          <button className="order-btn">Order Now</button>
        </div>

        <div className="hero-right">
          <Image
            src="/qr.png"
            alt="QR Phone"
            width={380}
            height={700}
            className="phone-img"
          />
        </div>
      </section>

      {/* ================= POPULAR DISHES ================= */}
      <section id="offers" className="food-section">
        <h2 className="food-heading">Popular Dishes</h2>

        <div className="food-grid">

          {/* CARD 1 */}
          <div className="food-card">
            <div className="badge">🔥</div>
            <img
              src="https://www.allrecipes.com/thmb/fyA4b7FSkQVBSWFaENsyA3zaJwo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3296611-d1799f167c4945e5a9133be468cbd123.jpg"
              className="food-img"
            />
            <h3 className="food-title">Grilled Chicken Rice</h3>
            <div className="food-info">
              <span>⭐ 4.8</span>
              <span>500rs</span>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="food-card">
            <div className="badge">🔥</div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTABgWjU4j_yVQZsZTK4Ha2Nr8GbuFQLZSpGw&s"
              className="food-img"
            />
            <h3 className="food-title">Veggie Bowl Delight</h3>
            <div className="food-info">
              <span>⭐ 4.5</span>
              <span>720rs</span>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="food-card">
            <div className="badge">🔥</div>
            <img
              src="https://www.allrecipes.com/thmb/phAmDHM3SQ7VobtBgRxVuKFRt8g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4306618-caribbean-spiced-roast-chicken-Allrecipes-Magazine-4x3-1-e2a73bd554ea471e92f4924d346d6bd6.jpg"
              className="food-img"
            />
            <h3 className="food-title">Spicy Roasted Chicken</h3>
            <div className="food-info">
              <span>⭐ 4.7</span>
              <span>880rs</span>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="food-card">
            <div className="badge">🔥</div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDr4kxmCFos8p2ZZKvRWd80pT8A7DJnmI-Jw&s"
              className="food-img"
            />
            <h3 className="food-title">Mixed Grill Platter</h3>
            <div className="food-info">
              <span>⭐ 4.6</span>
              <span>910rs</span>
            </div>
          </div>

          {/* CARD 5 */}
          <div className="food-card">
            <div className="badge">🔥</div>
            <img
              src="https://www.indianhealthyrecipes.com/wp-content/uploads/2023/07/vegetable-curry-recipe-480x270.jpg"
              className="food-img"
            />
            <h3 className="food-title">Veg Curry Bowl</h3>
            <div className="food-info">
              <span>⭐ 4.3</span>
              <span>640rs</span>
            </div>
          </div>

          {/* CARD 6 */}
          <div className="food-card">
            <div className="badge">🔥</div>
            <img
              src="https://recipes.timesofindia.com/thumb/61589069.cms?width=1200&height=900"
              className="food-img"
            />
            <h3 className="food-title">Crispy Chicken Fry</h3>
            <div className="food-info">
              <span>⭐ 4.9</span>
              <span>810rs</span>
            </div>
          </div>

        </div>
      </section>
 {/* ================= SERVICE SECTION ================= */}
      <section id="service" className="service-section">

        <h2 className="service-title">Our Services</h2>

        <div className="service-wrapper">

          {/* LEFT VIDEO */}
          <div className="service-left">
            <video
              src="/chef.mp4"
              className="chef-video"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          {/* RIGHT DETAILS */}
          <div className="service-right">

            <div className="service-item">
              <h3>🍽️ Fine Dining</h3>
              <p>Experience premium quality meals with authentic Indian spices.</p>
            </div>

            <div className="service-item">
              <h3>🚚 Fast Delivery</h3>
              <p>Get your food delivered hot and fresh anywhere in the city.</p>
            </div>

            <div className="service-item">
              <h3>👨‍🍳 Top Chefs</h3>
              <p>Our experienced chefs bring traditional Indian flavors.</p>
            </div>

            <div className="service-item">
              <h3>🎉 Event Catering</h3>
              <p>We cater for weddings, parties, and corporate events.</p>
            </div>

          </div>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
      <footer className="footer">

        <div className="footer-container">

          {/* LEFT */}
          <div className="footer-about">
            <h2 className="footer-logo">RAAM'S FOOD</h2>
            <p>
              Serving the best Indian flavors with fresh ingredients  
              and fast delivery across the city.
            </p>
          </div>

          {/* CENTER LINKS */}
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#offers">Offers</a></li>
              <li><a href="#service">Service</a></li>
              <li><a href="#restaurant">Restaurant</a></li>
            </ul>
          </div>

          {/* RIGHT — CONTACT FORM */}
          <div className="footer-form">
            <h3>Contact Us</h3>

            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea rows={4} placeholder="Your Message"></textarea>

              <button type="submit" className="footer-btn">Send Message</button>
            </form>
          </div>

        </div>

        <div className="footer-bottom">
          © 2025 Baker's cafe — All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}
