import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container text-white flex justify-between items-center mx-auto h-full">
        <Logo />
        <nav
          className={`sm:font-sans font-dancing sm:font-normal font-bold sm:static absolute top-0 left-0 
          sm:flex hidden sm:h-auto h-full sm:w-auto w-full
           sm:text-white text-black sm:bg-transparent bg-white ${
             isMenuModal !== false && "!grid place-content-center"
           }`}
        >
          <ul className="flex sm:flex-row flex-col gap-6 uppercase text-center">
            <li className="hover:text-primary cursor-pointer">
              <a href="#">home</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <a href="#">menu</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <a href="#">about</a>
            </li>
            <li className="hover:text-primary cursor-pointer">
              <a href="#">book table</a>
            </li>
          </ul>
          <AiFillCloseCircle
            className="sm:hidden absolute top-3 right-3 hover:text-primary transition-all"
            size={30}
            onClick={() => setIsMenuModal(false)}
          />
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary transition-all" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden">
            <button className="btn-primary">Order Online</button>
          </a>
          <button
            className="sm:hidden inline-block text-xl hover:text-primary transition-all"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
