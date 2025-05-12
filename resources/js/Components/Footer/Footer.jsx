import { Link } from "@inertiajs/react";

export default function Footer() {
    return (
      <footer className="bg-[#1A1A1A] text-white mt-60 py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Section - Brand & Description */}
          <div>
            <h2 className="text-3xl font-bold text-[#FF8B07] font-broadway">Dern-support</h2>
            <p className="mt-2 text-gray-400">
              Providing top-notch solutions to enhance your digital experience.
            </p>
          </div>
  
          {/* Middle Section - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-[#FF8B07]">Quick Links</h3>
            <ul className="mt-3 space-y-2">
             <li><Link href="/" className="text-gray-300 hover:text-[#FF8B07] transition">Home</Link></li> 
              <li><Link href="/aboutus" className="text-gray-300 hover:text-[#FF8B07] transition">About</Link></li>
              <li><Link href="/contactus" className="text-gray-300 hover:text-[#FF8B07] transition">Contact</Link></li>
            </ul>
          </div>
  
          {/* Right Section - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-[#FF8B07]">Contact</h3>
            <p className="mt-2 text-gray-400">📍 City, Country</p>
            <p className="text-gray-400">📞 (000)-000-000</p>
            <p className="text-gray-400">📧 info@dern-support.com</p>
  
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-[#FF8B07] transition">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF8B07] transition">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#FF8B07] transition">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} Dern-support. All rights reserved.
        </div>
        <h1 className="font-broadway text-center lg:mt-[200px] text-[#FF8B07] text-[40px] lg:text-[150px]">Dern-support</h1>
      </footer>
    )
}  