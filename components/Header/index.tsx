import { FC } from "react";
import Image from "next/image";
import useScrollY from "../../hooks/useScrollY";

import ProfileDropdown from "./ProfileDropdown";

import { FaBell, FaSearch } from "react-icons/fa";
import MobileMenuDropdown from "./MobileMenuDropdown";

interface IHeader {
  children?: React.ReactNode;
}

const Header: FC<IHeader> = () => {
  const isScrolled = useScrollY();

  return (
    <header
      className={`${
        isScrolled && "bg-[#141414]"
      } fixed top-0 z-50 transition duration-500 w-full px-4 sm:px-8 lg:px-12 py-2 md:py-5 bg-gradient-to-t from-gray-800/0 to-gray-800/75`}
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-shrink-0 space-x-6 md:space-x-8 lg:space-x-12">
          <Image
            src="/images/logo-main.png"
            alt="Netflix Logo"
            height={30}
            width={100}
            className="flex-shrink-0"
          />
          <ul className="items-center hidden space-x-4 lg:space-x-6 md:flex">
            <li className="font-semibold text-white cursor-default header-link hover:text-white">
              Home
            </li>
            <li className="header-link">TV Shows</li>
            <li className="header-link">Movies</li>
            <li className="header-link">New & Popular</li>
            <li className="header-link">My List</li>
            <li className="header-link">Browse by Languages</li>
          </ul>
          <div className="relative flex items-center justify-center">
            <MobileMenuDropdown />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <button className="hidden sm:block">
            <FaSearch className="w-5 h-5 text-white" />
          </button>
          <button className="hidden sm:block">
            <FaBell className="w-4 h-4 text-white md:h-5 md:w-5" />
          </button>
          <div className="relative flex items-center justify-center">
            <ProfileDropdown />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
