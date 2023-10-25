import React from 'react'
import './Home.css'
import ImageSlider from '../Components/recent'
import SponsorSlider from '../Components/sponsor'
import BlogSlider from '../Components/BlogSlider'
import ProjectSlider from '../Components/ProjectSlider'
import Teamsection from './teamsection'
import Gallery from '../Components/Gal'
export default function Home() {
  return (
    <>
      <div className='bg'>
        <h1 className="heading">Public Policy and<br></br>Opinion Cell</h1>
        <h2 className="quote">"There's Tremendous Gap Between Public<br></br> Opinion and Public Policy" - Noam Chomsky</h2>
      </div>
      <div className='about' id='about'>
        <h1 className='about-title'>About us</h1>

        <div className="content-container">
          <div className="imag"><img src="about.png"></img></div>
          <div className="text-container">
            <div className='about_heading'>
              Public Policy and Opinion Cell IIT Kanpur is the first student-run public policy think-tank among all 23 IITs across the nation.
            </div>
            <div className='about_main'>
              PPOC conducts enlightening discussions and workshop sessions among students’ community regarding various socio-economic and political issues of national and international interest. Apart from the regular sessions, we regularly publish blogs, newsletters, and research articles on these important contemporary issues. These activities earn a tremendously optimistic rejoinder from the student's group and conclude with great notions.
            </div><br></br>
            <button className='read-more-button'>Read More</button>
          </div>
        </div>
      </div>
      <div className='recent-activities'>
        <h1 className='recent-title'>Recent Activities</h1>
        <div className='slider'>
          <ImageSlider />
        </div>
      </div>

      <img src="https://i.postimg.cc/W16tbDyh/Vector.png" alt="" className='vector' />
      <div className='Articles'>
        <h1 className='recent-title'>Articles</h1>
        <div className='blog-slider'>
          <BlogSlider />
        </div>
      </div><br></br><br></br>
      <div className='Articles'>
        <h1 className='recent-title'>Our Projects</h1>
        <div className='blog-slider'>
          <ProjectSlider />
        </div>
      </div><br></br>
      <div className='Articles'>
        <h1 className='recent-title'>Our Team</h1>
        <div className='blog-slider'>
          <Teamsection />
        </div>
      </div><br></br><br></br>
      <h1 id='gallery' className='gallery-head'>Our Gallery</h1>
      <Gallery />

      <div className='recent-activities'>
        <h1 className='recent-title'>Our Past Sponsors</h1><br></br>
        <div className='slider1'>
          <SponsorSlider />
        </div>
      </div>
      <img src="https://i.postimg.cc/85sCHZz6/Vector2.png" alt="" className='vector' />

    </>
  )
}
