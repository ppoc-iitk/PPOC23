import React from 'react';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';



export default function Contact() {
  return (
    <div  className="bg-image"
    style={{
      backgroundImage: "url('https://free4kwallpapers.com/uploads/originals/2020/10/02/tessellation-in-turquoise-wallpaper.jpg')",
      height: "100vh",
    }}>
      <h1>CONTACT US</h1>
      <hr></hr>
      <br></br>
      <br></br>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    <div class="card">
    
  <img src="https://i.pinimg.com/originals/6f/fe/ae/6ffeae089199b045d0e52aa7aa69db14.gif" class="img-thumbnail"   alt="..."></img>
  <div class="card-body">
    <h3>Follow us on</h3>
    <hr></hr>
    <div class="row">
      <div class="col" style={{
      alignItems:"center"
    }}>
        <a href="https://www.instagram.com/ppoc_iitk/" >
       <InstagramIcon fontSize="large" />
        </a>
      </div>
      <div class="col" style={{
      alignItems:"center"
    }}>
        <a href="https://www.linkedin.com/company/sos-iitkanpur/">
        <LinkedInIcon fontSize="large"/>
        </a>
      </div>
      <div class="col" style={{
      alignItems:"center"
    }}>
        <a href="https://www.facebook.com/ppoc.iitk/">
        < FacebookIcon fontSize="large"/>
        </a>
      </div>
      <div class="col"></div>
    </div>
  </div>
</div>
    </div>
    
    <div class="col">
    <div class="card">
      <h3 class="card-header">Use this to give us your valuable response</h3>
      <div class="card-body">
      <form>
    <div class="col">
    <label for="exampleFormControlInput1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="name"></input>
    </div>
    <hr></hr>
    <div class="col">
  <label for="exampleFormControlInput2" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="name@example.com"></input>
  <hr></hr>
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <hr></hr>
  <Button variant="contained" endIcon={<SendIcon />}>
        <h4>Send</h4>
      </Button>
</div>
</form>
      </div>
    </div>
</div>
  </div>
</div>
    </div>
  )
}
