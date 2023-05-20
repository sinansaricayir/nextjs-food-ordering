import Title from "../ui/Title";
import { BiCurrentLocation } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);

  return (
    <div className=" bg-secondary text-white py-12">
      <div className="container mx-auto">
        <div className="flex md:flex-row flex-col md:items-start items-center justify-between p-4 md:gap-8 gap-12">
          <div className="flex flex-1 flex-col items-center gap-2 p-2">
            <Title className="text-2xl"> Contact Us</Title>
            <a
              href={footer?.location}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <BiCurrentLocation />
              <span>Location</span>
            </a>
            <a
              href={`tel:${footer?.phoneNumber}`}
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <FiPhoneCall />
              <span>{footer?.phoneNumber}</span>
            </a>
            <a
              href={`mailto:${footer?.email}`}
              className="flex items-center gap-2 hover:text-primary duration-300"
            >
              <AiOutlineMail />
              <span>{footer?.email}</span>
            </a>
          </div>
          <div className="flex flex-2 flex-col items-center gap-6 p-2">
            <Title className="text-4xl text-center"> Feane</Title>
            <p className="max-w-lg text-center">{footer?.desc}</p>
            <div>
              <ul className="flex items-center gap-2">
                {footer?.socialMedia?.map((item) => (
                  <li
                    key={item._id}
                    className="p-1 rounded-full bg-white text-black hover:text-primary hover:scale-110 ease-in duration-300"
                  >
                    <a
                      href={item?.link}
                      className="text-2xl"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className={item?.icon}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center gap-3 p-2">
            <Title className="text-2xl"> Opening Hours</Title>
            <span> {footer?.openingHours?.day}</span>
            <span>{footer?.openingHours?.hour}</span>
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
