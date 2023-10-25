import './App.css';
import { useState, useEffect } from "react";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from './Components/Blog';
import Team from './Components/Team';
import Events from './Components/Events';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import HashLoader from "react-spinners/HashLoader";


function App() {
  const[loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])

  return (
    <div className="App">
      {
        loading ?
        <center className='center'><HashLoader
        color={'#274561'}
        loading={loading}
        size={80}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></center>
        :
        <><Router>

        <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/blog" element={<Blog/>}></Route>
            <Route path="/events" element={<Events/>}></Route>
            <Route path="/team" element={<Team/>}></Route>
            <Route path="/projects" element={<Projects/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes> 
      </Router>
       

    <Footer/></>
    }
  </div>
  );
}

export default App;
