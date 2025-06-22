import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="flex flex-row justify-between items-center h-[90%]">
      {/* social */}
      <div className="hidden xs:flex xs:flex-col xs:px-5 lg:px-8">
        <a href="https://github.com/" className="w-5 py-2">
          <FaGithub color="#f1f5f9" size={22} />
        </a>
        <a href="https://www.instagram.com/" className="w-5 py-2">
          <FaInstagram color="#f1f5f9" size={22} />
        </a>
        <a href="https://twitter.com/" className="w-5 py-2">
          <FaTwitter color="#f1f5f9" size={22} />
        </a>
      </div>
      {/* hero */}
<div className="flex flex-col items-center px-4 sm:px-6 md:px-8">
  <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold text-center text-slate-100 leading-snug max-w-4xl">
    Journey of discovery and learning
  </h1>
  <div className="mt-6">
    <Link
      href="/Start"
      className="border text-slate-100 px-6 py-2 text-lg rounded-full backdrop-blur-sm hover:px-8 hover:py-3 transition-all duration-300"
    >
      Get started
    </Link>
  </div>
</div>
      {/* scroll */}
      <div className="hidden xs:flex flex-col items-center px-5 group lg:px-8">
        <div className="w-[22px] h-[22px] rounded-full bg-slate-100 mb-3 group-hover:animate-bounce"></div>
        <a
          href="#about"
          className="flex justify-center items-center px-1 py-2 border-2 w-5 md:w-6 rounded-full backdrop-blur"
        >
          <Image
            src="/arrow.png"
            alt="scroll"
            width={10}
            height={10}
            className="group-hover:w-full transition-all duration-500 w-1"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
