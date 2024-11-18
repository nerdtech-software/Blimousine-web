import { SquareArrowOutUpRight } from "lucide-react";
import { cn } from "../utils/cn";

type FeedButtonCard = {
  ButtonTextColors: "text-white" | "text-black";
};

function FleetCards(props: FeedButtonCard) {
  

  return (
    <div>
  <div className="py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-10">
  {/* Card 1 */}
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <div className="w-full sm:w-80 lg:w-96 mx-auto">
      <div className="relative h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden group">
        <img
          src="https://bllimousines.com/wp-content/uploads/2024/10/Luxury-Sedan-8.jpg"
          alt="Car rent"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-white">
            2024 Cadillac XT6
          </h3>
          <h5 className="text-lg sm:text-xl font-medium text-white">From $105.00</h5>
          <p className="text-sm sm:text-base text-white">
            Experience comfort and sophistication with our sleek 2-passenger Luxury Sedan, perfect for business or personal travel.
          </p>
          <a
            href="#"
            className="mt-4 text-[#ff004f] bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg"
          >
            <i className="book">
              <SquareArrowOutUpRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <div className="w-full sm:w-80 lg:w-96 mx-auto">
      <div className="relative h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden group">
        <img
          src="https://bllimousines.com/wp-content/uploads/2024/10/Luxury-Sedan-8.jpg"
          alt="Car rent"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-white">
            2024 Cadillac XT6
          </h3>
          <h5 className="text-lg sm:text-xl font-medium text-white">From $105.00</h5>
          <p className="text-sm sm:text-base text-white">
            Experience comfort and sophistication with our sleek 2-passenger Luxury Sedan, perfect for business or personal travel.
          </p>
          <a
            href="#"
            className="mt-4 text-[#ff004f] bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg"
          >
            <i className="book">
              <SquareArrowOutUpRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <div className="w-full sm:w-80 lg:w-96 mx-auto">
      <div className="relative h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden group">
        <img
          src="https://bllimousines.com/wp-content/uploads/2024/10/Luxury-Sedan-8.jpg"
          alt="Car rent"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-white">
            2024 Cadillac XT6
          </h3>
          <h5 className="text-lg sm:text-xl font-medium text-white">From $105.00</h5>
          <p className="text-sm sm:text-base text-white">
            Experience comfort and sophistication with our sleek 2-passenger Luxury Sedan, perfect for business or personal travel.
          </p>
          <a
            href="#"
            className="mt-4 text-[#ff004f] bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg"
          >
            <i className="book">
              <SquareArrowOutUpRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="py-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-6 md:px-10">
  {/* Card 1 */}
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <div className="w-full sm:w-80 lg:w-96 mx-auto">
      <div className="relative h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden group">
        <img
          src="https://bllimousines.com/wp-content/uploads/2024/10/Luxury-Sedan-8.jpg"
          alt="Car rent"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-white">
            2024 Cadillac XT6
          </h3>
          <h5 className="text-lg sm:text-xl font-medium text-white">From $105.00</h5>
          <p className="text-sm sm:text-base text-white">
            Experience comfort and sophistication with our sleek 2-passenger Luxury Sedan, perfect for business or personal travel.
          </p>
          <a
            href="#"
            className="mt-4 text-[#ff004f] bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg"
          >
            <i className="book">
              <SquareArrowOutUpRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <div className="w-full sm:w-80 lg:w-96 mx-auto">
      <div className="relative h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden group">
        <img
          src="https://bllimousines.com/wp-content/uploads/2024/10/Luxury-Sedan-8.jpg"
          alt="Car rent"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-white">
            2024 Cadillac XT6
          </h3>
          <h5 className="text-lg sm:text-xl font-medium text-white">From $105.00</h5>
          <p className="text-sm sm:text-base text-white">
            Experience comfort and sophistication with our sleek 2-passenger Luxury Sedan, perfect for business or personal travel.
          </p>
          <a
            href="#"
            className="mt-4 text-[#ff004f] bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg"
          >
            <i className="book">
              <SquareArrowOutUpRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="text-center px-4 sm:px-6 lg:px-8">
    <div className="w-full sm:w-80 lg:w-96 mx-auto">
      <div className="relative h-72 sm:h-80 md:h-96 rounded-lg overflow-hidden group">
        <img
          src="https://bllimousines.com/wp-content/uploads/2024/10/Luxury-Sedan-8.jpg"
          alt="Car rent"
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-[#ff004f] via-[#1b0101]/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-700 rounded-lg p-4 sm:p-6 text-center">
          <h3 className="text-xl sm:text-2xl font-medium text-white">
            2024 Cadillac XT6
          </h3>
          <h5 className="text-lg sm:text-xl font-medium text-white">From $105.00</h5>
          <p className="text-sm sm:text-base text-white">
            Experience comfort and sophistication with our sleek 2-passenger Luxury Sedan, perfect for business or personal travel.
          </p>
          <a
            href="#"
            className="mt-4 text-[#ff004f] bg-white w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-lg"
          >
            <i className="book">
              <SquareArrowOutUpRight />
            </i>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>





       
      <div className="flex justify-center items-center">
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
