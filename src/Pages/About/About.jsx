// src/Pages/About/About.jsx
import React from 'react';
import HeroImage from '../../assets/PHOTO16.jpg';
import Emmanuel from '../../assets/Manu.jpg';
import Patricia from '../../assets/Patty.jpg';
import Wycliff from '../../assets/Wycliff.jpg';
import Ann from '../../assets/Ann.jpg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faAward, 
  faCertificate, 
  faHandshake, 
  faHeart,
  faUsers,
  faBuilding,
  faCheckCircle,
  faLeaf,
  faLaptop
} from '@fortawesome/free-solid-svg-icons';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "Eng. Emmanuel Muinde",
      position: "Executive Director",
      bio: "With over 20 years of experience in construction and project management.",
      image: Emmanuel
    },
    {
      name: "Patricia Kombo",
      position: "Project planning Lead",
      bio: "Specializes in large-scale commercial and residential projects.",
      image: Patricia
    },
    {
      name: "Wycliff Munyalo",
      position: "Construction Manager",
      bio: "Expert in structural engineering and sustainable construction.",
      image: Wycliff
    },
    {
      name: "Ann Nzambi",
      position: "Architect",
      bio: "Expert in structural engineering and sustainable construction.",
      image: Ann
    }
  ];

  const coreValues = [
    {
      icon: faHandshake,
      title: "Integrity",
      description: "We conduct our business with the highest ethical standards and transparency."
    },
    {
      icon: faHeart,
      title: "Quality",
      description: "We are committed to delivering excellence in every project we undertake."
    },
    {
      icon: faUsers,
      title: "Teamwork",
      description: "We believe in collaborative efforts and mutual respect."
    },
    {
      icon: faAward,
      title: "Innovation",
      description: "We embrace new technologies and innovative construction methods."
    }
  ];

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System Certification"
    },
    {
      title: "NCA-1",
      description: "National Construction Authority Category 1 Contractor"
    },
    {
      title: "NEMA",
      description: "Environmental Impact Assessment License"
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Image with Banner Content */}
      <div className="about-hero" style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Welcome to Patema Ventures Limited</h1>
            <h2>About Us</h2>
            <p>Your trusted partner in construction and real estate development. We are committed to excellence,
            innovation, and building relationships</p>
            <p className="tagline">Building Dreams, Creating Value</p>
          </motion.div>
        </div>
      </div>

      {/* Goals Section */}
      <section className="goals-section">
        <div className="container">
          <h2>Our Goals</h2>
          <div className="goals-grid">
            <motion.div 
              className="goal-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="goal-icon">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <h3>Quality Projects</h3>
              <p>Achieve a minimum of 95% client satisfaction rate
through the consistent delivery of highquality construction projects on time and within
budget</p>
            </motion.div>

            <motion.div 
              className="goal-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="goal-icon">
                <FontAwesomeIcon icon={faLeaf} />
              </div>
              <h3>Sustainability Initiatives</h3>
              <p>Incorporate sustainable practices in at least
              75% of our projects</p>
            </motion.div>

            <motion.div 
              className="goal-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="goal-icon">
                <FontAwesomeIcon icon={faLaptop} />
              </div>
              <h3>Technology Investment</h3>
              <p>Adopt advanced construction
technologies and software solutions to
improve project delivery.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container">
          <motion.div 
            className="history-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our History</h2>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2020</span>
                <h3>Company Founded</h3>
                <p>Established and registered with a vision to transform the construction industry in Kenya.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2021</span>
                <h3>Major Expansion</h3>
                <p>Expanded operations to cover commercial and residential construction.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2023</span>
                <h3>Industry Leadership</h3>
                <p>Became one of the leading construction companies in Kenya.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Leadership Team
          </motion.h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <motion.div 
                className="team-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="member-info">
                  <div className="member-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <h4>{member.position}</h4>
                    <p>{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <div className="container">
          <h2>Our Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <motion.div 
                className="certification-card"
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={faCertificate} className="cert-icon" />
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <motion.div 
                className="value-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <FontAwesomeIcon icon={value.icon} className="value-icon" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;