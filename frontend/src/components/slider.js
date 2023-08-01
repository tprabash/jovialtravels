import React, { useState, useEffect } from "react";
import Slider1 from '../assats/img/Header_new_jovial.jpg'
import Slider2 from '../assats/img/joali_lily_banner.jpg'
import Slider3 from '../assats/img/honeymoon_banner.jpg'


const slides = [
  {
    id: 1,
    title: "At Jovial, We Understand Travel.",
    content: "We ensure our guests are treated to only the crème of private villas and luxury travel to the Maldives.",
    imageUrl:"https://jovialtravels.com" + Slider1,
  },

  {
    id: 2,
    title: "At Jovial, We Understand Travel.",
    content: "We ensure our guests are treated to only the crème of private villas and luxury travel to the Maldives.",
    imageUrl:"https://jovialtravels.com" + Slider2,
  },
  {
    id: 3,
    title: "At Jovial, We Understand Travel.",
    content: "We ensure our guests are treated to only the crème of private villas and luxury travel to the Maldives.",
    imageUrl:"https://jovialtravels.com" + Slider3,
  },

];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide === slides.length - 1 ? 0 : currentSlide + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${
            index === currentSlide ? "active" : "inactive"
          }`}
          style={{ backgroundImage: `url(${slide.imageUrl})` }}
        >
          <div className="content text-center">
            <h1 className="text-white">{slide.title}</h1>
            <p className="text-white">{slide.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
