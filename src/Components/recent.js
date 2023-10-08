import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slides
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each navigation
  };

  // Sample data for your slider
  const sliderData = [
    {
      image: "/image1.jpg",
      text: '"Celebrating the Birth of a Legend" Today, on the auspicious day of October 2, let us remember Bapu, who showed us the power of truth, non-violence, and love for all. His teachings continue to inspire us to be the change we wish to see in the world. His principles of non-violence and truth continue to inspire leaders and movements worldwide, promoting peaceful resistance and social change.',
    },
    {
      image: '/image2.jpg',
      text: 'Greetings from the Public Policy and Opinion Cell! Are you intrigued by a career in civil services? Or perhaps you \'re in search of that extra push or guidance to gear up for the challenging path ahead?So, we are coming up with \'INSPIRE\'. A seminar in association with @vision_ias where you\'ll get all your answers.',
    },
    {
      image: '/image3.jpg',
      text: 'Greetings from Public Policy and Opinion Cell, IIT Kanpur! Congratulations to Every Indian on the Successful landing of Chandrayaan 3 Rover \'Vikram\' on the South Pole of the Moon. India Has become the 4th Nation to land on Moon, and 1st to land on the South Pole. Kudos to ISRO and All the Supporting Agencies involved!',
    },
  ];

  return (
    <div className='slider-container'>
    <Slider {...sliderSettings}>
      {sliderData.map((slide, index) => (
        <div key={index} className="slider-slide">

            <p><img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
            {slide.text}</p>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default ImageSlider;
