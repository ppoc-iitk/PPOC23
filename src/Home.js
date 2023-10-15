import React from 'react'
import './home.css';

export default function Home() {
  return (
    <>
      <br></br>


        <h1 className="heading">Our Team</h1><br></br><br></br>
        <h1 className='heading' style={{ textDecoration: "none",fontWeight:"normal",fontSize:"2.2em" }}>Our Faculty Advisor</h1><br></br><br></br>
        <div className='teamsection'>
        <div className="teamcard">
          <div className="card-image">
            <img src="faculty.jpg" alt="Profile" />
          </div>
          <p className="name">Dr. Pradeep Swarnakar</p>
          <p className='post'>FACULTY ADVIDOR</p>
          <div className="socials">
          <button className="linkedin"><a href="https://www.linkedin.com/in/pradip-swarnakar-168b9115/"><i className="fab fa-linkedin"></i></a></button>
            
          </div>
        </div>
        
      </div>
      <br></br>
      <center><div class="mb-4">
                <hr class="solid"/>
            </div></center>
      <br></br>
      <h1 className='heading' style={{ textDecoration: "none",fontWeight:"normal",fontSize:"2.2em" }}>Coordinators</h1><br></br><br></br>

        <div className='teamsection'>
        <div className="teamcard">
          <div className="card-image">
            <img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="Profile" />
          </div>
          <p className="name">Sourav Sharma</p>
          <p className="post">OVERALL Coordinator</p>
          <div className="socials">
          <button className="linkedin"><a href="https://www.linkedin.com/in/sourav-sharma-15b4bb223/"><i className="fab fa-linkedin"></i></a></button>
            <button className="github"><a href=""><i className="fab fa-facebook"></i></a></button>
            <button className="twitter"><a href=""><i className="fab fa-instagram"></i></a></button>
            <button className="pinterest"><a href="mailto:souravsh21@iitk.ac.in"><i className="fa fa-envelope"></i></a></button>
          </div>
        </div>
        <br></br><br></br>
        <div className="teamcard">
          <div className="card-image">
            <img src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="Profile" />
          </div>
          <p className="name">Suryansh Gaur</p>
          <p className="post">OVERALL Coordinator</p>
          <div className="socials">
          <button className="linkedin"><a href="https://www.linkedin.com/in/suryansh-gaur-4310741a0"><i className="fab fa-linkedin"></i></a></button>
          <button className="github"><a href=""><i className="fab fa-facebook"></i></a></button>
            <button className="twitter"><a href=""><i className="fab fa-instagram"></i></a></button>
            <button className="pinterest"><a href="mailto:suryanshg1@iitk.ac.in"><i className="fa fa-envelope"></i></a></button>
          </div>
        </div>
      </div>
      <center><button className='knowteam'><a href="/team">Know Our Full Team &nbsp;<i className='fa fa-arrow-right' aria-hidden="true"></i></a></button></center>
    </>
  )
}
