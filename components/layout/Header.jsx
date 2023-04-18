import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container text-white flex justify-between items-center mx-auto h-full">
        <Logo />
        <nav>
          <ul className="flex gap-x-6 uppercase">
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
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary" />
          </a>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary" />
          </button>
          <button className="btn-primary">Order Online</button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
