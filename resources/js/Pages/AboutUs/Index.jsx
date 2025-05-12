// 
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
// import { Link } from "lucide-react";
import { Link } from "@inertiajs/react";
import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";

const Abbas = () => {
  return (
    <div className="flex flex-col bg-white">
      <Navbar/>

      <div className="flex flex-col bg-white">
      <div className="flex flex-col items-start self-stretch bg-white min-h-screen">
        <div className="flex flex-col items-center self-stretch relative  mb-20 ">
          <img
            src={"/assets/About-bg.jpg"} 
            className="w-full  h-auto object-cover"
            alt="About Us"
          />
          <div 
            className="flex flex-col items-start  w-60 lg:w-full  max-w-md absolute bottom-[-50px] sm:bottom-[-74px] left-4 sm:left-10 rounded-lg p-4 sm:p-6"
            style={{ background: "linear-gradient(180deg, #B36B19C4, #FF8B07C4)" }}
          >
            <span className="text-white text-3xl sm:text-4xl md:text-5xl mt-6 sm:mt-10 mb-4 sm:mb-6">About us</span>
          </div>
        </div>
        <div className="flex flex-col mt-20 md:flex-row items-start px-4 sm:px-6 md:px-20">
          <div className="flex flex-col items-center md:mr-16 mb-4 md:mb-0">
          <FaLinkedin className="w-10 h-10 sm:w-12 sm:h-12 mb-4 text-blue-700" /> 
          <FaFacebook className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600" />
          </div>
          <span className="text-black text-xl sm:text-2xl md:text-3xl font-bold max-w-2xl text-center md:text-left">{"Welcome to Dern-Support – Reliable IT Solutions for You"}</span>
        </div>
        <span className="text-black text-base sm:text-lg md:text-2xl  px-4 sm:px-6 md:px-20 ml-5 lg:ml-28">
          At Dern-Support, we specialize in providing fast and efficient IT support and computer repair services for businesses and individuals. Our platform simplifies the entire repair process, ensuring a smooth and hassle-free experience.
        </span>
        <div 
          className="flex flex-row flex-wrap text-center justify-between self-stretch bg-cover bg-center pt-8 sm:pt-12 pb-16 sm:pb-20 my-12 sm:my-16 px-4 sm:px-6 md:px-20"
          style={{ backgroundImage: "url('/assets/bg-2.jpg')" }}
        >


          <div className="flex flex-col justify-center gap-6 sm:gap-12 mt-4 sm:mt-6">
            <img src={"/assets/tool-1.png"} className="w-20 h-20 sm:w-24 sm:h-24 self-center object-fill" alt="Service 1" />
            <span className="text-white text-xl sm:text-2xl font-bold">Technician</span>
            <span className="text-[#FF5C00] text-4xl sm:text-5xl">300</span>
            <span className="max-w-xs  text-white text-lg sm:text-xl font-bold text-center">Faster service, fewer delays</span>          
          </div>


          <div className="flex flex-col  gap-6 sm:gap-12  mt-4 sm:mt-6">
            <img src={"/assets/tool-2.png"} className="w-24 h-22 sm:w-36 sm:h-30 self-center object-fill" alt="Service 2" />
            <span className="text-white text-xl sm:text-2xl font-bold">Support</span>
            <span className="text-[#FF5C00] text-4xl sm:text-5xl" >24/7</span>  
            <span className="max-w-xs  text-white text-lg sm:text-xl font-bold text-center">Get assistance when you need it</span>
          </div>

          <div className="flex flex-col gap-6 sm:gap-12  font-bold mt-4 sm:mt-6">
            <img src={"/assets/tool-3.png"} className="w-20 h-20 sm:w-24 self-center sm:h-24 object-fill" alt="Service 3" />
            <span className="text-white text-xl sm:text-2xl font-bold">Secure Service</span>
            <span className="text-center text-[#FF5C00] text-4xl sm:text-5xl">100%</span>
            <span className="max-w-xs  text-white text-lg sm:text-xl font-bold text-center">Trusted Service Your data, our priority</span>
          </div>
        
        </div>
      </div>
    </div>



<div className="flex flex-col bg-white">
      <div className="self-stretch bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <img
                src={service.image}
                className="w-full h-60 object-cover rounded-lg"
                alt={service.title}
              />
              <div className="flex flex-col items-start bg-white p-4 sm:p-6 shadow-lg rounded-lg -mt-10 mx-4 sm:mx-6 md:mx-10 w-11/12">
                <span className="text-[#B36B19] text-lg sm:text-xl md:text-2xl font-bold mb-2">
                  {service.title}
                </span>
                <span className="text-[#FF8B07] text-sm sm:text-lg font-semibold mb-4">
                  {service.description}
                </span>
                <Link
                  href={route('login')}
                  className="self-start text-black bg-white text-sm sm:text-lg py-2 px-4 sm:px-6 rounded-full border border-black hover:bg-gray-100 transition"
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



  <Footer/>
    </div>
  );
};
const services = [
  {
    title: "Fast & Reliable Repairs",
    description: "Quick turnaround time for minimal downtime",
    image: "/assets/card-1.jpeg"
  },
  {
    title: "Expert Technicians",
    description: "Certified professionals with years of experience",
    image: "/assets/card-2.jpg"
  },
  {
    title: "Customer-Centric Approach",
    description: "Solutions tailored to your needs",
    image: "/assets/card-3.jpg"
  },
  {
    title: "Secure & Trustworthy",
    description: "Your data and privacy are our top priority",
    image: "/assets/card-4.jpg"
  }
];

export default Abbas;
