import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const imageData = [
  { title: "Tech Rescue for a Small Business!", description: "Our office network went down, and we were losing business. Dern-Support responded fast, fixed the issue, and optimized our system for future stability!" },
  { title: "Another Tech Success Story!", description: "Thanks to Dern-Support, we improved our IT security and boosted our workflow efficiency!" },
  { title: "Top-notch Support!", description: "Excellent response time and a knowledgeable team. Highly recommend their services!" },
];

const images = [
  "/assets/frames/happy.jpg",
  "/assets/frames/job.jpg",
  "/assets/frames/startup.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoSlide]);

  const nextSlide = () => {
    setAutoSlide(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    restartAutoSlide();
  };

  const prevSlide = () => {
    setAutoSlide(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    restartAutoSlide();
  };

  const restartAutoSlide = () => {
    setTimeout(() => {
      setAutoSlide(true);
    }, 5000);
  };

  return (
    <>
    <h1 className="text-xl mt-32 md:text-4xl font-broadway">Recent client stories</h1>
    <div className="relative w-full flex justify-center mx-auto mt-32 overflow-hidden max-w-xs sm:max-w-lg lg:max-w-7xl">
      <div
        className="flex transition-transform duration-500 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <img
              src={image}
              className="w-full h-[250px] sm:h-[400px] lg:h-[600px] object-cover cursor-pointer"
              alt={`Slide ${index}`}
              onClick={() => {
                setAutoSlide(false);
                restartAutoSlide();
              }}
            />

            {/* White Box (Responsive) */}
            <div className="absolute top-[30%] left-[10%] sm:top-[35%] sm:left-[15%] lg:top-[230px] lg:left-[100px] w-[90%] sm:w-[75%] lg:w-[600px] lg:h-[300px] h-auto bg-white p-4 sm:p-6 shadow-2xl rounded-md">
              <div className="relative inline-block overflow-hidden font-broadway  text-black transition-all duration-500 group">
                <span className="relative text-lg sm:text-xl lg:text-3xl  font-bold z-10">{imageData[index].title}</span>
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#FF8B07] to-[#FF3D00] transition-all duration-500 group-hover:w-full"></span>
              </div>
              <p className="text-[#444] text-sm sm:text-lg lg:text-2xl font-medium mt-2">
                {imageData[index].description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 hover:bg-[#FF8B07] transition bg-opacity-50 bg-black p-2 rounded-full text-white"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 hover:bg-[#FF8B07] transition bg-black bg-opacity-50 p-2 rounded-full text-white"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>
    </div>
    </>
  );
}
