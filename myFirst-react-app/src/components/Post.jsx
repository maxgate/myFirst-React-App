import styles from "../style";
import { postcon24, postShield, postAnnual } from "../assets/index";

const Post = () => (
  <section className="bg-[#1B1340] w-full h-[320px] overflow-hidden">
    <div className={`grid lg:grid-cols-2 sm:grid-cols-1 ${styles.paddingX} ${styles.paddingY}`}>
      <div className="">
        <div className="py-4">
          <img src={postcon24} alt="postcon24" className="w-[415px] h-[39px]" />
        </div>
        <span className="py-8">
          <img src={postAnnual} alt="postman annual" className="" />
        </span>
        <p className="text-[#FFFFFF] font-[14px] py-4">
          Gain new skills through hands-on workshops, hear from industry
          leaders, and join conversations about innovation, APIs, and the future
          of software.
        </p>
        <button className="text-[#FFFFFF] text-sm border border-[#FF6C37] hover:border-[#FFFFFF] px-2 py-1 rounded-[5px]">
          Learn more
        </button>
      </div>
      <div className=" ml-24">
        <img src={postShield} alt="postShield" className="w-[500px] " />
      </div>
    </div>
  </section>
);

export default Post;
