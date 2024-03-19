import styles from "../style";
import {
  footerLogo,
  twitter,
  twitch,
  youtube,
  linkedin,
  github,
} from "../assets/index";

import {
  footerProducts,
  footerCompany,
  footerAPI,
  footerExplore,
  footerSecurity,
  footerSocial,
} from "../constants";

const Footer = () => (
  <section className={` ${styles.paddingY} ${styles.paddingX} mx-12`}>
    <div className={` grid lg:grid-cols-6  mb-8 `}>
      <div className=" px-20 mt-8 col-span-2 mr-12">
        <img
          src={footerLogo}
          alt="hoobank"
          className="min-w-[100px] min-h-[50px]"
        />
        <p className={`mt-4 px- text-xs text-gray-600`}>© 2024 Postman, Inc.</p>
      </div>

      <div className="  ml-12">
        {footerProducts.map((footerLink) => (
          <div key={footerLink.id} className="  ">
            <h4 className=" font-poppins font-semibold text-[16px] leading-[27px] text-gray-500">
              {footerLink.title}
            </h4>
            <ul className=" list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[12px] leading-[24px] text-gray-600 hover:text-blue-500 cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-00"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div>
        <div className="  ">
          {footerCompany.map((footerLink) => (
            <div key={footerLink.id} className="  ">
              <h4 className=" font-poppins font-semibold text-[16px] leading-[27px] text-gray-500">
                {footerLink.title}
              </h4>
              <ul className=" list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[12px] leading-[24px] text-gray-600 hover:text-blue-500 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-00"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" pt-4 ">
          {footerSecurity.map((footerLink) => (
            <div key={footerLink.id} className="  ">
              <h4 className=" font-poppins font-semibold text-[16px] leading-[27px] text-gray-500">
                {footerLink.title}
              </h4>
              <ul className=" list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[12px] leading-[24px] text-gray-600 hover:text-blue-500 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-00"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="  ">
          {footerAPI.map((footerLink) => (
            <div key={footerLink.id} className="  ">
              <h4 className=" font-poppins font-semibold text-[16px] leading-[27px] text-gray-500">
                {footerLink.title}
              </h4>
              <ul className=" list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[12px] leading-[24px] text-gray-600 hover:text-blue-500 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-00"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className=" pt-4 ">
          {footerExplore.map((footerLink) => (
            <div key={footerLink.id} className="  ">
              <h4 className=" font-poppins font-semibold text-[16px] leading-[27px] text-gray-500">
                {footerLink.title}
              </h4>
              <ul className=" list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[12px] leading-[24px] text-gray-600 hover:text-blue-500 cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-00"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="  ">
        {footerSocial.map((footerLink) => (
          <div key={footerLink.id} className="  ">
            <h4 className=" font-poppins font-semibold text-[16px] leading-[27px] text-gray-500">
              {footerLink.title}
            </h4>
            <ul className=" list-none mt-4">
              {footerLink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[12px] leading-[24px] text-gray-600 hover:text-blue-500 cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-00"
                  }`}
                >
                  <span className="flex gap-2">
                    <img src={link.img} alt="" /> {link.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
