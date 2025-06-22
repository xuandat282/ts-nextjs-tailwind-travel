import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import Link from "next/link";
import { FaPlaneDeparture } from "react-icons/fa";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [dark, setDark] = useState(false);
  const navbarVisible = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 80) {
      setVisible(true);
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 80) {
      setDark(true);
      setVisible(false);
    } else {
      setVisible(false);
      setDark(false);
    }
  };

  // console.log(visible);

  useEffect(() => {
    window.addEventListener("scroll", navbarVisible);
    return () => {
      window.removeEventListener("scroll", navbarVisible);
    };
  }, []);

  return (
  <header
    className={`bg-transparent backdrop-blur-sm bg-white/10 fixed top-0 left-0 w-full flex items-center z-50 ${
      visible ? "fixed backdrop-blur-sm" : ""
    } ${dark ? "fixed nav-color backdrop-blur shadow-md" : ""}`}
  >
    <div id='navbar' className='w-screen 2xl:container relative'>
      <div
        className={`flex items-center justify-between relative ${
          dark ? "min-h-[3rem]" : "min-h-[3.25rem] md:min-h-[4.5rem]"
        }`}
      >
        {/* Logo */}
        <div className='flex items-center gap-x-4 order-1 w-[25%] box-border pl-6 lmd:pl-14 lg:pl-24 2xl:pl-16'>
          {/* Logo hình ảnh */}
          <Link href='/'>
            <img
              src='/logo.png'
              alt='Oceanica Logo'
              className='w-10 h-10 object-contain'
            />
          </Link>

          {/* Tên thương hiệu */}
          <Link
            href='/'
            className={`hidden lg:inline text-lg sm:text-xl lg:text-[1.375rem] font-bold tracking-wide ${
              dark ? "text-gray-700" : "text-gray-100"
            }`}
          >
            OCEANICA
          </Link>
        </div>

        {/* navigation */}
        <Nav />

        {/* login & register (đang ẩn) */}
      </div>
    </div>
  </header>
);
}

export default Header;
