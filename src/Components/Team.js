// App.js
import React from 'react';
import data from './data.json'; // Your JSON data here
import './team.css';

const Card = ({ title, items }) => {
  return (
    <div>
      <h2>{title}</h2><br></br>
      <div className="card-container">
        {items.map(item => (
          <div className="col-sm-6 col-lg-3 my-auto" key={item.id}>
            <div className="box shadow-sm p-4">
              <div className="image-wrapper mb-3">
                <img className="img-fluid" src="https://images.pexels.com/photos/555790/pexels-photo-555790.png" alt="..." />
              </div>
              <div className="box-desc">
                <h4>{item.name}</h4>
                <h5>{item.vertical}</h5>
                <p><a href={item.email} target="_blank" rel="noopener noreferrer" >{item.email}</a></p>
                <ul id="ul"className="social">
                  <li><a href={item.linkedin} target="_blank" rel="noopener noreferrer" ><img src="linkedin.png" alt="LinkedIn" width="30px" height="30px" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <><br></br><h1>Meet Our Team</h1>
    <div className="center-content"><br></br>
      <Card title="Coordinators" items={data.coordi} /><br></br><br></br><br></br>
      <Card title="Managers" items={data.manager} />
    </div></>
  );
}

export default App;
