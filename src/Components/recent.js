import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slides
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each navigation
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
  };

  // Sample data for your slider
  const sliderData = [
    {
      image: "/image1.jpg",
      text: '"Celebrating the Birth of a Legend" Today, on the auspicious day of October 2, let us remember Bapu, who showed us the power of truth, non-violence, and love for all. His teachings continue to inspire us to be the change we wish to see in the world. His principles of non-violence and truth continue to inspire leaders and movements worldwide, promoting peaceful resistance and social change.',
      link:"https://www.instagram.com/p/Cx3gzmLIt1Y/",
    },
    {
      image: '/image2.jpg',
      text: 'Greetings from the Public Policy and Opinion Cell! Are you intrigued by a career in civil services? Or perhaps you \'re in search of that extra push or guidance to gear up for the challenging path ahead?So, we are coming up with \'INSPIRE\'. A seminar in association with @vision_ias where you\'ll get all your answers.',
      link:"https://www.instagram.com/p/CxukNi-gAhP/",
    },
    {
      image: '/image3.jpg',
      text: 'Greetings from Public Policy and Opinion Cell, IIT Kanpur! Congratulations to Every Indian on the Successful landing of Chandrayaan 3 Rover \'Vikram\' on the South Pole of the Moon. India Has become the 4th Nation to land on Moon, and 1st to land on the South Pole. Kudos to ISRO and All the Supporting Agencies involved!',
      link:"https://www.instagram.com/p/CwVHgsQIGY1/",
    },
  ];

  return (
    <div className='slider-container'>
    <Slider {...sliderSettings}>
      {sliderData.map((slide, index) => (
        <div key={index} className="slider-slide">

            <p className='slider-content'><img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
            <div className='slider-text'>{slide.text}</div></p>
            <a href={slide.link} class="blog-btn">Read More</a>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ImageSlider;
