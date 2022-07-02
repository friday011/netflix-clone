import { FC } from "react";
import Image from "next/image";

import { Menu } from "@headlessui/react";
import { FaCaretDown } from "react-icons/fa";
import { FiEdit, FiHelpCircle, FiUser } from "react-icons/fi";
import Link from "next/link";

interface MyLinkProps {
  href: string;
  children?: React.ReactNode;
  className: string;
}

interface IProfileDropdown {
  children?: React.ReactNode;
}

const MyLink: FC<MyLinkProps> = ({ children, href, ...rest }) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

const ProfileDropdown: FC<IProfileDropdown> = () => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>
            <div className="flex items-center justify-center space-x-2">
              <div className="relative w-4 h-4 overflow-hidden rounded md:h-6 md:w-6">
                <Image
                  src="/images/user.png"
                  alt="profile dropdown"
                  layout="fill"
                />
              </div>
              <FaCaretDown
                className={`transition duration-200 ${
                  open && "rotate-180"
                } h-4 w-4`}
              />
            </div>
          </Menu.Button>
          <Menu.Items className="absolute w-48 top-0 right-0 mt-12 origin-top-right bg-[#141414] divide-y divide-slate-700 flex flex-col border-[1px] border-gray-800">
            <Menu.Item>
              {({ active }) => (
                <div className={`${active && "underline"} dropdown-link`}>
                  <FiEdit className="w-5 h-5" />
                  <p>Manage Profiles</p>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/account"
                  className={`${active && "underline"} dropdown-link`}
                >
                  <FiUser className="w-5 h-5" />
                  <p>Account</p>
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <MyLink
                  href="/help"
                  className={`${active && "underline"} dropdown-link`}
                >
                  <FiHelpCircle className="w-5 h-5" />
                  <p>Help Center</p>
                </MyLink>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`${
                    active && "underline"
                  } dropdown-link justify-center`}
                  href="/account-settings"
                >
                  <p>Sign out of Netflix</p>
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  );
};

export default ProfileDropdown;
