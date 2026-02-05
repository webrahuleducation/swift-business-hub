import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { ArrowRight, Mail, Circle, ChevronDown, ChevronLeft, ChevronRight, Bell } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const scrollSliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic:
      // If we scroll down past 100px, set showNav to false (triggers absolute/scroll away)
      // If we scroll up, set showNav to true (triggers fixed/stick to screen)
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNav(false); 
      } else {
        setShowNav(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollPrograms = (direction) => {
    if (scrollSliderRef.current) {
      const scrollAmount = 400;
      scrollSliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };
  return (
    <div className="App">
      {/* Premium Container Wrapper */}
      <div className="premium-container !mx-[20px] !rounded-[20px]">
        {/* Navigation */}
        <nav className="navbar nav-visible !mt-[20px] !ml-[20px] !mr-[20px] !rounded-t-[20px] !rounded-b-[20px]">
          <div className="nav-container">
            <div className="nav-logo">
                <img 
                  src="/slrtsbm_Logo.png" 
                  alt="Logo" 
                  className="logo-img"
                />
              </div>
            
            <div className="nav-links">
              <a href="#about" className="nav-link">
                About Us <ChevronDown size={14} className="nav-arrow" />
              </a>
              <a href="#academics" className="nav-link">
                Academics <ChevronDown size={14} className="nav-arrow" />
              </a>
              <a href="#people" className="nav-link">
                People <ChevronDown size={14} className="nav-arrow" />
              </a>
              <a href="#slrtsbc" className="nav-link">
                SLRTCI&E <ChevronDown size={14} className="nav-arrow" />
              </a>
              <a href="#welfare" className="nav-link">
                Student Welfare <ChevronDown size={14} className="nav-arrow" />
              </a>
              <a href="#admissions" className="nav-link">
                Admissions <ChevronDown size={14} className="nav-arrow" />
              </a>
            </div>
            
            <div className="nav-actions">
              <button className="btn-apply-nav">Apply Now</button>
              <div className="profile-icon">
                <Bell size={25} strokeWidth={2} color="#FFFFFF" />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section !mt-[20px] !rounded-t-[20px] !rounded-b-[20px]">
          <div className="hero-container">
            <div className="hero-content">
              <div className="hero-left">
                <h1 className="hero-title !text-7xl !leading-[7rem]">Not Your Average <br/> B-School</h1>
              </div>
              <div className="hero-right !my-[50px]">
                <p className="statement-text !font-['Tahoma'] !text-left !mt-[0px] !text-[#FFFFFF]">Education must be Liberate, <br />Not Domesticate"</p>
                <button className="btn-enroll !font-thin !leading-[1rem] !mt-[20px]">ENROLL NOW </button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Program Card */}
        <section className="featured-section">
          <div className="featured-container">
            <div className="featured-card">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=300&fit=crop"
                alt="PGDM Program"
                className="featured-program-image" 
                />

              {/* <div className="program-badge">PGDM</div> */}
              <h3 className="program-title">PGDM (Multi-Specialisation)</h3>
              <p className="program-description">
                A comprehensive postgraduate program designed to shape versatile business leaders
              </p>
              <button className="btn-enroll-small">Enroll Now </button>
            </div>
            
            <div className="featured-quote">
              <h2 className="quote-text">
                "We Don't Produce Graduates;<br />
                We Nurture Thinkers Who<br />
                Redefine The Future."
              </h2>
              <button className="btn-explore-inverted !rounded-[50px] !text-[#000000] !bg-[#FCFCFC]">
                Explore More Courses <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Trust Strip */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="partner-tag">Nietzsche</div>
          <div className="partner-tag">GlobalBank</div>
          <div className="partner-tag">Spherule</div>
          <div className="partner-tag">FeatherDev</div>
          <div className="partner-tag">Lightbox</div>
        </div>
      </section>

      {/* Programs Section with Slider */}
      <section className="programs-section">
        <div className="programs-section-container">
        <div className="programs-container">
          <div className="programs-header">
            <h2 className="programs-title">Programs</h2>
            <p className="programs-subtitle">Undergraduate/Postgraduate</p>
          </div>
          
          <div className="programs-slider-wrapper">
            <button className="slider-arrow slider-arrow-left" onClick={() => scrollPrograms('left')}>
              <ChevronLeft size={24} />
            </button>
            
            <div className="programs-slider" ref={scrollSliderRef}>
              {/* Repeat cards twice for slider effect */}
              {[...Array(2)].map((_, setIndex) =>
              <React.Fragment key={setIndex}>
                  <div className="program-card">
                    <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop"
                    alt="BBA Program"
                    className="program-image" />

                    <div className="program-overlay">
                      <p className="program-type">Undergraduate Program</p>
                      <h3 className="program-name">BBA (Hons.)</h3>
                      <button className="btn-apply-program bg-[#0a5cda]">Apply Now</button>
                    </div>
                  </div>
                  
                  <div className="program-card">
                    <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                    alt="B.Sc. Management"
                    className="program-image" />

                    <div className="program-overlay">
                      <p className="program-type">Undergraduate Program</p>
                      <h3 className="program-name">B.Sc. Management</h3>
                      <button className="btn-apply-program bg-[#0a5cda]">Apply Now</button>
                    </div>
                  </div>
                  
                  <div className="program-card">
                    <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                    alt="PGDM Finance"
                    className="program-image" />

                    <div className="program-overlay">
                      <p className="program-type">Postgraduate Program</p>
                      <h3 className="program-name">PGDM Finance</h3>
                      <button className="btn-apply-program bg-[#FF7A18]">Apply Now</button>
                    </div>
                  </div>
                  
                  <div className="program-card">
                    <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=600&h=400&fit=crop"
                    alt="PGDM Business Analytics"
                    className="program-image" />

                    <div className="program-overlay">
                      <p className="program-type">Postgraduate Program</p>
                      <h3 className="program-name">PGDM Business Analytics</h3>
                      <button className="btn-apply-program bg-[#FF7A18]">Apply Now</button>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </div>
            
            <button className="slider-arrow slider-arrow-right" onClick={() => scrollPrograms('right')}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        </div>
      </section>

      {/* Spacer before philosophy */}
      <div className="philosophy-spacer"></div>

      {/* Philosophical Banner */}
      <section className="philosophy-section !mt-[0px] !ml-[20px] !mr-[20px] !rounded-t-[20px]">
        <div className="philosophy-container-new">
          <h2 className="!text-[5.5rem] !leading-[7rem] !tracking-[0em] !mt-[0px] !mb-[10px] !text-[#FFFFFF]">
            Education must be Liberate, Not Domesticate
          </h2>
          <div className="newsletter-section-below">
            <p className="newsletter-label !text-3xl !mb-[20px] !text-[#FFFFFF]">Subscribe to our newsletter</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Enter your email" className="newsletter-input" />

              <button className="btn-subscribe">Subscribe</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer !mt-[0px] !mb-[20px] !ml-[20px] !mr-[20px] !rounded-b-[20px]">
        <div className="footer-container">
          <div className="footer-column">
            <h4 className="footer-heading">About</h4>
            <a href="#" className="footer-link">Our Management</a>
            <a href="#" className="footer-link">Who We Are</a>
            <a href="#" className="footer-link">Vision & Mission</a>
            <a href="#" className="footer-link">About SLRTSBM</a>
            <a href="#" className="footer-link">Quality Assurance & Accreditation</a>
            <a href="#" className="footer-link">Recognitions</a>
            <a href="#" className="footer-link">People</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Academics</h4>
            <a href="#" className="footer-link">Academic Programs</a>
            <a href="#" className="footer-link">Curriculum</a>
            <a href="#" className="footer-link">Faculty</a>
            <a href="#" className="footer-link">Research & Innovation</a>
            <a href="#" className="footer-link">Academic Calendar</a>
            <a href="#" className="footer-link">Examinations</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Programs</h4>
            <a href="#" className="footer-link">Undergraduate</a>
            <a href="#" className="footer-link"> <ChevronRight size={15} strokeWidth={2} color="#0a5cda" /> BBA (Hons.)</a>
            <a href="#" className="footer-link"> <ChevronRight size={15} strokeWidth={2} color="#0a5cda" /> B.Sc. Management</a>
            <a href="#" className="footer-link">Postgraduate [PGDM]</a>
            <a href="#" className="footer-link"> <ChevronRight size={15} strokeWidth={2} color="#0a5cda" />Multi Specialisation</a>
            <a href="#" className="footer-link"> <ChevronRight size={15} strokeWidth={2} color="#0a5cda" />Business Analytics</a>
            <a href="#" className="footer-link"> <ChevronRight size={15} strokeWidth={2} color="#0a5cda" />Finance</a>
            <a href="#" className="footer-link"> <ChevronRight size={15} strokeWidth={2} color="#0a5cda" />Digital Marketing</a>
            <a href="#" className="footer-link"> <ChevronRight size={15} strokeWidth={2} color="#0a5cda" />Cyber Law</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">SLRTSBM</h4>
            <a href="#" className="footer-link">Frontline Health Director</a>
            <a href="#" className="footer-link">Advisory Board</a>
            <a href="#" className="footer-link">Campus</a>
            <a href="#" className="footer-link">Events</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Student Welfare</h4>
            <a href="#" className="footer-link">Anti-Ragging Info</a>
            <a href="#" className="footer-link">Scholarships</a>
            <a href="#" className="footer-link">Internal Complaints</a>
          </div>
          
          <div className="footer-column">
            <h4 className="footer-heading">Admissions</h4>
            <a href="#" className="footer-link">Admission Process</a>
            <a href="#" className="footer-link">How to Apply</a>
            <a href="#" className="footer-link">FAQ</a>
          </div>
        </div>
      </footer>
    </div>);}

export default App;