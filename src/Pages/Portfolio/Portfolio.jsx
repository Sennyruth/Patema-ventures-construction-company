import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CompleteImg from "../../assets/PHOTO2.jpg"
import CompleteImg2 from "../../assets/complete.jpg"
import CompleteImg3 from "../../assets/PHOTO3.jpg"
import CompleteImg4 from "../../assets/PHOTO9.jpg"
import CompleteImg5 from "../../assets/PHOTO15.jpg"
import CompleteImg6 from "../../assets/PHOTO17.jpg"
import OngoingImg from "../../assets/ongoing.jpg"
import OngoingImg2 from "../../assets/ongoing1.jpg"
import OngoingImg3 from "../../assets/PHOTO4.jpg"
import OngoingImg4 from "../../assets/ongoing2.jpg"
import OngoingImg5 from "../../assets/ongoing3.jpg"
import OngoingImg6 from "../../assets/PHOTO5.jpg"
import Photo1 from "../../assets/PHOTO1.jpg"
import Photo5 from "../../assets/PHOTO5.jpg"
import Photo6 from "../../assets/PHOTO6.jpg"
import Photo8 from "../../assets/PHOTO8.jpg"
import Photo9 from "../../assets/PHOTO9.jpg"
import Photo10 from "../../assets/PHOTO10.jpg"
import Photo11 from "../../assets/PHOTO11.jpg"
import Photo12 from "../../assets/PHOTO12.jpg"
import Photo13 from "../../assets/PHOTO13.jpg"
import Photo16 from "../../assets/PHOTO16.jpg"
import Photo17 from "../../assets/PHOTO17.jpg"
import interiorImg from "../../assets/interior.jpg"
import interiorImg2 from "../../assets/interior4.jpg"
import roadImg from "../../assets/road.jpg"
import roadImg2 from "../../assets/road2.jpg"
import roadImg3 from "../../assets/road3.jpg"
import roadImg4 from "../../assets/road4.jpg"
import roadImg5 from "../../assets/road.jpg"
import drainageImg from "../../assets/drainage.jpg"
import drainageImg2 from "../../assets/drainage7.jpg"
import drainageImg4 from "../../assets/drainage2.jpg"
import drainageImg5 from "../../assets/drainage5.jpg"
import drainageImg6 from "../../assets/drainage6.jpg" 
import drainageImg7 from "../../assets/drainage1.jpg"
import designImg from "../../assets/design.jpg"
import designImg1 from "../../assets/design1.jpg"
import designImg2 from "../../assets/design2.jpg"
// import designImg3 from "../../assets/design3.jpg"
import designImg4 from "../../assets/design4.jpg"
import designImg5 from "../../assets/design5.jpg"
import designImg6 from "../../assets/design6.jpg"

import './Portfolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('completed');

  const filterButtons = [
    { id: 'completed', label: 'Completed Projects' },
    { id: 'ongoing', label: 'Ongoing Projects' },
    { id: 'design', label: 'Design Works' },
    { id: 'interior', label: 'Interior Design' },
    { id: 'roadworks', label: 'Roadworks' },
    { id: 'drainage', label: 'Drainage Works' }
  ];

  const projects = [
    // Ongoing Projects
    {
      id: 1,
      title: "Residential Complex",
      status: "Ongoing",
      category: "ongoing",
      image: OngoingImg,
    },
    {
      id: 2,
      title: "Modern Apartments",
      status: "Ongoing",
      category: "ongoing",
      image: OngoingImg2,
    },
    {
      id: 3,
      title: "Commercial Building",
      status: "Ongoing",
      category: "ongoing",
      image: OngoingImg3,
    },
    {
      id: 4,
      title: "Luxury Residences",
      status: "Ongoing",
      category: "ongoing",
      image: OngoingImg4,
    },
    {
      id: 5,
      title: "Office Complex",
      status: "Ongoing",
      category: "ongoing",
      image: OngoingImg5,
    },
    {
      id: 6,
      title: "Shopping Mall",
      status: "Ongoing",
      category: "ongoing",
      image: OngoingImg6,
    },

    // Design Works
    {
      id: 7,
      title: "Modern House Design",
      status: "Completed",
      category: "design",
      image: designImg ,
    },
    {
      id: 8,
      title: "Contemporary Office",
      status: "Completed",
      category: "design",
      image: designImg2,
    },
    {
      id: 9,
      title: "Residential Complex",
      status: "Completed",
      category: "design",
      image: designImg4,
    },
    {
      id: 10,
      title: "Urban Housing",
      status: "Completed",
      category: "design",
      image: designImg1,
    },
    {
      id: 11,
      title: "Commercial Center",
      status: "Completed",
      category: "design",
      image: designImg5,
    },
    {
      id: 12,
      title: "Mixed-Use Development",
      status: "Completed",
      category: "design",
      image: designImg6,
    },

    // Interior Design
    {
      id: 13,
      title: "Modern Living Room",
      status: "Completed",
      category: "interior",
      image: Photo11,
    },
    {
      id: 14,
      title: "Executive Office",
      status: "Completed",
      category: "interior",
      image: Photo12,
    },
    {
      id: 15,
      title: "Luxury Bedroom",
      status: "Completed",
      category: "interior",
      image: Photo13,
    },
    {
      id: 16,
      title: "Hotel Lobby",
      status: "Completed",
      category: "interior",
      image: interiorImg2 ,
    },
    {
      id: 17,
      title: "Restaurant Design",
      status: "Completed",
      category: "interior",
      image: CompleteImg5,
    },
    {
      id: 18,
      title: "Corporate Interior",
      status: "Completed",
      category: "interior",
      image:interiorImg ,
    },

    // Completed Projects
    {
      id: 19,
      title: "Residential Tower",
      status: "Completed",
      category: "completed",
      image: CompleteImg,
    },
    {
      id: 20,
      title: "Office Building",
      status: "Completed",
      category: "completed",
      image: CompleteImg2,
    },
    {
      id: 21,
      title: "Shopping Complex",
      status: "Completed",
      category: "completed",
      image: CompleteImg3,
    },
    {
      id: 22,
      title: "Apartment Complex",
      status: "Completed",
      category: "completed",
      image: CompleteImg4,
    },
    {
      id: 23,
      title: "Residential Development",
      status: "Completed",
      category: "completed",
      image: CompleteImg5,
    },
    {
      id: 24,
      title: "Commercial Center",
      status: "Completed",
      category: "completed",
      image: CompleteImg6,
    },

    // Roadworks
    {
      id: 25,
      title: "Highway Project",
      status: "Completed",
      category: "roadworks",
      image: roadImg,
    },
    {
      id: 26,
      title: "Urban Road Network",
      status: "Ongoing",
      category: "roadworks",
      image: roadImg2,
    },
    {
      id: 27,
      title: "Bridge Construction",
      status: "Completed",
      category: "roadworks",
      image: roadImg3,
    },
    {
      id: 28,
      title: "Road Expansion",
      status: "Ongoing",
      category: "roadworks",
      image: roadImg4,
    },
    {
      id: 29,
      title: "Infrastructure Development",
      status: "Completed",
      category: "roadworks",
      image:  roadImg4,
    },
    {
      id: 30,
      title: "Street Renovation",
      status: "Ongoing",
      category: "roadworks",
      image: roadImg5,
    },

    // Drainage Works
    {
      id: 31,
      title: "Storm Water System",
      status: "Completed",
      category: "drainage",
      image: drainageImg,
    },
    {
      id: 32,
      title: "Urban Drainage",
      status: "Ongoing",
      category: "drainage",
      image: drainageImg2,
    },
    {
      id: 33,
      title: "Flood Control",
      status: "Completed",
      category: "drainage",
      image: drainageImg7,
    },
    {
      id: 34,
      title: "Sewerage System",
      status: "Ongoing",
      category: "drainage",
      image: drainageImg4,
    },
    {
      id: 35,
      title: "Water Management",
      status: "Completed",
      category: "drainage",
      image: drainageImg5,
    },
    {
      id: 36,
      title: "Drainage Infrastructure",
      status: "Ongoing",
      category: "drainage",
      image: drainageImg6,
    }
  ];

  const filteredProjects = projects.filter(project => project.category === activeFilter);

  return (
    <div className="portfolio-container">
      <div className="portfolio-banner">
        <div className="banner-content">
          <h1>Our Portfolio</h1>
          <p>Discover our exceptional projects and innovative solutions in construction and design</p>
        </div>
      </div>
      <div className="portfolio-content">
        <div className="filter-buttons">
          {filterButtons.map(button => (
            <button
              key={button.id}
              className={`filter-button ${activeFilter === button.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(button.id)}
            >
              {button.label}
            </button>
          ))}
        </div>
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;