import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SponsorSlider = () => {
  const sliderSettings = {
    infinite: true, // Loop the slides
    speed: 1000, // Transition speed in milliseconds
    slidesToShow: 4, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll on each navigation
    autoplay: true, // Enable autoplay
    autoplaySpeed: 100,
  };

  // Sample data for your slider
  const sliderData = [
    {
      image: "https://i.ibb.co/gtwSgFC/prs.png",
    },
    {
      image: 'https://i.ibb.co/sQ6gqJf/wp-favicon3-1.png',
    },
    {
      image: 'https://i.ibb.co/QMbrXjh/School-Of-Politics.png',
    },
    {
      image: 'https://startupxplore.com/uploads/ff8080816ca837ec016ca9da915c00dc-large.png',
    },
    {
      image: 'https://i.ibb.co/Ypx07jS/unnamed.jpg',
    },
    {
      image: 'https://i.ibb.co/F75RcvW/Jarvis-Logo-2-X2-ft.png',
    },
    {
      image: 'https://i.ibb.co/sWKHtXS/C3s-India-Default-Image.jpg',
    },
    {
      image: 'https://i.ibb.co/FBRyDsG/moolya.png',
    },
    {
      image: 'https://i.ibb.co/k1CNFr6/Bala-Janagraha.png',
    },
    {
      image: 'https://i.ibb.co/vhgbx4t/Taghive.png',
    },
    {
      image: 'https://i.ibb.co/R7H0cJd/CSTEP-Logo-Color.png',
    },
    {
      image: 'https://i.ibb.co/sgh2fFc/class-sathi.png',
    },
    {
      image: 'https://i1.wp.com/iasdelhi.org/wp-content/uploads/2018/06/forumIAS_logo.png',
    },
  ];

  return (
    <div className='sponsor-container'>
    <Slider {...sliderSettings}>
      {sliderData.map((slide, index) => (
        <div key={index} className="sponsor">

            <p className='slider-sponsor'><img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="sponsor-image"
            /></p>
        </div>
      ))}
    </Slider>
    </div>
  );
};

export default SponsorSlider;
