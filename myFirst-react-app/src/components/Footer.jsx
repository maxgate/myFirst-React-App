import { footerLogo } from "../assets/index";

import { footerLinks } from "../constants";

const Footer = () => (
  <section className={` paddingY paddingX  mx-12`}>
    <div className={` grid lg:grid-cols-6 sm:flex-cols mb-8 `}>
      <div className=" px-20 mt-8 col-span-2 mr-12">
        <img
          src={footerLogo}
          alt="hoobank"
          className="min-w-[100px] min-h-20   "
        />
        <p className={`mt-4 px- text-xs text-gray-600`}>© 2024 Postman, Inc.</p>
      </div>

      <div className="flex flex-row gap-12 px-16">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.id}
            className="  flex-col justify-center items-center  "
          >
            <h4 className=" font-poppins font-semibold text-[16px] leading-[27px] text-gray-500 items-center justify-center">
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
  </section>
);

export default Footer;
