import React, { useEffect } from 'react';
import Section2 from './Policy Conclave/Section2';
import './PolicyConclave.css'
import './Policy Conclave/section.css'
import Home from './Policy Conclave/Home';

export default function PolicyConclave({ setShowNavbarAndFooter }) {
  useEffect(() => {
    setShowNavbarAndFooter(false); // Hide Navbar and Footer
    return () => {
      setShowNavbarAndFooter(true); // Show Navbar and Footer when leaving this component
    };
  }, [setShowNavbarAndFooter]);

  return (
    <>
      {/* <div class="policy-wrapper">
        <h1>coming soon<span class="dot">.</span></h1>
        <p>Policy Conclave.</p>
        <div class="icons">
          <a href="https://www.facebook.com/ppoc.iitk"><i class="fa fa-facebook"></i></a>
          <a href="https://www.linkedin.com/company/ppoc-iitk/mycompany/"><i class="fa fa-linkedin"></i></a>
          <a href="https://www.youtube.com/channel/UCL6N8QXTgLIdj2SzxYhHrag"><i class="fa fa-youtube-play"></i></a>
          <a href="https://www.instagram.com/ppoc_iitk/"><i class="fa fa-instagram"></i></a>
        </div>
      </div> */}
      <Home/>
      <Section2/>
    </>
    
  )
}
