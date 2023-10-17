import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Components/Blog';
import Team from './Components/Team';
import Events from './Components/Events';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/events" element={<Events/>}></Route>
          <Route path="/team" element={<Team/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes> 
      </Router>
       

    <Footer/>
  </div>
  );
}

export default App;
