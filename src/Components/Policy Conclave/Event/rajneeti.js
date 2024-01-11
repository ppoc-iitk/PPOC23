// components/Home.js
import React from "react";

import "./eventspage.css";
const Event = () => {
  return (
    <>
      <div
        className="pevent"
        style={{
          backgroundImage: 'url("https://i.postimg.cc/jSdrmZx3/page.jpg")',
        }}
      >
        <div className="background-image1 eventpage">
          <div className="flexbox2">
            <div className="p-container">
              <h1>Rajneeti</h1>
              <br></br>
              <p>
                “Rajneeti” a dynamic political case study competition, unfolded
                within a grandeur of Policy Conclave 23, our flagship event.
                This collaboration endeavor featured a partnership with junta ka
                mood, a distinguished political consultancy firm. Entrants
                grappled with intricate problem statements within the realm of
                political consultancy, Undertaking the challenge to craft
                innovative strategies. Kaushangni modi, a discerning judge,
                lauded the entrants' solutions and strategies for their
                brilliance. The event witnessed an overwhelming response,
                showcasing a collective enthusiasm for insightful political
                discourse.
              </p>
              <img
                src="/Events/rajneeti.jpeg"
                alt="Description of your image"
              />
              <br></br>
            </div>
            <center>
              <div>
                <a href="https://unstop.com/p/rajneeti-a-political-case-study-competition-iit-kanpur-850904" className="register-button">
                  Register Now
                </a>
              </div>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
