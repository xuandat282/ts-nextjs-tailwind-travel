import React, { useState, useEffect } from "react";

type linkProps = {
  title?: string;
  reference: string;
};

const NavHor = ({ title, reference }: linkProps) => {
  const [dark, setDark] = useState(false);
  const navbarDark = () => {
    if (window.scrollY > 10 && window.scrollY < window.innerHeight - 80) {
      setDark(false);
    } else if (window.scrollY >= window.innerHeight - 80) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navbarDark);
    return () => {
      window.removeEventListener("scroll", navbarDark);
    };
  }, []);
  return (
    <li className="group">
      <a
        href={`#${reference}`}
        className={`px-3 mx-2 py-1 xl:mx-3 hover:text-opacity-80 ${
          dark ? "text-blue-600" : "text-blue-600"
        }`}
      >
        {title}
      </a>
    </li>
  );
};

export default NavHor;
