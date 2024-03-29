import { getstartedImg } from "../assets/index";

const GetStarted = () => (
  <section className="bg-gray-100">
    <div className={`paddingX py-12`}>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        <div>
          <h2 className=" font-poppins font-semibold text-[20px]">
            Get started with Postman
          </h2>

          <div className={`flex  mt-6`}>
            <input
              type="email"
              name="email"
              className=" px-2  py-2 bg-white border shadow-sm border-secondary placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[300px] h-[40px]  rounded-l-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
            <button className="bg-secondary text-primary text-sm font-semibold  rounded-r-md  px-3 w-[130px] h-[40px] text-start ">
              Sign Up for Free
            </button>
          </div>
        </div>

        <div className={` `}>
          <img
            src={getstartedImg}
            alt="get Started"
            className="w-[500px] h-[150px] "
          />
        </div>
      </div>
    </div>
  </section>
);

export default GetStarted;
