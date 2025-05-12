import React from "react";
import Carousel from "@/Components/Carousel/Carousel";
import Comments from "@/Components/Comments/Comments";
// import vid1 from "/assets/vid-1.mp4"
import Footer from "@/Components/Footer/Footer";  

import Navbar from "@/Components/Navbar/Navbar";
import Cards from "@/Components/Cards/Cards";
import { Link } from "@inertiajs/react";


const Welcome =  ({auth}) => {
    return (
        <div className="flex flex-col ">
            <div className="flex flex-col self-stretch  ">
            
               <Navbar></Navbar>
               
                
                <img
                className="absolute top-0 left-0 w-full h-full min-h-screen object-cover md:h-auto"

                src={`${import.meta.env.BASE_URL}assets/vid-1.png`} 
                />


                <div className="relative justify-center flex ">

                
                    <div className="lg:absolute mt-[400px] lg:mt-333  lg:top-95 lg:left-10 text-base text-white flex flex-col items-start lg:h-[400px] lg:w-[600px] w-2xs h-[150px]  rounded-[10px] " 
                                    style={{
                                        background: "linear-gradient(180deg, #B36B19C4, #FF8B07C4)"
                                    }}>
                                    <span className="text-[#FFFFFF] text-xl font-broadway  lg:mt-9 mt-5 lg:text-6xl lg:mb-[15px] lg:ml-[47px] mb-1 ml-5" >
                                        Dern-Support
                                    </span>
                                    
                                    <div className="flex flex-col w-full   lg:ml-[35px] ">
                                        <span className="text-[#FFFFFF] lg:text-4xl lg:mt-7  mb-1 ml-5  lg:top-[0px] lg:right-[0px] lg:left-[0px]" >
                                            IT Support for Businesses and <br/> individuals
                                        </span>
                                        
                                            <Link href={route('register')}>
                                                <button className="items-center lg:ml-[270px] ml-5 mr-5 mt-3 bg-[#B26336] hover:bg-[#FF8B07] lg:w-[257px]  lg:mt-20 lg:pt-[20px] lg:pb-[20px] lg:rounded-[20px] rounded-[5px] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110  ">
                                                    <span className="text-[#FFFFFF] self-stretch lg:text-[25px] text-[15px] font-broadway" >
                                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                       Dashboard
                                    </Link>
                                                    </span>
                                                
                                                </button>
                                            </Link>                                        

                                    </div>
                                </div>
                    </div>
                    

                    <div className="flex justify-center mt-[500px] lg:mt-[1000px]">
                        <div className="self-stretch 2xl:mt-[420px]	flex flex-col justify-center  bg-[#FFFFFF] border-amber-100">
    
                            <div className="relative flex flex-col items-start w-full max-w-[1000px] mx-auto mt-10 lg:mt-[67px] lg:mb-[140px] px-4">
                            <img
                                src={"assets/pic1.png"}
                                alt="IT Support"
                                className="w-full max-w-[900px] h-auto object-cover mx-auto"
                            />
                            
                            <div
                                className="relative flex flex-col items-start bg-white p-6 shadow-lg max-w-[90%] sm:max-w-[550px] lg:max-w-[709px] mt-[-50px] mx-auto"
                                style={{ boxShadow: "1px 15px 4px #00000040" }}
                            >

                                <div className="relative inline-block overflow-hidden font-broadway  uppercase tracking-wider text-black transition-all duration-500 group">
                                    <span className="relative text-2xl sm:text-3xl font-bold z-10">Fast and Efficient IT Support</span>
                                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#FF8B07] to-[#FF3D00] transition-all duration-500 group-hover:w-full"></span>
                                </div>
                                <p className="text-lg sm:text-2xl text-black mt-2">
                                Computer Repair Services
                                </p>
                                
                                <div className="flex justify-end w-full mt-6">
                                <button
                                    className="flex items-center bg-white hover:bg-[#FF8B07] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-left font-bold py-3 px-6 rounded-full border border-black"
                                    onClick={() => alert("Pressed!")}
                                >
                                    <span className="text-black text-sm sm:text-base">Read More</span>
                                    <img
                                    src={"assets/arrow.png"}
                                    alt="Arrow Icon"
                                    className="w-6  h-6 ml-2 object-cover"
                                    />
                                </button>
                                </div>
                            </div>
                            </div>

                            <div className="relative flex flex-col items-start w-full max-w-[1000px] mx-auto mt-10 lg:mt-[67px] lg:mb-[140px] px-4">
                            <img
                                src={"assets/pic2.jpg"}
                                alt="IT Support"
                                className="w-full max-w-[800px] h-auto object-cover mx-auto"
                            />
                            
                            <div
                                className="relative flex flex-col items-start bg-white p-6 shadow-lg  max-w-[90%] sm:max-w-[550px] lg:max-w-[709px] mt-[-50px] mx-auto"
                                style={{ boxShadow: "1px 15px 4px #00000040" }}
                            >
                                <div className="relative inline-block overflow-hidden font-broadway  uppercase tracking-wider text-black transition-all duration-500 group">
                                    <span className="relative text-2xl sm:text-3xl font-bold z-10">Your Tech, Our Care</span>
                                    <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#FF8B07] to-[#FF3D00] transition-all duration-500 group-hover:w-full"></span>
                                </div>
                                <p className="text-lg sm:text-2xl text-black mt-2">
                                Always Trust
                                </p>
                                
                                <div className="flex justify-end w-full mt-6">
                                <button
                                    className="flex items-center bg-white hover:bg-[#FF8B07] transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 text-left font-bold py-3 px-6 rounded-full border border-black"
                                    onClick={() => alert("Pressed!")}
                                >
                                    <span className="text-black text-sm sm:text-base">Read More</span>
                                    <img
                                    src={"assets/arrow.png"}
                                    alt="Arrow Icon"
                                    className="w-6 h-6 ml-2 object-cover"
                                    />
                                </button>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                    
                    <Carousel/>
                    
                    <Cards/>
                    
                    <Comments></Comments>
                    
                    <Footer/>
            </div>
        </div>
    )
}
export default Welcome;