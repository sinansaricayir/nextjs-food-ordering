import Link from "next/link";
import Title from "../ui/Title";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
} from "react-icons/fa";
import { BiCurrentLocation } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className=" bg-secondary text-white py-12">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col md:items-start items-center justify-between p-4 md:gap-8 gap-12">
          <div className="flex flex-1 flex-col items-center gap-2 p-2">
            <Title className="text-2xl"> Contact Us</Title>
            <Link
              href="#"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <BiCurrentLocation />
              <span>Location</span>
            </Link>
            <Link
              href="telto:+90 534 874 44 44"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <FiPhoneCall />
              <span>+90 534 874 44 44</span>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <AiOutlineMail />
              <span>sinansaricayir@gmail.com</span>
            </Link>
          </div>
          <div className="flex flex-2 flex-col items-center gap-6 p-2">
            <Title className="text-4xl text-center"> Feane</Title>
            <p className="max-w-lg text-center">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div>
              <ul className="flex items-center gap-2">
                <li className="p-2 rounded-full bg-white text-black hover:text-primary duration-300">
                  <a href="">
                    <FaFacebookF />
                  </a>
                </li>
                <li className="p-2 rounded-full bg-white text-black hover:text-primary duration-300">
                  <a href="">
                    <FaTwitter />
                  </a>
                </li>
                <li className="p-2 rounded-full bg-white text-black hover:text-primary duration-300">
                  <a href="">
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="p-2 rounded-full bg-white text-black hover:text-primary duration-300">
                  <a href="">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-3 p-2">
            <Title className="text-2xl"> Opening Hours</Title>
            <span>Everyday</span>
            <span>10.00 Am -10.00 Pm</span>
          </div>
        </div>
        <div className="text-center mt-12">
          © 2023 All Rights Reserved By SSA
        </div>
      </div>
    </div>
  );
};

export default Footer;
