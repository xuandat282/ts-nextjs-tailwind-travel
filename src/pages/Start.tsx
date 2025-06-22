import { useForm } from "react-hook-form";
import { useState } from "react";
import { HiMapPin } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import Darkheader from "../components/Darkheader";

export default function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      location: "",
      persons: 1,
    },
  });

  const [show, setShow] = useState(false);
  const [numPersons, setNumPersons] = useState(1);
  const pricePerPerson = 63;
  const totalPrice = numPersons * pricePerPerson;

  return (
    <>
      <main className="min-h-screen p-20 flex justify-center items-center">
        <Darkheader />

        {show ? (
          <div className="flex justify-center items-center p-14 h-[30rem] text-slate-700 shadow-lg">
            <div className="flex flex-col h-full justify-between">
              <div>
                <h1 className="text-2xl font-semibold my-2">
                  Thank you for choosing us to be your travel companion
                </h1>
                <p>We will notify you regarding your schedule as soon as possible</p>
                <p>Hope you enjoy your experience with us</p>
              </div>
              <div>
                <p className="">With regard,</p>
                <div className="flex items-center gap-x-2">
                  <h3 className="text-xl font-bold">Travel</h3>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center mx-auto mb-4 lg:p-20 shadow-lg">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(data);
                setShow(true);
                reset();
              })}
              className="flex flex-col gap-y-1 min-w-[500px]"
            >
              <h1 className="text-4xl font-bold">Where from go</h1>
              <p className="text-slate-600 my-2">
                Please let us know your basic needs and preferences regarding our tour!
              </p>
              {/* Email input */}
              <div className="flex items-center gap-x-4 border rounded-lg shadow mt-2">
                <div className="flex items-center gap-2 px-6">
                  <p>Email</p>
                </div>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="example@email.com"
                  className="px-4 py-2 grow bg-slate-50 rounded-lg border-l focus:outline-none focus:ring-2 focus:ring-emerald-900"
                />
              </div>
              <p className="text-sm ml-40 text-red-600">{errors.email?.message}</p>
              {/* Location */}
              <div className="flex items-center gap-x-4 border rounded-lg shadow">
                <div className="flex items-center gap-2 px-6">
                  <HiMapPin />
                  <p>Country</p>
                </div>
                <input
                  type="search"
                  {...register("location", { required: "Pick a destination" })}
                  className="px-4 py-2 grow bg-slate-50 rounded-lg border-l focus:outline-none focus:ring-2 focus:ring-emerald-900"
                />
              </div>
              <p className="text-sm ml-40 text-red-600">{errors.location?.message}</p>

              {/* Transport + Classes */}
              <div>
                <label htmlFor="Transport">
                  <select {...register("transport", { required: true })} className="w-1/2 px-4 py-2 rounded-lg shadow">
                    <option value="Plane">Plane</option>
                    <option value="Train">Train</option>
                    <option value="Ship">Ship</option>
                  </select>
                </label>
                <label htmlFor="Classes">
                  <select {...register("classes")} className="w-1/2 px-4 py-2 rounded-lg shadow">
                    <option value="Economy">Economy</option>
                    <option value="Bussiness">Bussiness</option>
                    <option value="Executive">Executive</option>
                  </select>
                </label>
              </div>

              {/* Date */}
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                {...register("date", { required: "Pick a date" })}
                className="px-4 py-2 rounded-lg shadow focus:outline-none focus:ring-1 focus:ring-emerald-900"
              />
              <p className="text-sm px-4 text-red-600">{errors.date?.message}</p>

              {/* Persons + Dynamic Price */}
              <label htmlFor="persons" className="flex flex-col gap-2">
                <div className="flex items-center gap-x-2">
                  <input
                    type="number"
                    min={1}
                    max={15}
                    {...register("persons", {
                      min: { value: 1, message: "At least 1 person" },
                      max: { value: 15, message: "Maximum 15 persons" },
                      valueAsNumber: true,
                      onChange: (e) => {
                        const val = parseInt(e.target.value, 10);
                        setNumPersons(isNaN(val) ? 1 : Math.min(val, 15));
                      },
                    })}
                    value={numPersons}
                    placeholder="persons"
                    className="px-4 py-2 rounded-lg shadow grow focus:outline-none focus:ring-1 focus:ring-emerald-900"
                  />
                  <div className="flex items-center gap-x-2 px-4">
                    <MdPerson />
                    <p>person/s</p>
                  </div>
                </div>
                <p className="text-sm text-emerald-800 font-semibold">
                  Total Price: <span className="font-bold">${totalPrice.toLocaleString()} USD</span>
                </p>
              </label>
              <p className="text-sm px-4 text-red-600">{errors.persons?.message}</p>

              <input
                type="submit"
                value="Search"
                className="px-4 py-2 rounded-lg shadow my-4 bg-emerald-900 text-slate-100 font-semibold cursor-pointer"
              />
            </form>
          </div>
        )}
      </main>
    </>
  );
}
