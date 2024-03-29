import UpdateCard from "./UpdateCard";
import { updateCard } from "../constants";

const Update = () => (
  <section>
    <div>
      <h2 className={`text-[26px] font-semibold paddingX pt-20 font-poppins`}>
        What's happening on Postman
      </h2>
      <h4 className={`paddingX font-semibold text-gray-700`}>
        Browse the largest network of APIs and share what you build with
        developers across the planet.
        <span className="text-blue-800 hover:underline ">
          Explore the Public API Network →
        </span>
      </h4>
      <div
        className={`pl-6 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:w-full xs:grid-cols-1 xs:w-full pb-16 `}
      >
        {updateCard.map((card) => (
          <UpdateCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);
export default Update;
