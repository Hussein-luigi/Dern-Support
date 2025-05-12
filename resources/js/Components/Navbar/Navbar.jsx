import { Link } from "@inertiajs/react";
import { useEffect, useState } from "react";

export default function Navbar({auth ,children}) {
  const [isSticky, setIsSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between w-full px-6 py-4 transition-all duration-300 z-50 ${isSticky ? "fixed top-0 bg-white shadow-md" : "bg-transparent"}`}
    >
      <span className="text-[#B36B19] font-bold font-broadway text-2xl">Dern-Support</span>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
       
          <span  
            className={`text-lg cursor-pointer hover:text-[#B36B19] ${isSticky ? 'text-[#000]' : 'text-[#ff6d1f]'}`}
          >
          <Link href="/">Home</Link>
            
          </span>
          <span  
            className={`text-lg cursor-pointer hover:text-[#B36B19] ${isSticky ? 'text-[#000]' : 'text-[#ff6d1f]'}`}
          >
            <Link href="/about">About us</Link>
          </span>
          <span  
            className={`text-lg cursor-pointer hover:text-[#B36B19] ${isSticky ? 'text-[#000]' : 'text-[#ff6d1f]'}`}
          >
            <Link href="/contact">Contact us</Link>
          </span>
      

      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button
          className="bg-[#B36B19] text-white text-lg px-4 py-2 rounded-lg hover:bg-[#8a5114] transition"
        >
        <Link
          href={route('register')}
                                            
        >
          Register
        </Link>
        </button>
        <span className={`text-lg cursor-pointer hover:text-[#B36B19] ${isSticky ? 'text-[#000]' : 'text-[#ff6d1f]'}`}>
            <Link
              href={route('login')}
            
            >
            Log in
            </Link>

          
          </span>
         
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          className={`text-2xl ${isSticky ? 'text-[#000]' : 'text-[#ff6d1f]'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-16 left-0 w-full  shadow-md flex flex-col items-center py-4 space-y-4 md:hidden bg-white`}>
          {['Home', 'About us', 'Contact us', 'Login'].map((item, index) => (
            <span 
              key={index} 
              className="text-lg cursor-pointer text-[#000] hover:text-[#B36B19]"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </span>
          ))}
          <button
            className={`bg-[#B36B19] ${isSticky ? 'text-[#000]' : 'text-[#ff6d1f]'} text-white text-lg px-6 py-2 rounded-lg hover:bg-[#8a5114] transition`}
            onClick={() => {
              alert("Pressed!");
              setMenuOpen(false);
            }}
          >
            Get started
          </button>
        </div>
      )}
    </nav>
  );
}