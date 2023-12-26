import React from 'react';

import './workshop.css';
const Workshop = () => {
  return (
    <>

      <div className="pevent" id='workshop'>
        <div className="background-image1"><center><h1 className='phead'>Workshops</h1></center>
          <div className="flexbox1">
            <div className="p-box">
              <div className="eblock">
                <div className="overlap">

                  <button className="read-button">
                    <div className="overlap-group">
                      <div className="text-wrapper">Read more</div>
                    </div>
                  </button>
                  <div className="div"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Be a Politician &nbsp;&nbsp;&nbsp; &nbsp; </div>
                  <img className="image-sed-law" alt="Image sed law" src="workshop1.jpg" />
                </div>
              </div>
            </div>
            <div className="p-box">
              <div className="eblock">
                <div className="overlap">

                  <button className="read-button">
                    <div className="overlap-group">
                      <div className="text-wrapper">Read more</div>
                    </div>
                  </button>
                  <div className="div">Data Analysis and Strategy making</div>
                  <img className="image-sed-law" alt="Image sed law" src="workshop2.jpg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></>
  );
};

export default Workshop;