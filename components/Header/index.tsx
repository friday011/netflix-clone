import { FC } from "react";
import Image from "next/image";
import useScrollY from "../../hooks/useScrollY";

import ProfileDropdown from "./ProfileDropdown";

import { FaBell, FaSearch } from "react-icons/fa";

interface IHeader {
  children?: React.ReactNode;
}

const Header: FC<IHeader> = () => {
  const isScrolled = useScrollY();

  return (
    <header
      className={`${
        isScrolled && "bg-[#141414]"
      } fixed top-0 z-50 transition duration-500 w-full px-8 py-2 md:py-5 bg-gradient-to-b from-gray-800/60 to-gray-800/0`}
    >
      <div className="flex items-center justify-between mx-auto max-w-[1340px]">
        <div className="flex space-x-12">
          <Image
            src="/images/logo-main.png"
            alt="Netflix Logo"
            height={30}
            width={100}
          />
          <ul className="flex items-center space-x-6">
            <li className="font-semibold text-white cursor-default header-link hover:text-white">
              Home
            </li>
            <li className="header-link">TV Shows</li>
            <li className="header-link">Movies</li>
            <li className="header-link">New & Popular</li>
            <li className="header-link">My List</li>
            <li className="header-link">Browse by Languages</li>
          </ul>
        </div>
        <div className="flex items-center space-x-6">
          <button>
            <FaSearch className="w-5 h-5 text-white" />
          </button>
          <button>
            <FaBell className="w-5 h-5 text-white" />
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
