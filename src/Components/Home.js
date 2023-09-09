import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <>
    <div className='bg'>
    <h1 className="heading">Public Policy and<br></br>Opinion Cell</h1>
    <h2 className="quote">"There's Tremendous Gap Between Public<br></br> Opinion and Public Policy" - Noam Chomsky</h2>
    </div>
    <div className='about'>
    <div className='about_heading'>
      Public Policy and Opinion Cell IIT Kanpur is the first student-run public policy think-tank among all 23 IITs across the nation.
      </div>
      <div className='about_main'>
      PPOC conducts enlightening discussions and workshop sessions among students’ community regarding various socio-economic and political issues of national and international interest. Apart from the regular sessions we regularly publish blogs, newsletters and research articles on these important contemporary issues. These activities earn a tremendously optimistic rejoinder from the student's group and conclude with great notions.
      </div>
      </div>
    </>
  )
}