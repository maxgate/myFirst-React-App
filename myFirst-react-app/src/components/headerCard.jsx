import React from "react";

const HeaderCard = ({ content, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-4 py-4 rounded-[8px]  max-w-[490px] h-[200px] md:mr-6 sm:mr-10 mr-0 my-5 border border-gray-300 bg-primary ">
      <img
        src={img}
        alt="card image"
        className=" w-[40px] h-[40px] object-contain"
      />
      <h2 className="font-poppins font-semibold leading-[24px] text-[16px] text-gray-900 ">
        {title}
      </h2>
      <p className="font-poppins font-normal text-[0.75rem] justify-start overflow-clip  ">
        {content}
      </p>
    </div>
  );
};

export default HeaderCard;
