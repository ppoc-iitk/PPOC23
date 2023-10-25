import React, { useState,useEffect } from "react";
import './Gallery.css'

function Lightbox() {


  return (
<div className="grid-gallery">
  <div className="grid-item">
    <a href="Gallery/img1.png" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img1.png" loading="lazy" />
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img2.png" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img2.png" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img3.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img3.jpg" loading="lazy" />
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img4.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img4.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img5.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img5.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img6.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img6.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img7.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img7.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img8.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img8.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img9.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img9.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img10.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img10.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img11.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img11.jpg" loading="lazy"/>
    </a>
  </div>
  <div className="grid-item">
    <a href="Gallery/img12.jpg" target="_blank" data-lightbox="gridImage">
      <img src="Gallery/img13.jpg"loading="lazy" />
    </a>
  </div>
  
</div>

  );
}

export default Lightbox;