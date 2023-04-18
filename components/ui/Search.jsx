import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import { AiFillCloseCircle } from "react-icons/ai";

const Search = ({ setIsSearchModal }) => {
  return (
    <div className="fixed top-0 w-screen h-screen drop-shadow-2xl my-10">
      <div className="relative top-[10%] left-[20%] w-1/2 h-auto bg-white border border-[#222831] rounded-2xl">
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
          <Title className="text-[40px] text-black text-center mt-12 mb-6">
            Search
          </Title>
          <div className="mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full rounded-lg h-12 pl-2 mb-4 border-2 border-primary"
            />
            <div>
              <ul className="mt-4">
                <li className="flex items-center justify-between p-2 hover:bg-primary mb-4 rounded-lg">
                  <div>
                    <Image
                      src="/images/f1.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary mb-4 rounded-lg">
                  <div>
                    <Image
                      src="/images/f1.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
                <li className="flex items-center justify-between p-2 hover:bg-primary mb-4 rounded-lg">
                  <div>
                    <Image
                      src="/images/f1.png"
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <span className="font-bold">Good Pizza</span>
                  <span className="font-bold">$10</span>
                </li>
              </ul>
            </div>
          </div>
          <button onClick={() => setIsSearchModal(false)}>
            <AiFillCloseCircle className="text-3xl absolute top-1 right-1 hover:text-red-600 transition-all" />
          </button>
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default Search;
