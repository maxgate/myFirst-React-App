import React from "react";
import { homepageheaderImg } from "../assets/index.js";
import styles from "../style.js";
import { headerFeatures } from "../constants/index.js";
import HeaderCard from "./headerCard.jsx";

const Header = () => (
  <section className="bg-gray-100 py-24">
    <div className="  ">
      <img
        src={homepageheaderImg}
        alt="homepage header img"
        className=" absolute z-1 right-10 bottom-[20px]   w-[320px] h-[200px] "
      />

      <h2
        className={`text-[24px] font-semibold ${styles.paddingX} font-poppins`}
      >
        What is Postman?
      </h2>
      <h4 className={`${styles.paddingX} text-gray-600`}>
        Postman is an API platform for building and using APIs. Postman
        simplifies each step of <br />
        the API lifecycle and streamlines collaboration so you can create better
        APIs—faster.
      </h4>
      <div
        className={`grid lg:grid-cols-4 sm:grid-cols-2  ${styles.paddingX}sm:justify-start my-4 justify-center sm:w-full xs:grid-cols-2 `}
      >
        {headerFeatures.map((card) => (
          <HeaderCard key={card.id} {...card} />
        ))}
      </div>
      <span className=" flex justify-center py-4">
        <button className=" text-xs border border-gray-400 px-4 py-2 mx-16 items-center rounded-md">
          Learn more
        </button>
      </span>
    </div>
  </section>
);

export default Header;
