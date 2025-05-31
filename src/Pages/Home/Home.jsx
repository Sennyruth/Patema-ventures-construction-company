// Update Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../../assets/patema.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHardHat,
  faRuler,
  faPaintRoller,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  const testimonials = [
    {
      name: "Mr Kinoti",
      position: "Property Developer",
      content: "Patema Ventures delivered our commercial building project on time and within budget. Their attention to detail and quality of construction was impressive.",
      project: "Residencial/commercial building, Kitengela"
    },
    {
      name: "Stephen Mwalimu",
      position: "Homeowner",
      content: "The team's professionalism and quality of work in building our family home exceeded our expectations. They were responsive and kept us informed throughout the process.",
      project: "Residential House, Syokimau"
    },
    {
      name: "John Kieti",
      position: "Real Estate Manager",
      content: "Their expertise in construction and project management made our apartment complex development a success. The quality and timeliness of delivery were outstanding.",
      project: "Commercial building, Ngong"
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.img 
            src=  {Logo} 
            alt="Patema Ventures Logo" 
            className="hero-logo"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5 }}
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            PATEMA VENTURES LIMITED
          </motion.h1>
          <motion.p
            className="tagline"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            Implementing eco-friendly building
            practices, using sustainable materials:
            focusing on energy-efficient designs.
          </motion.p>
          <motion.div
            className="cta-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <Link to="/contact" className="cta-button primary">Get Free Quote</Link>
            <Link to="/portfolio" className="cta-button secondary">View Projects</Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Featured Projects Preview */}
      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <motion.div
            className="mission-box"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <h2>Our Mission</h2>
              <p>To deliver high-quality projects that meet
                the diverse needs of our clients while
                prioritizing safety, sustainability, ensuring
                that every structure we build enhances
                lives and contributes positively to the
                environment.</p>
            </div>
          </motion.div>

          <motion.div
            className="vision-box"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="content">
              <h2>Our Vision</h2>
              <p>Through our dedication to safety
                and responsible practices, we aim
                to inspire trust and set new
                standards for excellence in
                construction.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature">
            <FontAwesomeIcon icon={faHardHat} />
            <h3>Expert Team</h3>
            <p>Skilled professionals with years of experience</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faRuler} />
            <h3>Quality Work</h3>
            <p>Highest standards in construction and materials</p>
          </div>
          <div className="feature">
            <FontAwesomeIcon icon={faPaintRoller} />
            <h3>Timely Delivery</h3>
            <p>Projects completed on schedule</p>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="testimonials">
        <h2>Client Testimonials</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FontAwesomeIcon icon={faQuoteLeft} className="quote-icon" />
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-author">
                <h4>{testimonial.name}</h4>
                <p className="position">{testimonial.position}</p>
                <p className="project">{testimonial.project}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bottom-cta">
        <h2>Ready to Start Your Construction Project?</h2>
        <p>Let's build your vision together</p>
        <Link to="/contact" className="cta-button tertiary">Get Free Consultation</Link>
      </section>
    </div>
  );
};

export default Home;