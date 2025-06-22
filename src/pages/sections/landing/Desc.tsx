import React from "react";
import Image from "next/image";
import { MdLocationOn } from "react-icons/md";


const Desc = () => {
  return (
    <div className="w-full min-h-[6rem] absolute bottom-0 flex justify-center items-center px-4 box-border text-slate-100 backdrop-blur-sm bg-white/10">
      <div className="flex items-center w-full">
        {/* place */}
        <div className="basis-1/3 flex items-center justify-center px-4 gap-x-3 xl:basis-1/4">
          <MdLocationOn size={28} />
          <h2 className="xs:text-xl sm:text-2xl lg:text-[1.7rem] font-bold">
            Sri Lanka
          </h2>
        </div>
        {/* advertisement */}
        <div className="basis-2/3 flex xl:basis-3/4">
          <div className="flex items-center justify-center text-sm px-2 sm:hidden">
            <h3>khoa</h3>
          </div>
          <div className="hidden sm:flex sm:w-full sm:items-center">
            {[1, 2, 3].map((num) => (
              <div key={num} className="basis-1/3 flex flex-col justify-center px-2 lg:px-6 xl:px-9">
                <h2 className="text-xl lg:text-[1.375rem] font-bold">0{num}</h2>
                <p className="hidden xs:block text-xs lg:text-[0.8125rem] lg:leading-[1.15rem]">
                  Lorem ipsum dolor sit{" "}
                  <span className="hidden lg:inline">
                    amet consectetur adipisicing elit.{" "}
                    <span className="hidden 2xl:inline">
                      Dolor sit amet consectetur.
                    </span>
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
