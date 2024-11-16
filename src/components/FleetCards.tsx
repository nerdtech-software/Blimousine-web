import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { cn } from "../utils/cn";

type FeedButtonCard = {
  ButtonTextColors: "text-white" | "text-black";
};

function FleetCards(props: FeedButtonCard) {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <div>
      <div className="py-8 grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pr-5">
        <div className="container mx-auto text-center px-10 ">
          <div className="w-96">
            {/* Single Card */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://bllimousines.com/wp-content/uploads/2024/10/Luxury-Sedan-8.jpg"
                alt="Car rent"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-medium text-white">
                  2024 Cadillac XT6
                </h3>
                <h5 className="text-xl font-medium text-white">From $105.00</h5>
                <p className="text-white">
                  Experience comfort and sophistication with our sleek
                  2-passenger Luxury Sedan, perfect for business or personal
                  travel.
                </p>
                <a
                  href="#"
                  className="mt-4 text-[#ff004f] bg-white w-14 h-14 rounded-full flex items-center justify-center text-lg"
                >
                  <i className="book">
                    <SquareArrowOutUpRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <div className="">
            {/* Single Card */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://bllimousines.com/wp-content/uploads/2023/12/BWI-Airport-Limo-Service.jpg"
                alt="Car rent"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-medium text-white">Car Rent</h3>
                <p className="text-white">
                  Indulge in ultimate exclusivity with our 2-passenger Elite
                  Sedan, crafted for the discerning traveler seeking
                  unparalleled luxury.
                </p>
                <a
                  href="#"
                  className="mt-4 text-[#ff004f] bg-white w-14 h-14 rounded-full flex items-center justify-center text-lg"
                >
                  <i className="">
                    <SquareArrowOutUpRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <div className="">
            {/* Single Card */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://bllimousines.com/wp-content/uploads/2023/12/IAD-Airport-Limo-Service-2.jpg"
                alt="Car rent"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-medium text-white">Car Rent</h3>
                <p className="text-white">
                  Indulge in ultimate exclusivity with our 2-passenger Elite
                  Sedan, crafted for the discerning traveler seeking
                  unparalleled luxury.
                </p>
                <a
                  href="#"
                  className="mt-4 text-[#ff004f] bg-white w-14 h-14 rounded-full flex items-center justify-center text-lg"
                >
                  <i className="">
                    <SquareArrowOutUpRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center px-10">
          <div className="w-96">
            {/* Single Card */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://bllimousines.com/wp-content/uploads/2024/08/BL-Limousine-3-1536x922.jpg"
                alt="Car rent"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-medium text-white">Car Rent</h3>
                <p className="text-white">
                  Indulge in ultimate exclusivity with our 2-passenger Elite
                  Sedan, crafted for the discerning traveler seeking
                  unparalleled luxury.
                </p>
                <a
                  href="#"
                  className="mt-4 text-[#ff004f] bg-white w-14 h-14 rounded-full flex items-center justify-center text-lg"
                >
                  <i className="">
                    <SquareArrowOutUpRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto text-center">
          <div className="">
            {/* Single Card */}
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://bllimousines.com/wp-content/uploads/2024/10/Mercedes-Benz.webp"
                alt="Car rent"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-medium text-white">Car Rent</h3>
                <p className="text-white">
                  Indulge in ultimate exclusivity with our 2-passenger Elite
                  Sedan, crafted for the discerning traveler seeking
                  unparalleled luxury.
                </p>
                <a
                  href="#"
                  className="mt-4 text-[#ff004f] bg-white w-14 h-14 rounded-full flex items-center justify-center text-lg"
                >
                  <i className="">
                    <SquareArrowOutUpRight />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto text-center">
          <div className="">
            <div className="relative h-96 rounded-lg overflow-hidden group">
              <img
                src="https://bllimousines.com/wp-content/uploads/2024/10/Mercedes-Benz.webp"
                alt="Car rent"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-6 text-center">
                <h3 className="text-2xl font-medium text-white">Car Rent</h3>
                <p className="text-white">
                  Indulge in ultimate exclusivity with our 2-passenger Elite
                  Sedan, crafted for the discerning traveler seeking
                  unparalleled luxury.
                </p>
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="mt-4 text-[#ff004f] bg-white w-14 h-14 rounded-full flex items-center justify-center text-lg"
                >
                  <i className="">
                    <SquareArrowOutUpRight />{" "}
                  </i>
                </button>
              </div>
            </div>
          </div>

          {/* Centered See More Button */}
        </div>
      </div>
      <div className="flex justify-center items-center py-10">
        <button
          className={cn(
            "inline py-3 px-10 border border-[#ff004f]  rounded-lg transition-colors duration-500 hover:bg-[#ff004f]",
           props.ButtonTextColors
          )}
        >
          Show More
        </button>
      </div>
    </div>
  );
}

export default FleetCards;
