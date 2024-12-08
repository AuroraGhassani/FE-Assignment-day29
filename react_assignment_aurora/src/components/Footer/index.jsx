import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
    return (
       <div className="flex flex-row justify-between p-20 text-white bg-black">
            <div className="flex flex-col gap-3 px-10 ">
                <img src="./src/assets/logo.jpeg" alt="logo" className="w-1/2"/>
                <p className="text-sm" >Discover inspired Architectural Solution Tailored to your Unique Style and Needs.</p>
                <div className="flex flex-row gap-3 pt-10">
                    <icon><FaFacebook /></icon>
                    <icon><FaInstagram /></icon>
                    <icon><FaLinkedin /></icon>
                </div>
                <p className="text-xs">2024 your awesome website. All rights reserved.</p>
            </div>
            
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold">Quick Links</h3>
                <ul className="flex flex-col gap-6 text-sm cursor-pointer">
                    <li>Home</li>
                    <li>Our Services</li>
                    <li>About Us</li>
                    <li>Our Portfolio</li>
                    <li>Testimonial</li>
                </ul>
            </div>

            <div className="flex flex-col gap-4 px-10">
                <h3 className="text-lg font-bold">Subscribe to our Newsletter</h3>
                <div className="flex items-center px-4 py-2 text-white bg-black border border-gray-500 rounded-full w-80">
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full text-white bg-black focus:outline-none"
                    />
                    <FaLocationArrow />
                </div>  
            </div>
        </div>
    )
}

export default Footer;