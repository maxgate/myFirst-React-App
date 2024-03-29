import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const UpdateCard = ({
  img,
  content,
  title,
  workspace,
  author,
  watch,
  views,
}) => {
  return (
    <div
      className=" flex justify-start items-start flex-rows px-4 py-4 rounded-[8px]  max-w-[400px] sm:w-full xs:w-full  md:mr-6 sm:mr-10 mr-0 my-5 border border-gray-200 bg-primary hover:bg-gray-50
      "
    >
      <div className="">
        <img
          src={img}
          alt="card image"
          className=" w-[50px] h-[40px] object-contain "
        />
      </div>
      <div className="px-6 text-gray-600 py-2">
        <h2 className="font-poppins font-semibold leading-[24px] text-[14px] text-gray-900 flex hover:text-blue-700 hover:underline">
          {title}
        </h2>
        <p className="font-poppins font-normal text-[12px] justify-start overflow-clip py-2 ">
          {content}
        </p>
        <span className="flex text-[12px] ">
          <p>
            <FontAwesomeIcon icon="fa fa-th-large" /> {workspace}
          </p>
          <p className="px-6 ">
            By <span className="hover:underline">{author}</span>{" "}
          </p>
        </span>
        <span className="flex text-[12px] ">
          <p className="">
            <FontAwesomeIcon icon="fa fa-eye" /> {watch}
          </p>
          <p className="px-6">{views}</p>
        </span>
      </div>
    </div>
  );
};

export default UpdateCard;
