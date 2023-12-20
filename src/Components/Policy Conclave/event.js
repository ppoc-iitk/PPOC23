import React from "react";
import "./event.css";

const Event = () => {
  return (
    <>
      <div className="pevent" id="pevents">
        <div className="background-image1">
          <center>
            <h1 className="h1">Events</h1>
          </center>
          <div className="flexbox">
            <ul className="flex-card-list">
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/04/16/19/18/mug-2235591__340.png" />
                  </div>
                  <div className="flex-card-content">
                    <h3 className="flex-card-heading">Rajneeti</h3>
                    <a href="/policyconclave/rajneeti" className="flex-card-button">
                      READ MORE
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/04/18/02/24/mail-2237468__340.png" />
                  </div>
                  <div className="flex-card-content">
                    <h3 className="flex-card-heading">Lokniti</h3>
                    <a href="/policyconclave/lokneeti" className="flex-card-button">
                      READ MORE
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/04/28/01/43/cheese-2267165__340.png" />
                  </div>
                  <div className="flex-card-content">
                    <h3 className="flex-card-heading">MUN</h3>
                    <a href="/policyconclave/mun" className="flex-card-button">
                      READ MORE
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/04/18/02/22/vr-2237467__340.png" />
                  </div>
                  <div className="flex-card-content">
                    <h3 className="flex-card-heading">Book Fair</h3>
                    <a href="/policyconclave/bookfair" className="flex-card-button">
                      READ MORE
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image">
                    <img src="https://cdn.pixabay.com/photo/2017/04/19/00/59/office-2240932__340.png" />
                  </div>
                  <div className="flex-card-content">
                    <h3 className="flex-card-heading">Videsh Neeti</h3>
                    <a href="/policyconclave/videshneeti" className="flex-card-button">
                      READ MORE
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
