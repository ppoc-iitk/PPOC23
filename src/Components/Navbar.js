import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Navbar2.css';
  

function Menubar() {
  return (
    <Navbar sticky="top" bg="dark" expand="lg" id="menubar">
      <Container>
        <Navbar.Brand href="/">
            <img class="iitk" src="https://i.postimg.cc/90z57Xsv/IIT-K-logo.jpg" alt="" />
          <img id="ppoc-logo" src="https://i.postimg.cc/bYRs0mWg/ppoc-logo.png" alt="Logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-center navaa">
        
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/policyconclave" target="_blank">Policy Conclave</Nav.Link>
            <Nav.Link href="/#speakers">Speakers</Nav.Link>
            <Nav.Link href="/blog">Articles</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            {/* <Nav.Link href="#gallery">Gallery</Nav.Link> */}
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;