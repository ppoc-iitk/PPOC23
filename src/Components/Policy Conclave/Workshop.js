// components/Home.js
import React from "react";

import "./workshop.css";
// import './page1.css';
const Workshop = () => {
  return (
    <>
      <div className="pevent">
        <div className="background-image1">
          <center>
            <h1 className="h1">Workshops</h1>
          </center>
          <div className="flexbox1">
            <ul className="flex-card-list1">
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image1">
                    <img src="https://cdn.pixabay.com/photo/2017/04/18/02/22/vr-2237467__340.png" />
                  </div>
                  <div className="flex-card-content">
                    <h3 className="flex-card-heading">Talks</h3>
                    <p>
                      We host enlightening talks by eminent personalities and
                      engaging discussions to bring a positive social impact.
                      It's an attempt to engage the students with the challenges
                      of policy-making in contemporary society by fostering,
                      creating, and scrutinizing potential policy solutions to a
                      diverse range of critical societal issues. We also
                      organized “UPSC talks” , one of those which featured
                      Mr.Abhijeet Sinha an accomplished IAS officer and
                      distinguished alumnus of IIT KANPUR .....{" "}
                    </p>
                    <a href="#" className="flex-card-button">
                      Read More
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex-card-listitem">
                <div className="flex-card">
                  <div className="flex-card-image1">
                    <img src="https://cdn.pixabay.com/photo/2017/04/19/00/59/office-2240932__340.png" />
                  </div>
                  <div className="flex-card-content">
                    <h3 className="flex-card-heading">Panel Discussions</h3>
                    <p>
                      Public Policy and Opinion Cell organized engaging panel
                      discussions, featuring esteemed speakers. One such event
                      included Mrs. Navika Kumar, Editor-in-Chief of Times Now
                      Navbharat.The focus of the event was on the crucial role
                      of journalism in the democratic process, particularly
                      during elections. Recognizing journalism as a pillar of
                      democracy, the discussions emphasized its role in keeping
                      the public .....
                    </p>
                    <a href="#" className="flex-card-button">
                      Read More
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

export default Workshop;
