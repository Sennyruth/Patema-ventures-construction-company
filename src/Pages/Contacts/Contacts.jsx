import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import './Contacts.css';

// Initialize EmailJS
emailjs.init({
  publicKey: '39IbtrPf4QqUaNghl', // Replace with your public key
});

const Contacts = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Send message using EmailJS
    emailjs.send(
      'service_q3db7i9',
      'template_fm73rvs',
      {
        from_name: e.target.user_name.value,
        message: e.target.message.value,
        reply_to: e.target.user_email.value
      },
      '39IbtrPf4QqUaNghl'
    )
      .then(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Message sent successfully! We will get back to you soon.'
        });
        form.current.reset();
      })
      .catch((error) => {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again later.'
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="contacts-container"
    >
      <div className="contact-banner">
        <div className="banner-content">
          <h1>Get In Touch</h1>
          <p>Let's discuss your next project</p>
        </div>
      </div>
      
      <div className="contacts-grid">
        {/* Contact Form Section */}
        <div className="contact-form-wrapper">
          <div className="contact-form">
            <h2>Send us a Message</h2>
            {submitStatus.message && (
              <div className={`submit-status ${submitStatus.type}`}>
                {submitStatus.message}
              </div>
            )}
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="user_name" placeholder="Your Name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="user_email" placeholder="Your Email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
              </div>
              
              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="contact-info-wrapper">
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <span className="icon">📍</span>
              <span>Great wall phase 1,Business block, Beijing Road, Msa Rd.<br/>
P.O Box 10128 - 00200, Nairobi, Kenya.
</span>
            </div>
            
            <div className="info-item">
              <span className="icon">📞</span>
              <span>+254 -7032-98-702/ +254-7132-18-583</span>
            </div>
            
            <div className="info-item">
              <span className="icon">✉️</span>
              <span>patemaventuresltd@gmail.com<br/>muindemuthengi@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="location-form">
      <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63819.58069965185!2d36.84203099107945!3d-1.3420977931175675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGreat%20wall%2C%20Beijing%20Road%2C%20Mombasa%20Rd%20P.O%20Box%2010128%20-%2000200%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1747472635520!5m2!1sen!2ske" width="600" height="450"></iframe>
      </div>
    </motion.div>
  );
};

export default Contacts;