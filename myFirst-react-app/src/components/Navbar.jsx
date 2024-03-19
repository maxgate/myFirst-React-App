import { useState } from "react";
import { close, logo, menu, search } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className=" w-full justify-between items-center fixed z-10 bg-primary top-0 navbar flex py-2 ">
      <img src={logo} alt="logo" className=" cursor-pointer" />

      <ul className=" list-none sm:flex hidden justify-start items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-semibold  text-gray-500 cursor-pointern text-[13px] px-2 mr-3 `}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className=" sm:flex md:flex hidden ">
        <span className="flex justify-end items-center  bg-[#F2F2F2] rounded-[6px] pl-6  pr-3 mx-12 hover:border-gray-300  hover:border pb-1">
          <img src={search} alt="search" />
          <input
            type="text"
            disabled
            className=" mt-1block w-[150px] h-[30px] px-3 pb-2 pt-2 bg-[#F2F2F2]  border-gray-400  text-sm font-normal shadow-sm placeholder-gray-500 
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-[#F2F2F2] disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Search Postman"
          />
        </span>
        <span className="flex justify-end bg-white  items-center border border-gray-300 rounded-[6px]  hover:border-gray-400 hover:border ">
          <input
            type="text"
            disabled
            className=" block w-[110px] h-[30px] px-3  bg-white border-gray-600 text-sm shadow-sm placeholder-slate-400 font-normal disabled:rounded-[6px]
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-white disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Contact Sales"
          />
        </span>
        <span className=" flex justify-end bg-white mx-4 items-center border border-gray-300 rounded-[6px]  hover:border-gray-400 hover:border ">
          <input
            type="text"
            disabled
            className=" block w-[70px] h-[30px] px-3  bg-white border-gray-600 text-sm shadow-sm placeholder-slate-400 font-normal
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:rounded-[6px]
      disabled:bg-white disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Sign In"
          />
        </span>
        <span className="flex justify-end bg-secondary mx-2 text-white hover:bg-orange-600   items-center border border-gray-300 rounded-[6px]  ">
          <input
            type="text"
            disabled
            className=" block w-[130px] h-[30px] px-3 hover:disabled:bg-orange-600   bg-secondary text-primary text-sm shadow-sm placeholder-primary font-semibold
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-secondary disabled:text-primary disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-primary
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            placeholder="Sign Up for Free"
          />
        </span>
      </div>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[16px] h-[16px] mx-10 object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          }  absolute top-10 w-full left-0 mx-4 my-2   border-t-2 border-primary sidebar`}
        >
          <ul className="list-none flex flex-col bg-primary justify-end items-start flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-bold  text-gray-500 cursor-pointer text-[14px] ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-gray-600`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}

            <div className="flex justify-start items-start  my-4 max-w-[3500px]">
              <input
                type="text"
                disabled
                className=" block w-[200px] h-[30px]  text-center bg-primary text-gray-400 text-sm shadow-sm rounded-[4px] border placeholder-gray-400 font-normal
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-primary disabled:text-primary disabled:border-gray-400 disabled:shadow-none
      invalid:border-pink-500 invalid:text-primary
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Contact Sales"
              />

              <input
                type="text"
                disabled
                className=" block w-[200px] h-[30px]  mx-2 text-center bg-primary text-gray-400 text-sm shadow-sm rounded-[4px] border placeholder-gray-400 font-normal
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-primary disabled:text-primary disabled:border-gray-400 disabled:shadow-none
      invalid:border-pink-500 invalid:text-primary
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Sign In"
              />
              <input
                type="text"
                disabled
                className=" block w-[200px] h-[30px]   hover:disabled:bg-orange-600  text-center bg-secondary text-primary text-sm shadow-sm rounded-[4px] placeholder-primary font-semibold
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-secondary disabled:text-primary disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-primary
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                placeholder="Sign Up for Free"
              />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
