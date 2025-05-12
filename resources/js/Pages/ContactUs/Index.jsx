import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import { MdEmail, MdPhone } from "react-icons/md";

function Contact  (){
	return (
        <>
        <Navbar/>
		<div className="flex flex-col bg-[#FFFFFF]">
			<div className="flex flex-col items-start self-stretch bg-[#FFFFFF] ">
				<div className="flex flex-col items-center self-stretch relative mb-[119px]">
					<img
						src={"/assets/main-bg-contact.jpg"} 
						className="w-[1440px] h-[474px] object-fill"
					/>
					<div className="flex flex-col items-start w-[664px] absolute bottom-[-76px] left-[111px] rounded-[10px]" 
						style={{
							background: "linear-gradient(180deg, #B36B19C4, #FF8B07C4)"
						}}>
						<span className="text-[#FFFFFF] text-[60px] mt-[131px] mb-[83px] ml-[51px]" >
							{"contact us"}
						</span>
					</div>
				</div>
          
        <div className="flex flex-col items-center w-full ">
          <span className="text-black text-2xl md:text-4xl font-bold mb-4">
            We Would Like To Hear From You!
          </span>
          <p className="text-gray-700 text-lg md:text-xl mb-6">
            Feel free to reach out to us for any inquiries, support, or feedback. We are here to help and will respond as soon as possible.
          </p>
          <div className="flex items-center justify-center mb-4">
            <MdEmail className="w-10 h-10 mr-4 text-orange-600" />
            <span className="text-black text-lg md:text-2xl">info@dern-support.com</span>
          </div>
          <div className="flex items-center justify-center mb-4">
            <MdPhone className="w-10 h-10 mr-4 text-orange-600" />
            <span className="text-black text-lg md:text-2xl">(000)-000-000</span>
          </div>
          <img
            src="/assets/contact.jpg"
            className="w-full h-auto max-w-lg"
            alt="pic-contact"
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
	)
}
export default Contact ;