import React from 'react';

function Slide({ index, prevSlide, nextSlide, slide_image }) {
  return (
    <div className="home-slide col-xl-12 col-lg-12 col-md-12 col-sm-12">
      {index > 0 && (
        <button className="prev-btn" onClick={prevSlide}>
          &#10094;
        </button>
      )}
      <img
        src={slide_image[index].img}
        alt="slide"
        className="slider-image"
      />
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default Slide;
