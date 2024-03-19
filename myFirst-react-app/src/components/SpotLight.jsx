import styles from "../style";
import {
  sentry,
  ups,
  sailpoint,
  whatsApp,
  adyen,
  hubspot,
  siemens,
  microsoftLogo,
  microsoftGraph,
  journeys,
  monster,
  docuSign,
  google,
  sportradar,
  buble,
  fatSecret,
} from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SpotLight = () => (
  <section className={` pt[16px] mt-10 font-poppins`}>
    <div className={`${styles.paddingX} `}>
      <div>
        <h3 className="text-[24px] font-bold text-gray-900">
          In the Spotlight
        </h3>
        <p className="text-[11px] text-gray-600 ">
          The best APIs, collections, and workspaces handpicked by Postman.
          <span className="text-blue-600 hover:underline">
            See what more is in the spotlight →
          </span>
        </p>
      </div>
      <div className=" grid lg:grid-cols-2 sm:grid-cols-1 gap-x-6">
        <div className="py-6 font-poppins border-b">
          <h2 className="text-[16px] text-gray-700 font-semibold ">
            Trending APIs this week
          </h2>
          <p className="text-[11px] text-gray-600 ">
            There’s an API for that: discover the APIs, workspaces, and
            collections the Postman community is creating, viewing, and forking.
            <span className="text-blue-600 hover:text-blue-500 hover:underline decoration-blue-500">
              View Complete List →
            </span>
          </p>
        </div>
        <div className="py-6 font-poppins  border-b ">
          <h2 className="text-[16px] text-gray-700 font-semibold ">
            New and Noteworthy
          </h2>
          <p className="text-[11px] text-gray-600 ">
            Discover newly added public workspaces with public APIs from a
            multitude of industries.{" "}
            <span className="text-blue-600 hover:underline ">
              View Complete List →
            </span>
          </p>
        </div>

        <div className=" flex  font-poppins px-4 py-4 hover:bg-gray-50 border-b">
          <div className="px-4">
            <img src={sentry} alt="sentry API" className="w-[40px] h-[35px] " />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              Sentry API Collection
            </h2>
            <p className=" pt-16 text-[12px] text-gray-600 ">
              <span className="px-">Collection</span>
              <span className="px-2 hover:underline"> By Sentry.io</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-code-fork" />6 forks
              </span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />6 watchers
              </span>
              <span>50+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img src={ups} alt="sentry API" className="w-[40px] h-[35px] " />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              UPS APIs
            </h2>
            <p className="text-[11px] pt-4 pb-4 text-gray-800">
              This workspace contains resources that you can demo and share with
              customers and partners.
            </p>
            <p className=" pt- text-[12px] text-gray-600 ">
              <span className="hover:underline ">By UPS Developers</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-code-fork" />6 forks
              </span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                20+ watchers
              </span>
              <span>10k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img
              src={microsoftGraph}
              alt="sentry API"
              className="w-[40px] h-[35px] "
            />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              Microsoft Graph
            </h2>
            <p className="text-[11px] pt-4 pb-4 text-gray-800">
              The official workspace for the Microsoft Graph APIs.
            </p>
            <p className=" pt- text-[12px] text-gray-600 ">
              <span className="">
                <FontAwesomeIcon icon="fa fa-th-large" /> Workspace
              </span>
              <span className="px-2 hover:underline">By Microsoft Graph</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                200+ watchers
              </span>
              <span>400k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img
              src={siemens}
              alt="sentry API"
              className="w-[50px] h-[35px] "
            />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              Siemens Xcelerator Developer Portal
            </h2>
            <p className="text-[11px] pt-4 pb-4 text-gray-800">
              Siemens Xcelerator Developer Portal provides a one stop for
              developer resources. See more at https://developer.siemens.com
            </p>
            <p className=" pt- text-[12px] text-gray-600 ">
              <span className="hover:underline">By Siemens AG</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                10+ watchers
              </span>
              <span>5k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img src={journeys} alt="journey" className="w-[40px] h-[35px] " />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500 ">
              Journeys Track API
            </h2>

            <p className=" pt-12 text-[12px] text-gray-600 ">
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-cart-arrow-down" /> Collection{" "}
              </span>
              <span className="hover:underline">
                By galactic-resonance-157195
              </span>{" "}
              <br />
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-code-fork" /> 1k+ forks
              </span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                10+ watchers
              </span>
              <span>5k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img
              src={monster}
              alt="sentry API"
              className="w-[50px] h-[35px] "
            />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              MonsterAPI
            </h2>
            <p className="text-[11px] pt-4 pb-4 text-gray-800 hover:cursor-pointer">
              Access AI models at scale using Monster API for use cases like:
              Text to image, Image to image, Pix2Pix and Whisper API for speech
              to text
            </p>
            <p className=" pt- text-[12px] text-gray-600 ">
              <span className="hover:underline">By Q Blocks</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                20+ watchers
              </span>
              <span>2k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img
              src={docuSign}
              alt="sentry API"
              className="w-[40px] h-[35px] "
            />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              DocuSign's Public Workspace
            </h2>
            <p className="text-[11px] pt-4 pb-4 text-gray-800 hover:cursor-pointer">
              This is DocuSign's public workspace that inludes Postman
              collections for all of our APIs.
            </p>
            <p className=" pt- text-[12px] text-gray-600 ">
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-th-large" /> Workspace
              </span>
              <span className="hover:underline">By DocuSign</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                40+ watchers
              </span>
              <span>100k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img src={google} alt="sentry API" className="w-[40px] h-[35px] " />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              Google Chrome Enterprise [public]
            </h2>
            <p className="text-[11px] pt-4 pb-4 text-gray-800 hover:cursor-pointer">
              Google Chrome Browser Enterprise for Chrome Browser Cloud
              Management APIs
            </p>
            <p className=" pt-4 text-[12px] text-gray-600 ">
              <span className="hover:underline">
                By Google Chrome Browser Enterprise
              </span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                10+ watchers
              </span>
              <span>1k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img
              src={sportradar}
              alt="sentry API"
              className="w-[35px] h-[35px] "
            />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              Sportradar Media APIs
            </h2>
            <p className="text-[11px] pt-6 pb-4 text-gray-800 hover:cursor-pointer">
              This is a public workspace for the Sportradar Media APIs.
            </p>
            <p className=" pt- text-[12px] text-gray-600 ">
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-th-large" /> Workspace
              </span>
              <span className="hover:underline">By Sportradar Media APIs</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />
                20+ watchers
              </span>
              <span>20k+ views</span>
            </p>
          </div>
        </div>

        <div className=" flex pt- font-poppins px-4 py-4 hover:bg-gray-50 border-b ">
          <div className="px-4">
            <img src={buble} alt="sentry API" className="w-[40px] h-[35px] " />
          </div>
          <div className="">
            <h2 className="text-[14px] text-gray-700 font-semibold hover:text-blue-500 hover:underline decoration-blue-500">
              Bubble
            </h2>
            <p className="text-[11px] pt-4 pb-4 text-gray-800 hover:cursor-pointer">
              How to leverage Bubble's APIs
            </p>
            <p className=" pt-4 text-[12px] text-gray-600 ">
              <span className="hover:underline">By Bubble</span>
              <span className="px-2">
                {" "}
                <FontAwesomeIcon icon="fa fa-eye" />5 watchers
              </span>
              <span>1k+ views</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className={`${styles.paddingY}`}>
      <h2
        className={`${styles.paddingX} font-poppins text-[20px] font-semibold`}
      >
        Popular teams{" "}
        <span className="font-normal text-[14px] text-blue-600 hover:underline">
          {" "}
          View all teams →
        </span>
      </h2>

      <div
        className={`grid lg:grid-cols-4 sm:grid-cols-1  ${styles.paddingX} pt-[16px] `}
      >
        <div className=" mr-6 font-poppins px-4 py-4 hover:bg-gray-100 border ">
          <div className="px-4 ">
            <img src={ups} alt="sentry API" className="w-[40px] h-[35px] " />
          </div>
          <div className="">
            <h2 className="pt-4 text-[14px] text-gray-700 font-semibold hover:text-blue-600 hover:underline decoration-blue-500">
              UPS Developers
            </h2>
            <p className="text-[11px] pt-2  text-gray-800 hover:cursor-pointer">
              UPS public logistics APIs
            </p>
            <p className=" pt-16 text-[12px] text-gray-600 ">
              <span>500k+ views</span>
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-cart-arrow-down" /> 10+ collections
              </span>
            </p>
          </div>
        </div>

        <div className=" mr-6 font-poppins px-4 py-4 hover:bg-gray-100 border ">
          <div className="px-4 ">
            <img
              src={fatSecret}
              alt="sentry API"
              className="w-[35px] h-[35px] "
            />
          </div>
          <div className="">
            <h2 className="pt-6 text-[14px] text-gray-700 font-semibold hover:text-blue-600 hover:underline decoration-blue-500">
              FatSecret
            </h2>

            <p className=" pt-20 text-[12px] text-gray-600 ">
              <span>200k+ views</span>
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-cart-arrow-down" /> 1 collections
              </span>
            </p>
          </div>
        </div>

        <div className="mr-6  font-poppins px-4 py-4 hover:bg-gray-100 border ">
          <div className="px-4 ">
            <img
              src={sailpoint}
              alt="sentry API"
              className="w-[40px] h-[35px] "
            />
          </div>
          <div className="">
            <h2 className="pt-6 text-[14px] text-gray-700 font-semibold hover:text-blue-600 hover:underline decoration-blue-500">
              SailPoint
            </h2>
            <p className="text-[11px] pt-2  text-gray-800 hover:cursor-pointer">
              SailPoint gives a complete view into the identity security of your
              enterprise by optimizing and governing access to all your
            </p>
            <p className=" pt-4 text-[12px] text-gray-600 ">
              <span>2k+ views</span>
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-cart-arrow-down" /> 8 collections
              </span>
            </p>
          </div>
        </div>

        <div className=" mr-6 font-poppins px-4 py-4 hover:bg-gray-100 border ">
          <div className="px-4 ">
            <img src={adyen} alt="sentry API" className="w-[40px] h-[35px] " />
          </div>
          <div className="">
            <h2 className="pt-4 text-[14px] text-gray-700 font-semibold hover:text-blue-600 hover:underline decoration-blue-500">
              Adyen Developers
            </h2>
            <p className="text-[11px] pt-2  text-gray-800 hover:cursor-pointer">
              Tools and resources for developers
            </p>
            <p className=" pt-16 text-[12px] text-gray-600 ">
              <span>5k+ views</span>
              <span className="px-2">
                <FontAwesomeIcon icon="fa fa-cart-arrow-down" /> 10+ collections
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SpotLight;
