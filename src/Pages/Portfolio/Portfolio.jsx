import React from 'react';
import { motion } from 'framer-motion';
import CompleteImg from "../../assets/PHOTO2.jpg"
import CompleteImg2 from "../../assets/complete.jpg"
import CompleteImg3 from "../../assets/PHOTO3.jpg"
import CompleteImg4 from "../../assets/PHOTO14.jpg"
import CompleteImg5 from "../../assets/PHOTO15.jpg"
import CompleteImg6 from "../../assets/PHOTO7.jpg"
import OngoingImg from "../../assets/ongoing.jpg"
import OngoingImg2 from "../../assets/ongoing1.jpg"
import OngoingImg3 from "../../assets/PHOTO4.jpg"
import OngoingImg4 from "../../assets/ongoing2.jpg"
import OngoingImg5 from "../../assets/ongoing3.jpg"
import OngoingImg6 from "../../assets/ongoing4.jpg"
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Residential Home",
      status: "Completed",
      image: CompleteImg,
      
    },
    {
      id: 2,
      title: "Residential apartments",
      status: "Completed",
      image:CompleteImg2,
      
    },
    {
      id: 3,
      title: "Residential Home",
      status: "Completed",
      image: CompleteImg3,
      
    },
    {
      id: 4,
      title: "Residential Home",
      status: "Completed",
      image: CompleteImg4, 
      

    },
    {
      id: 5,
      title: "Interior Design",
      status: "Completed",
      image: CompleteImg5,
      
    },
    {
      id: 6,
      title: "Commercial Building",
      status: "Completed",
      image: CompleteImg6,
      
    },
    {
      id: 7,
      title: "Residential Home",
      status: "Ongoing",
      image: OngoingImg,
      
    },
    {
      id: 8,
      title: "Residential Home",
      status: "Ongoing",
      image: OngoingImg2,
      
    },
    {
      id: 9,  
      title: "Residential Home",
      status: "Ongoing",
      image: OngoingImg3,
      
    },
    {
      id: 10,
      title: "Rental apartments",
      status: "Ongoing",
      image: OngoingImg4,
      
    },
    {
      id: 11,
      title: "Commercial Building",
      status: "Ongoing",
      image: OngoingImg5,
      
    },
    {
      id: 12,
      title: "Residential Home",
      status: "Ongoing",
      image: OngoingImg6,
      
    }
  ];

  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">Our Projects</h1>
      
      <div className="projects-section">
        <h2>Completed Projects</h2>
        <div className="projects-grid">
          {projects
            .filter(project => project.status === "Completed")
            .map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="projects-section">
        <h2>Ongoing Projects</h2>
        <div className="projects-grid">
          {projects
            .filter(project => project.status === "Ongoing")
            .map(project => (
              <div key={project.id} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;