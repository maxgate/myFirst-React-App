import { appleLogo, homepageImage, linuxLogo, microsoftLogo } from "../assets";

const Hero = () => (
  <section id="home" className="flex sm:flex-row flex-col">
    <div className="pt-36">
      <h2
        className={`paragraph font-poppins paddingX  text-[36px] text-bold `}
      >
        <span className="text-[40px] font-semibold font-serif pt-6 leading-10 ">
          Build
        </span>
        <br />
        <span className="text-[23px] font-serif w-[60px] font-bold leading-10 ">
          APIs{" "}
        </span>
        <span className="px-4 text-[25px] font-light  tracking-wider">
          together
        </span>
      </h2>

      <h3 className={`sm:px-14 px-6  text-[18px] font-normal`}>
        Over 30 million developers use Postman. Get <br />
        started by signing up or downloading the desktop app.
      </h3>
      <div className={` flex paddingX mt-6 `}>
        <input
          type="email"
          name="email"
          className=" px-2  py-2 bg-white border shadow-sm border-secondary placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-[300px]  rounded-l-md sm:text-sm focus:ring-1"
          placeholder="you@example.com"
        />
        <button className="bg-secondary text-primary text-sm font-semibold  rounded-r-md  px-3 w-[130px] text-start ">
          Sign Up for Free
        </button>
      </div>

      <div
        className={`paddingX text-sm pt-4 text-gray-500 font-semibold`}
      >
        <h5>Download the desktop app for</h5>
        <span className="flex py-2 ">
          <img
            src={microsoftLogo}
            alt="microsoft logo"
            className="px-2 cursor-pointer"
          />
          <img
            src={appleLogo}
            alt="apple logo "
            className="px-2 cursor-pointer"
          />
          <img
            src={linuxLogo}
            alt="linux logo "
            className="px-2 cursor-pointer"
          />
        </span>
      </div>
    </div>

    <img
      src={homepageImage}
      alt="homepage image"
      className="w-[900px] h-[610px] object-contain z-1 "
    />
  </section>
);

export default Hero;
