// Banner.jsx

import React, { useState, useEffect } from "react";
import { useRef } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef([]);
  const totalSlides = slidesRef.current.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000); // 4 seconds delay
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        <div
          ref={(el) => (slidesRef.current[0] = el)}
          className="w-full flex-shrink-0"
        >
          <div className="banner-text bg-gray-800 text-white p-8">
            📣 <strong>JobBoardAI</strong> is OUT NOW! Tailor Your Resume &
            Cover Letter To Job Applications INSTANTLY (For FREE)
            <a
              href="https://www.wonsulting.ai/jobboardai?seg_id=01J6GY8D6FG9A36BHYRSE099HM.16144.1725187391922"
              className="link-2 text-blue-400"
            >
              <strong>JobBoardAI</strong>
            </a>
          </div>
        </div>
        <div
          ref={(el) => (slidesRef.current[1] = el)}
          className="w-full flex-shrink-0"
        >
          <div className="banner-text bg-gray-800 text-white p-8">
            📣 Introducing
            <a
              href="https://www.wonsulting.ai/jobtrackerai?seg_id=01J6GY8D6FG9A36BHYRSE099HM.16144.1725187391922"
              className="link-2 text-blue-400"
            >
              <strong>JobTrackerAI</strong>
            </a>
            - Track All Your Job Applications For Free (No Credit Card Required)
            😎
          </div>
        </div>
        <div
          ref={(el) => (slidesRef.current[2] = el)}
          className="w-full flex-shrink-0"
        >
          <div className="banner-text bg-gray-800 text-white p-8">
            📣 <strong>Introducing</strong>
            <a
              href="https://www.wonsulting.ai/interviewai?seg_id=01J6GY8D6FG9A36BHYRSE099HM.16144.1725187391922"
              className="link-2 text-blue-400"
            >
              <strong>InterviewAI</strong>
            </a>
            - Practice Your First Interview Free (No Credit Card Required) 😎
          </div>
        </div>
        <div
          ref={(el) => (slidesRef.current[3] = el)}
          className="w-full flex-shrink-0"
        >
          <div className="banner-text bg-gray-800 text-white p-8">
            📣 Ready for a Career Upgrade? We now offer 24-Month Payment Plans
            (USA Only) on our
            <a href="/services" className="link-2 text-blue-400">
              <strong>Services Bundles</strong>
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
        aria-label="Previous Slide"
      >
        &lt;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900 text-white p-2 rounded-full"
        aria-label="Next Slide"
      >
        &gt;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
