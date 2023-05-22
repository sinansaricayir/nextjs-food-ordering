import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import Search from "../ui/Search";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();
  const cart = useSelector((state) => state.cart);

  return (
    <div
      className={`h-[5.5rem] z-50 ${
        router.asPath === "/"
          ? "relative bg-[#131212]"
          : "fixed w-full bg-secondary"
      }`}
    >
      <div className="container text-white flex justify-between items-center mx-auto h-full">
        <Logo />
        <nav
          className={`sm:font-sans font-dancing sm:font-normal font-bold sm:static absolute top-0 left-0 
          sm:flex hidden sm:h-auto h-screen sm:w-auto w-full
           sm:text-white text-black sm:bg-transparent bg-white ${
             isMenuModal !== false && "!grid place-content-center"
           }`}
        >
          <ul className="flex sm:flex-row flex-col gap-6 uppercase text-center">
            <li
              className={`hover:text-primary cursor-pointer ${
                router.asPath === "/" && "text-primary animate-bounce"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/">home</Link>
            </li>
            <li
              className={`hover:text-primary cursor-pointer ${
                router.asPath === "/menu" && "text-primary animate-bounce"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/menu">menu</Link>
            </li>
            <li
              className={`hover:text-primary cursor-pointer ${
                router.asPath === "/about" && "text-primary animate-bounce"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/about">about</Link>
            </li>
            <li
              className={`hover:text-primary cursor-pointer ${
                router.asPath === "/reservation" &&
                "text-primary animate-bounce"
              }`}
              onClick={() => setIsMenuModal(false)}
            >
              <Link href="/reservation">book table</Link>
            </li>
          </ul>
          <AiFillCloseCircle
            className="sm:hidden absolute top-3 right-3 hover:text-primary transition-all"
            size={30}
            onClick={() => setIsMenuModal(false)}
          />
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt
              className={`hover:text-primary transition-all duration-300 cursor-pointer ${
                (router.asPath.includes("profile") ||
                  router.asPath.includes("auth")) &&
                "text-primary animate-bounce"
              }`}
            />
          </Link>
          <Link href="/cart" className="relative">
            <FaShoppingCart
              className={`hover:text-primary transition-all duration-300 cursor-pointer ${
                router.asPath === "/cart" && "text-primary"
              }`}
            />
            <span
              className={`" -top-4 -right-3 text-xs rounded-full px-1 bg-primary text-black" ${
                isMenuModal == false ? "absolute" : "hidden"
              } ${router.asPath === "/cart" && "animate-bounce"}`}
            >
              {cart.products.length ? cart.products.length : 0}
            </span>
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all duration-300 cursor-pointer" />
          </button>
          <a href="#" className="md:inline-block hidden animate-pulse">
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
      {isSearchModal && (
        <Search
          isSearchModal={isSearchModal}
          setIsSearchModal={setIsSearchModal}
        />
      )}
    </div>
  );
};

export default Header;
