// components/Home.js
import React from 'react';
import Navbar from './navbar';

import './home.css';
// import './page1.css';
const Home = () => {
  return (
  <> <div className="home">
       
        <div className="background-image" style={{ backgroundImage: `url('https://i.postimg.cc/FHJzjJGL/conclave.pngg')` }}>
        <Navbar />
       
      </div>

      <div className="background-image" style={{ backgroundImage: `url('https://i.postimg.cc/NMx5KqDC/clock.jpg')` }}>
      <div className="vertical-align-container">
            <div className="left-aligned">LET'S</div>
            <div className="right-aligned">BEGIN</div>
          </div>
        {/* Add content for the second section */}
      </div>
</div></> 
  );
};

export default Home;