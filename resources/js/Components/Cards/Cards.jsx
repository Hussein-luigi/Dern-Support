import React from 'react';
import { Monitor, Laptop, ChevronDown } from 'lucide-react';
import { Link } from "@inertiajs/react";

const images = [
  "/assets/gaming-computer.jpg",
  "/assets/laptop.png",
  "/assets/mac.jpg",
];
const name = [
  {name:"PC"},
  {name:"Laptop"},
  {name:"Mac"},
];

function Cards() {
  return (
    <div className="min-h-screen bg-gradient-to-b mt-40  bg-white">
          <div className="  text-start text-xl font-broadway md:text-xl font-semibold py-2 px-6  ">
            Repair
          </div>

          <div className="relative inline-block overflow-hidden px-6 py-3 font-broadway font-bold uppercase tracking-wider text-black transition-all duration-500 group">
            <span className="relative text-xl md:text-4xl z-10">Deal with all devices</span>
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#FF8B07] to-[#FF3D00] transition-all duration-500 group-hover:w-full"></span>
          </div>

      {/* Hero Section */}
      <div 
className="relative bg-[url(/assets/sunset.jpg)] min-h-screen flex flex-col items-center justify-center text-center px-4">
        
        {/* <div className="absolute inset-0 bg-white bg-opacity-60"></div> */}
        <div className="relative z-10">
          

          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {images.map((image,i) => {
          return (
                       
            <div className="bg-[#B26336] mt-10   hover:text-[#fff]  h-96 w-72 bg-opacity-80 p-6 rounded-2xl transform hover:scale-105 transition-transform">
              <Link href={route('login')}> 
              <img src={image} className="bg-[#FF8B07]   h-96 w-72 bg-opacity-80 p-6 rounded-2xl transform hover:scale-105 transition-transform" />
              </Link>
            <h3 className="text-2xl font-broadway text-[#B26336] font-semibold mb-2">{name[i].name}</h3>
          </div>
          
          );
        })}
        

          </div>

          
        </div>

          <Link href={route('login')}> 
          <button className="mt-20  hover:bg-[#FF8B07] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-left font-bold py-3 px-6 rounded-full border border-black">
            <span className='text-lg font-broadway'> Learn more <ChevronDown className="w-8 mt-4 animate-bounce h-8 inline-block" /></span>
          </button>
          </Link>
      </div>

      
    </div>
  );
}

export default Cards;