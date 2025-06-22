import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <section className="flex flex-col">
      <div className="min-h-[5.2rem]"></div>
      <footer
        id="contact"
        className="w-full h-[48rem] lg:h-[33rem] flex flex-col gap-y-6 md:gap-y-2 bg-[#f4f4f4] pt-8 pb-2"
      >
        {/* upper */}
        <div className="flex flex-wrap gap-x-8 justify-center items-center px-4 lg:px-0 gap-y-6 lg:gap-y-10">
          {/* main */}
          <div className="flex items-center px-4 md:px-0 xl:w-2/5 md:gap-x-10">
            <Image
              src="/travel_mockup.png"
              alt="img"
              width={180}
              height={100}
              className="hover:scale-105 transition-all duration-300"
            />
            <div className="flex flex-col justify-center gap-y-4">
              <div className="flex flex-col gap-y-2 text-slate-700">
                <h4 className="text-lg md:text-xl font-bold">
                  Travel Application
                </h4>
                <p className="text-sm lg:text-base max-w-xs text-justify">
                  Embark on a 2-day, 1-night journey of discovery in Nha Trang, filled with hands-on learning and real-life experiences. From Cham cultural heritage sites to the everyday rhythms of coastal fishing communities, you’ll explore, immerse yourself in nature, and learn how to farm, fish, and recycle. This trip connects knowledge, community, and the natural world. Join us and begin this meaningful adventure!
                </p>
              </div>
            </div>
          </div>
          {/* Link */}
          <div className="flex flex-col xl:w-2/5 gap-y-4 text-slate-700">
            <h4 className="text-lg md:text-xl font-bold">Important Information </h4>
            <div className="flex items-center gap-x-24 text-sm lg:text-base">
              <ul>
                <li>
                  <a href="">Gmail: oceanicase@gmail.com</a>
                </li>
                <li>
                  <a href="">Facebook: Oceanica Ntu</a>
                </li>
                <li>
                  <a href="">Instagram: oceanica_ntu</a>
                </li>
                <li>
                  <a href="">Tiktok: OCEANICA</a>
                </li>
                <li>
                  <a href="">Tel: +84 375375002</a>
                </li>
                <li>
                  <a href="">Tel: +84 907603146</a>
                </li>
                <li>
                  <a href="">Tel: +84 905757444</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* mid */}
        <div className="flex flex-wrap justify-evenly lg:flex-col lg:justify-center items-center gap-y-4">
          <div className="flex items-center gap-x-2">
            <div>
              <FaFacebook size={20} color="#334155" />
            </div>
            <div>
              <FaInstagram size={20} color="#334155" />
            </div>
            <div>
              <FaPinterest size={20} color="#334155" />
            </div>
            <div>
              <FaTwitter size={20} color="#334155" />
            </div>
            <div>
              <FaYoutube size={20} color="#334155" />
            </div>
            <div>
              <FaTiktok size={20} color="#334155" />
            </div>
          </div>
          <div className="flex items-center gap-x-2">
            <Link href="" className="uppercase font-semibold">
              en
            </Link>
            <div className="border-r-[1px] border-slate-500 w-1 h-3/5"></div>
            <Link href="" className="uppercase">
              id
            </Link>
          </div>
        </div>
        {/* lower */}
        <div className="w-full">
          <div className="flex justify-center w-full">
            <div className="w-11/12 border-t-[1px] border-slate-300"></div>
          </div>
          <div className="flex flex-wrap justify-between items-center min-h-[5rem] px-4 lg:px-16">
            <div className="">
              <Link href="" className="text-xs">
                &#169; Inter Travel Systems B.V.2025 - 2026
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-x-2">
              <Link href="" className="text-xs">
                Privacy Policy
              </Link>
              <Link href="" className="text-xs">
                Price Disclaimer
              </Link>
              <Link href="" className="text-xs">
                Responsible Disclosure
              </Link>
              <Link href="" className="text-xs">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
