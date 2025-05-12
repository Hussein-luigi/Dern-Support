import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
// Define SVG components
const HomeIcon = () => (
<svg id="Layer_1" className="w-20 self-center " fill="#B46C19" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120.39 122.88"><title>24-hour</title><path d="M110.82,30a4.54,4.54,0,0,0-7.63,4.91,50.2,50.2,0,0,1,3.92,7.34,4.53,4.53,0,0,0,8.32-3.61A59.17,59.17,0,0,0,110.82,30ZM31.07,81.65V73.82l11.73-12a20.88,20.88,0,0,0,1.88-2.08,9.8,9.8,0,0,0,1.2-1.88A4.31,4.31,0,0,0,46.31,56a3.41,3.41,0,0,0-.41-1.75,2.25,2.25,0,0,0-1.24-1,6.5,6.5,0,0,0-2.16-.31H31.68V45.12q2.49-.55,5.56-1a46.81,46.81,0,0,1,7.14-.48,16.58,16.58,0,0,1,7,1.22,7.28,7.28,0,0,1,3.65,3.6,14,14,0,0,1,1.09,5.85,14.6,14.6,0,0,1-.66,4.52,14.45,14.45,0,0,1-1.9,3.81,27.18,27.18,0,0,1-3,3.55l-6.5,6.66h13.1v8.84Zm46.66,0v-7H62L60.3,70.27,71.23,43.9h10L72,66.36h5.69V60.77l1.88-4.88h8V66.36h3v6.8l-3,1.53v7Zm25.2-65.24a5.51,5.51,0,0,1,.33,1.57,5.05,5.05,0,0,1-3.52,5.62L86.27,27.72a5,5,0,0,1-2.92-9.65l1.28-.39a50.55,50.55,0,0,0-10.19-4.19A51.17,51.17,0,1,0,60.22,113.81a35.52,35.52,0,0,0,4-.13,48,48,0,0,0,5.73-.75,4.54,4.54,0,1,1,1.7,8.91,59.3,59.3,0,0,1-6.78.88c-.69,0-3.91.16-4.63.16A60.23,60.23,0,1,1,89.71,10.16l-1.26-3.3a5.06,5.06,0,1,1,9.45-3.6l5,13.15Zm-17.4,90.85a4.53,4.53,0,0,0,4.45,7.9,55.69,55.69,0,0,0,8.12-5.5,4.54,4.54,0,1,0-5.7-7.06,46.89,46.89,0,0,1-6.87,4.66Zm17.87-17a4.53,4.53,0,1,0,7.69,4.8,61.14,61.14,0,0,0,4.51-8.69,4.54,4.54,0,1,0-8.37-3.5,51.73,51.73,0,0,1-3.83,7.39Zm7.77-23.54a4.53,4.53,0,0,0,9,.7,61.54,61.54,0,0,0,0-9.79,4.54,4.54,0,1,0-9,.76,52.65,52.65,0,0,1,0,8.33Z"/></svg>

);

const JusticeIcon = () => (
<svg className="w-20 self-center " xmlns="http://www.w3.org/2000/svg" fill="#B46C19" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 419 511.67"><path d="M93.01 39.4h46.12C141.84 17.18 159.77 0 181.52 0c21.61 0 39.45 16.95 42.34 38.94l46.76.46c2.61 0 4.7 2.1 4.7 4.71v51.84c0 2.61-2.09 4.7-4.7 4.7H93.06c-2.57 0-4.71-2.09-4.71-4.7V44.11a4.632 4.632 0 0 1 4.66-4.71zm221.96 264.22c57.47 0 104.03 46.58 104.03 104.02 0 57.47-46.59 104.03-104.03 104.03-57.47 0-104.02-46.59-104.02-104.03 0-57.47 46.58-104.02 104.02-104.02zm-4.63 47.92a49.824 49.824 0 0 1 35.18 14.59 49.304 49.304 0 0 1 10.79 16.13 49.614 49.614 0 0 1 3.79 19.05c0 4.91-.72 9.7-2.07 14.21a50.276 50.276 0 0 1-4.57 10.61l14.98 16.49a3.616 3.616 0 0 1-.22 5.1l-13.78 12.58c-1.47 1.34-3.76 1.24-5.09-.22l-14.11-15.7a49.28 49.28 0 0 1-10.49 4.56l-.13.03c-4.54 1.37-9.34 2.1-14.28 2.1a49.92 49.92 0 0 1-19-3.78 50.153 50.153 0 0 1-16.18-10.79 49.68 49.68 0 0 1-10.8-16.15 49.564 49.564 0 0 1-3.79-19.04c0-6.68 1.36-13.12 3.79-19.01a50.11 50.11 0 0 1 10.79-16.17 49.61 49.61 0 0 1 16.14-10.81 49.795 49.795 0 0 1 19.05-3.78zm21.98 27.78c-2.86-2.86-6.3-5.19-10.11-6.77l-.18-.07a31.054 31.054 0 0 0-11.69-2.27c-4.23 0-8.26.85-11.88 2.34a31.4 31.4 0 0 0-10.11 6.77c-5.61 5.62-9.11 13.4-9.11 21.99 0 4.23.85 8.26 2.33 11.88 1.61 3.81 3.92 7.24 6.78 10.1 2.88 2.87 6.31 5.2 10.09 6.77 3.65 1.49 7.67 2.34 11.9 2.34 4.24 0 8.26-.85 11.88-2.34 3.79-1.58 7.24-3.91 10.1-6.77a31.52 31.52 0 0 0 6.77-10.1 31.03 31.03 0 0 0 2.34-11.88c0-4.23-.84-8.26-2.34-11.88l-.08-.19c-1.55-3.71-3.85-7.08-6.69-9.92zM41.73 59.28h23.93v24.37H41.73c-4.77 0-9.12 1.97-12.25 5.1-3.14 3.14-5.1 7.48-5.1 12.24v315.52c0 4.75 1.96 9.1 5.1 12.24 3.15 3.15 7.51 5.12 12.25 5.12h142.61c1.69 8.44 4.17 16.6 7.37 24.38H41.73c-11.45 0-21.9-4.71-29.47-12.28C4.72 438.43 0 427.98 0 416.51V100.99c0-11.48 4.7-21.91 12.25-29.46 7.55-7.55 17.99-12.25 29.48-12.25zm297.54 217.35V100.99c0-4.77-1.96-9.11-5.09-12.26a17.36 17.36 0 0 0-12.26-5.08H298V59.28h23.92c11.44 0 21.86 4.71 29.41 12.25 7.61 7.61 12.32 18.04 12.32 29.46V283.6c-7.79-3.07-15.95-5.42-24.38-6.97zm-206.74-8.06c-7.13 0-12.93-5.79-12.93-12.92s5.8-12.93 12.93-12.93h142.82c7.13 0 12.92 5.8 12.92 12.93s-5.79 12.92-12.92 12.92H132.53zM89.5 241.21c7.98 0 14.44 6.47 14.44 14.44 0 7.98-6.46 14.44-14.44 14.44-7.97 0-14.43-6.46-14.43-14.44 0-7.97 6.46-14.44 14.43-14.44zm0 78.62c7.98 0 14.44 6.47 14.44 14.44 0 7.98-6.46 14.44-14.44 14.44-7.97 0-14.43-6.46-14.43-14.44 0-7.97 6.46-14.44 14.43-14.44zm43.04 27.36c-7.13 0-12.93-5.79-12.93-12.92s5.8-12.93 12.93-12.93h80.96a133.913 133.913 0 0 0-17.26 25.85h-63.7zM89.5 162.61c7.98 0 14.44 6.46 14.44 14.43 0 7.98-6.46 14.44-14.44 14.44-7.97 0-14.43-6.46-14.43-14.44 0-7.97 6.46-14.43 14.43-14.43zm43.03 27.35c-7.13 0-12.93-5.79-12.93-12.92 0-7.14 5.8-12.93 12.93-12.93h142.82c7.13 0 12.92 5.79 12.92 12.93 0 7.13-5.79 12.92-12.92 12.92H132.53zm48.5-169.8c12.29 0 22.26 9.96 22.26 22.27 0 12.29-9.97 22.25-22.26 22.25-12.3 0-22.26-9.96-22.26-22.25 0-12.31 9.96-22.27 22.26-22.27z"/></svg>

);

const BootsIcon = () => (
<svg xmlns="http://www.w3.org/2000/svg" className="w-20 self-center" fill="#B46C19" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 433.155"><path fill-rule="nonzero" d="M467.973 106.605l42.728 42.728a4.437 4.437 0 010 6.274l-87.557 87.557a4.439 4.439 0 01-6.275 0l-44.127-44.126-.06-.063-.019-.019-.043-.046-.035-.039-.024-.026-.05-.057-.007-.009-.111-.136-.024-.029-.029-.04a4.411 4.411 0 01-.863-2.141l-.001-.001-.009-.085-.014-.172-.004-.062-.001-.025-.003-.082v-.005l-.001-.087-.001-.013.002-.074v-.033l.001-.054.003-.053.001-.035.004-.071.002-.016.007-.086v-.004l.01-.084.003-.022.007-.064.006-.042.007-.047.01-.058.004-.028.015-.077.001-.009.018-.088.002-.007.018-.079.006-.027.016-.06.011-.043.012-.043.017-.06.008-.026.024-.076.003-.009.029-.086.002-.007.028-.078.009-.024.024-.06.015-.041.02-.045.022-.054.014-.028a3.86 3.86 0 01.162-.329c3.838-7.45 4.645-15.039 3.226-21.942-1.333-6.486-4.61-12.417-9.169-17.109-4.568-4.702-10.409-8.155-16.853-9.678-6.697-1.582-14.089-1.079-21.434 2.277l-66.252 66.252c2.486 14.03-1.41 29.486-15.064 43.14L85.121 418.033c-16.678 16.678-36.333 18.185-52.636 11.167-6.263-2.696-12.005-6.676-16.843-11.539-4.844-4.869-8.811-10.648-11.526-16.931-7.166-16.58-5.793-36.582 10.663-53.038l161.32-161.32c11.761-11.76 25.165-16.131 37.861-15.326l71.261-71.262c-9.274-10.022-21.106-16.019-34.683-17.446-14.682-1.543-31.503 2.192-49.481 11.866a4.429 4.429 0 01-5.24-.764l-33.999-33.99a4.437 4.437 0 010-6.275C198.099 16.894 242.722-.096 287.07.001c45.97.1 91.606 18.603 127.288 53.037 1.662 1.614 3.127 3.278 1.955 5.926-4.141 9.418-3.668 18.908-.155 26.897 1.744 3.967 4.258 7.594 7.343 10.679 3.086 3.086 6.712 5.599 10.678 7.343 7.903 3.475 17.273 3.974 26.585-.02 3.23-1.737 5.217.75 7.209 2.742zm-243.368 66.344a50.98 50.98 0 015.307 1.895c6.353 2.668 12.171 6.617 17.051 11.473 4.883 4.858 8.851 10.643 11.502 16.98l.222.544 63.315-63.314 83.606-83.606c-33.602-31.23-75.947-47.978-118.561-48.073-36.666-.08-73.569 12.203-105.305 38.228 28.616-10.222 88.615-18.662 138.642 30.071l-25.721 25.72a4.2 4.2 0 01-.256.28l-69.802 69.802zm175.271 5.229l37.851 37.853 63.562-63.561-37.852-37.852-63.561 63.56zm-15.246 2.698l65.437-65.437c-6.865.449-13.49-.842-19.465-3.47a43.984 43.984 0 01-13.375-9.155 43.99 43.99 0 01-9.155-13.375c-2.56-5.82-3.852-12.256-3.501-18.933l-64.885 64.885a41.008 41.008 0 0111.538 1.051c8.116 1.919 15.44 6.236 21.142 12.105 5.709 5.876 9.815 13.325 11.495 21.496.721 3.508.998 7.141.769 10.833z"/></svg>
);

// Image Data with SVG Components
const imageData = [
  { title: "Home", description: " Stay updated on your repair progress", icon: HomeIcon,title_1: "24/7 Support Portal" },
  { title: "Justice", description: "Get assistance when you need it", icon: JusticeIcon ,title_1: "Real-Time Repair Tracking" },
  { title: "Boots", description: "Faster service, fewer delays", icon: BootsIcon ,title_1: "Optimized Technician Assignments" },
];

const images = [
  "/frames/frame_0.jpg",
  "/frames/frame_1.jpg",
  "/frames/frame_2.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoSlide, setAutoSlide] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [autoSlide]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full flex justify-center items-center mx-auto mt-5 overflow-hidden max-w-xs sm:max-w-lg lg:max-w-7xl">
    <div
      className="flex transition-transform duration-500 ease-in-out"
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      {images.map((image, index) => {
        const Icon = imageData[index].icon;
        return (
          <div key={index} className="w-full flex-shrink-0 flex flex-col items-center">
            <Icon className="w-10 h-10 sm:w-12 sm:h-12" />
            <div className="relative inline-block overflow-hidden font-broadway text-black transition-all duration-500 group">
              <span className="relative max-lg:w-[250px] sm:text-2xl lg:text-3xl font-bold z-10">
                {imageData[index].title_1}
              </span>
              <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#FF8B07] to-[#FF3D00] transition-all duration-500 group-hover:w-full"></span>
            </div>
            <motion.img
              src={image}
              className="w-[250px] h-[250px] sm:w-[320px] sm:h-[320px] lg:w-[360px] lg:h-[360px] object-cover rounded-full cursor-pointer"
              alt={`Slide ${index}`}
              whileHover={{ scale: 1.05 }} // Animation on hover
              onClick={() => {
                setIsFullscreen(true);
                setAutoSlide(false);
              }}
            />
            <h1 className="text-[#444] w-[200px] sm:w-[250px] text-center text-lg sm:text-xl lg:text-2xl font-bold mt-2">
              {imageData[index].description}
            </h1>
          </div>
        );
      })}
    </div>

    <button
      onClick={prevSlide}
      className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 hover:bg-[#FF8B07] transition bg-opacity-50 bg-black p-1 sm:p-2 rounded-full text-white"
    >
      <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
    </button>
    <button
      onClick={nextSlide}
      className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 hover:bg-[#FF8B07] transition bg-black bg-opacity-50 p-1 sm:p-2 rounded-full text-white"
    >
      <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
    </button>

    <AnimatePresence>
      {isFullscreen && (
        <motion.div
          key="fullscreen"
          className="fixed inset-0 bg-black bg-opacity-90 flex flex-col justify-center items-center z-50 p-4"
          initial={{ opacity: 0 }} // Fade in from opacity 0
          animate={{ opacity: 1 }} // Fade to full opacity
          exit={{ opacity: 0 }} // Fade out on exit
          onClick={() => {
            setIsFullscreen(false);
            setAutoSlide(true);
          }}
        >
          <motion.img
            src={images[currentIndex]}
            alt="Fullscreen Slide"
            className="w-full h-full object-cover"
            initial={{ scale: 0.7 }} // Zoom in from a smaller size
            animate={{ scale: 1 }} // Zoom to full size
            exit={{ scale: 0.7 }} // Zoom out when exiting
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
          />
          <div className="text-white text-center mt-2 absolute bottom-10">
            <h2 className="text-lg sm:text-xl font-bold">{imageData[currentIndex].title}</h2>
            <p className="text-sm sm:text-base">{imageData[currentIndex].description}</p>
          </div>
          <button
            onClick={() => {
              setIsFullscreen(false);
              setAutoSlide(true);
            }}
            className="absolute top-4 right-4 bg-white bg-opacity-50 p-1 rounded-full"
          >
            <X className="text-black w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
  );
}
