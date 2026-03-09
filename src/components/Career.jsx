import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight, FaSearch, FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Career.css';

const jobsData = [
  {
    id: 1,
    title: 'Senior Video Editor',
    department: 'Video & Animation',
    location: 'Remote / Austin, TX',
    type: 'Full Time',
    description: 'We are looking for a creative Senior Video Editor to join our team. You will be responsible for color grading, cinematic cuts, and storytelling for diverse global clients.'
  },
  {
    id: 2,
    title: 'UI/UX Designer',
    department: 'Graphics & UI/UX',
    location: 'Remote',
    type: 'Full Time',
    description: 'Join our design team to create bespoke user experiences for websites and mobile apps. You should have a strong portfolio focused on seamless user journeys.'
  },
  {
    id: 3,
    title: 'Senior Web Developer',
    department: 'Web Design & Development',
    location: 'Austin, TX',
    type: 'Full Time',
    description: 'Seeking a developer with expertise in React and Node.js to build high-performance E-commerce solutions and custom business websites.'
  },
  {
    id: 4,
    title: 'SEO Specialist',
    department: 'SEO & Digital Marketing',
    location: 'Remote',
    type: 'Contract',
    description: 'Help our clients outrank their competitors through strategic on-page, technical, and local SEO services.'
  },
  {
    id: 5,
    title: 'Technical Support Executive',
    department: 'Admin & Technical Support',
    location: 'Remote',
    type: 'Full Time',
    description: 'Provide 24/7 technical maintenance and support for our global client base. Strong communication and problem-solving skills are a must.'
  }
];

const departments = [
  'All Departments',
  'Video & Animation',
  'Web Design & Development',
  'Graphics & UI/UX',
  'SEO & Digital Marketing',
  'Admin & Technical Support'
];

const Career = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === 'All Departments' || job.department === selectedDept;
    return matchesSearch && matchesDept;
  });

  return (
    <div className="career-page">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="container">
          <h1 className="hero-title">Careers</h1>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <FaChevronRight className="breadcrumb-separator" />
            <span>Careers</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="career-intro">
        <div className="container">
          <div className="intro-content">
            <span className="section-subtitle">Join Our Team</span>
            <h2 className="section-title">Sparking Global Success <br /> Starts With You</h2>
            <p className="section-description">
              At Brownsofts, we are always looking for talented individuals who are passionate about technology and innovation. 
              Join a team praised for professionalism and dedication, and help us deliver exceptional digital solutions to clients worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="job-filter-section">
        <div className="container">
          <div className="filter-card">
            <div className="career-search-box">
              <FaSearch className="career-search-icon" />
              <input 
                type="text" 
                placeholder="Search job title..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="dept-filter">
              <select 
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
              >
                {departments.map((dept, index) => (
                  <option key={index} value={dept}>{dept}</option>
                ))}
              </select>
            </div>
            <button className="search-btn">Find Job</button>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="job-listings-section">
        <div className="container">
          <div className="listings-grid">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-card-header">
                    <h3 className="job-title">{job.title}</h3>
                    <span className="job-dept">{job.department}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <div className="job-meta">
                    <span className="meta-item"><FaMapMarkerAlt /> {job.location}</span>
                    <span className="meta-item"><FaClock /> {job.type}</span>
                  </div>
                  <button className="apply-btn">Apply Now</button>
                </div>
              ))
            ) : (
              <div className="no-jobs">
                <h3>No positions found matching your criteria.</h3>
                <p>Try adjusting your search or department filters.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application / Resume Section */}
      <section className="resume-section">
        <div className="container">
          <div className="resume-grid">
            <div className="resume-content">
              <h2 className="resume-title">Don't miss any opportunity <br /> to get hired</h2>
              <p className="resume-text">
                Sign up and submit your resume in our system. We will notify you if there is any match for you.
              </p>
              <div className="resume-features">
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Receive job notifications</span>
                </div>
                <div className="feature-item">
                  <div className="feature-check">✓</div>
                  <span>Expert career guidance</span>
                </div>
              </div>
            </div>
            <div className="resume-form-card">
              <form className="resume-form">
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <div className="file-input-wrapper">
                    <button type="button" className="file-btn">Upload Resume</button>
                    <input type="file" />
                  </div>
                </div>
                <div className="form-terms">
                  <input type="checkbox" id="terms" required />
                  <label htmlFor="terms">I agree to the Terms & Services</label>
                </div>
                <button type="submit" className="submit-resume-btn">Submit Application</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Career;
