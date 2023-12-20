// components/Home.js
import React from 'react';
import Navbar from './navbar';

import './home.css';
// import './page1.css';
const Home = () => {
  return (
  <> <div className="home">
       
        <div className="background-image" style={{ backgroundImage: `url('https://i.postimg.cc/26kHfTKy/MainBG.jpg')` }}>
        <Navbar />
       
      </div>
</div></> 
  );
};

export default Home;