// src/Pages/Services/Services.jsx
import React from 'react';
import HeroImage from '../../assets/PHOTO17.jpg';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faRuler, 
  faCalculator,
  faBuilding,
  faWater,
  faHandshake,
  faChartLine,
  faPencilRuler
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const Services = () => {
  // Hero section background style
  const heroStyle = {
    backgroundImage: `url(${HeroImage})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  const services = [
    {
      icon: faRuler,
      title: "Structural & Architectural Design",
      description: "Comprehensive design services ensuring both structural integrity and architectural excellence.",
      features: [
        "Structural Engineering",
        "Architectural Planning",
        "3D Modeling",
        "Design Consultation"
      ]
    },
    {
      icon: faCalculator,
      title: "Bill of Quantities",
      description: "Detailed cost estimation and quantity surveying for accurate project budgeting.",
      features: [
        "Cost Estimation",
        "Material Quantification",
        "Budget Planning",
        "Value Engineering"
      ]
    },
    {
      icon: faBuilding,
      title: "Building Works",
      description: "Expert construction services for all types of building projects.",
      features: [
        "Commercial Buildings",
        "Residential Structures",
        "Renovations",
        "Structural Repairs"
      ]
    },
    {
      icon: faWater,
      title: "Water Works",
      description: "Complete water system solutions for construction projects.",
      features: [
        "Plumbing Systems",
        "Water Storage",
        "Drainage Solutions",
        "Water Treatment"
      ]
    },
    {
      icon: faHandshake,
      title: "General Contracting",
      description: "Comprehensive contracting services managing all aspects of construction projects.",
      features: [
        "Project Coordination",
        "Subcontractor Management",
        "Resource Allocation",
        "Quality Control"
      ]
    },
    {
      icon: faChartLine,
      title: "Project Management",
      description: "Professional project management ensuring timely and efficient project delivery.",
      features: [
        "Timeline Management",
        "Budget Control",
        "Risk Management",
        "Progress Monitoring"
      ]
    },
    {
      icon: faPencilRuler,
      title: "Design Build",
      description: "Integrated design and construction services for seamless project execution.",
      features: [
        "Unified Approach",
        "Cost Optimization",
        "Faster Delivery",
        "Single Point Contact"
      ]
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <motion.section 
        className="services-hero"
        style={heroStyle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          Comprehensive Construction Solutions for Every Need
        </motion.p>
      </motion.section>

      {/* Services Grid */}
      <section className="services-grid-section">
        <div className="container">
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                className="service-card"
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our Process</h2>
          <div className="process-steps">
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="step-number">1</div>
              <h3>Consultation</h3>
              <p>Initial meeting to understand your requirements and vision</p>
            </motion.div>
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p>Detailed project planning and resource allocation</p>
            </motion.div>
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p>Professional construction with regular updates</p>
            </motion.div>
            <motion.div 
              className="process-step"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="step-number">4</div>
              <h3>Delivery</h3>
              <p>Project completion and quality assurance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-hero">
        <div className="container">
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today for a free consultation and quote</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/contact'}
          >
            Get Started
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;