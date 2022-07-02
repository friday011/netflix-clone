import { FC } from "react";
import Link from "next/link";

import { Menu } from "@headlessui/react";

import { FaCaretDown } from "react-icons/fa";

interface IMobileMenuDropdown {
  children?: React.ReactNode;
}

interface MyLinkProps {
  href: string;
  children?: React.ReactNode;
  className: string;
}

const MyLink: FC<MyLinkProps> = ({ children, href, ...rest }) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const MobileMenuDropdown: FC<IMobileMenuDropdown> = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button className="flex items-center gap-1 md:hidden">
            <p className="text-sm font-medium">Browse</p>
            <FaCaretDown
              className={`transition duration-200 ${
                open && "rotate-180"
              } h-4 w-4`}
            />
          </Menu.Button>
          <Menu.Items className="absolute w-48 top-0 mt-8 border-t-2 border-white origin-top-right bg-[#141414] opacity-90 flex flex-col">
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-menu`}>
                  <p>Home</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/account"
                  className={`${active && "underline"} dropdown-menu`}
                >
                  <p>Account</p>
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/help"
                  className={`${active && "underline"} dropdown-menu`}
                >
                  <p>TV Shows</p>
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "underline"} dropdown-menu`}
                  href="/account-settings"
                >
                  <p>Movies</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "underline"} dropdown-menu`}
                  href="/account-settings"
                >
                  <p>New & Noteworthy</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "underline"} dropdown-menu`}
                  href="/account-settings"
                >
                  <p>My List</p>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${active && "underline"} dropdown-menu`}
                  href="/account-settings"
                >
                  <p>Browse by Languages</p>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default MobileMenuDropdown;
