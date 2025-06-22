import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdOutlineTravelExplore } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { IoMdPhotos } from "react-icons/io";

const Second = () => {
  return (
    <section
      id="information"
      data-testid="information"
      className="flex flex-col justify-end 2xl:container"
    >
      <div className="min-h-[7rem]"></div>
      <div className="flex flex-col cont-height justify-center gap-y-20 sm:gap-y-28 lmd:px-10 2xl:px-4 box-border">
        <div className="flex flex-wrap justify-center gap-y-6 gap-x-6 ">
          <div className="flex flex-col gap-y-10 lmd:w-[45%] px-6 box-border">
            <div className="flex flex-col gap-y-6">
              <h2 className="text-3xl font-bold text-gray-700 md:text-4xl lg:text-5xl lmd:max-w-lg">
                SEA&ICE tour: Journey of discovery and learning<br />
                Last for 2 days 1 night
              </h2>
              <div className="text-gray-700 text-base lg:text-lg space-y-2 leading-relaxed">
                <p className="font-bold">SEA & ICE Tour Itinerary</p>

                <p className="font-semibold">DAY 1: A Journey into Knowledge – Living the Fisherman&apos;s Way</p>

                <div className="flex"><span className="min-w-[160px] font-semibold">08:00 – 08:15:</span><span className="ml-1">Pick-up at Novotel Hotel</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">08:15 – 08:30:</span><span className="ml-1">Transfer to Ponagar Cham Towers</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">08:30 – 10:00:</span><span className="ml-1">Visit Ponagar Towers (sightseeing and enjoy a traditional Cham dance performance)</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">10:00 – 10:15:</span><span className="ml-1">Transfer to the Institute of Oceanography</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">10:15 – 11:30:</span><span className="ml-1">Team games & free exploration at Oceanography Institute</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">11:30 – 13:00:</span><span className="ml-1">Lunch break</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">13:00 – 13:30:</span><span className="ml-1">Depart to Tri Nguyen Island</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">13:30 – 14:30:</span><span className="ml-1">Tour island & enjoy local food</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">14:30 – 15:00:</span><span className="ml-1">Transfer to floating fish farms</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">15:00 – 17:00:</span><span className="ml-1">Learn to raise & catch seafood like a fisherman</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">17:00 – 19:00:</span><span className="ml-1">Cooking class with your catch on the farm</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">19:00 – 21:00:</span><span className="ml-1">Homestay transfer, hygiene & rest</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">21:00 – 22:30:</span><span className="ml-1">Night squid fishing & storytelling</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">22:30:</span><span className="ml-1">End of Day 1 & overnight on the floating farm</span></div>

                <p className="font-semibold mt-4">DAY 2: Awakening New Vitality</p>

                <div className="flex"><span className="min-w-[160px] font-semibold">06:00 – 07:00:</span><span className="ml-1">Local breakfast</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">07:00 – 09:00:</span><span className="ml-1">Shell recycling activity</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">09:00 – 09:30:</span><span className="ml-1">Return to mainland</span></div>
                <div className="flex"><span className="min-w-[160px] font-semibold">09:30:</span><span className="ml-1">Drop-off and end of tour</span></div>
              </div>
              <div className="px-6 lmd:px-10 2xl:px-4 box-border mt-6">
                <div className="bg-gray-700 text-white px-6 py-4 rounded-md shadow-md text-center">
                  <p className="text-lg font-bold">PRICE:</p>
                  <p className="text-lg font-bold">SEA&ICE Tour:</p>
                  <p>1 584 000 VND ~ $63 USD/person</p>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4">
            </div>
            <div className="bg-gray-200 p-4">
              <p>
                Interested in OCEANICA to be your travel companion on your special moment? Get in touch with our team at{" "}
                <a href="" className="text-emerald-800 underline">
                  oceanicase@travel.com
                </a>
              </p>
            </div>
          </div>
          {/* image */}
          <div className="w-full lmd:w-[45%] px-6 box-border">
            <div className="bg-[url('/infor.jpg')] h-[20rem] w-full bg-cover bg-center shadow-2xl lmd:h-3/4 lg:h-[90%] relative">
              <div className="absolute -bottom-4 -right-4 shadow-2xl border-8 border-gray-200">
                <Image src="/pg2-4.jpg" alt="" width={200} height={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start lmd:px-10 xl:px-16 box-border">
          <div className="md:w-[80%] flex flex-col sm:flex-row gap-y-6 justify-between px-6 box-border">
            <div className="flex items-start gap-x-3">
              <MdOutlineTravelExplore size={30} />
              <div>
                <h3 className="text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl">
                  120
                </h3>
                <p>travellers/month</p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <SlPeople size={30} />
              <div>
                <h3 className="text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl">
                  3k
                </h3>
                <p>honest reviews</p>
              </div>
            </div>
            <div className="flex items-start gap-x-3">
              <IoMdPhotos size={30} />
              <div>
                <h3 className="text-3xl sm:text-[2rem] leading-8 font-bold text-gray-700 lmd:text-4xl">
                  10.6k
                </h3>
                <p>photos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Second;
