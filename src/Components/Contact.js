import React from 'react';
import "./Contact.css"

export default function Contact() {
  return (
    <div className="page">
     <div  className="bg-image"
    style={{
      backgroundImage: "url(/back.jpg)",
      height: "20vh",
    }}>
      <h5>Do you have a question?</h5>
      <h1>Contact Us</h1>
      <h5>Feel free to get in touch with us!</h5>
    </div>
    <br></br>
      <div class="container text-center">
  <div class="content">
    <div class="col">
    <h2>Contact Info.</h2>
    <h5>Email us : ppoc@iitk.ac.in</h5>
    <br></br>
    </div>
    <div class="col">
    <div class="card">
      <div class="card-body">
      <form>
    <div class="col">
    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name"></input>
    </div>
    <hr></hr>
    <div class="col">
  <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Your Email Address "></input>
  <hr></hr>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter Your Message Here..."></textarea>
  <hr></hr>
  <button className="button">
        <h4>Send Message</h4>
      </button>
</div>
</form>
      </div>
    </div>
</div>
  </div>
</div>
<br></br>
    </div>
  )
}
