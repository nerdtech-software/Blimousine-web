import { cn } from "../utils/cn";

type SeeMoreButton = {
  ButtonTextColor: "text-white" | "text-black";
  HeaderColor: "text-white" | "text-black";
};
const Service = (props: SeeMoreButton) => {
  return (
    <div id="services" className="py-8">
      <div className="container mx-auto">
        <div className="text-white z-10 items-center justify-start p-12 text-4xl">
          <h1
            style={{
              margin: "0 0 1rem calc(-0.6rem - 4px)",
              paddingLeft: "2rem",
             
              borderLeft: "5px solid #D91A2F",
            }}
          
            className={cn("text-4xl",props.HeaderColor)}
          >
            My Services{" "}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
            {/* Web Designer Card */}
            <div className="bg-[#022626] p-10 text-sm font-light rounded-lg transition duration-500 transform hover:bg-[#ff004f] hover:-translate-y-2">
              <i className="fa-solid fa-code text-5xl mb-6"></i>
              <h2 className="text-3xl font-medium mb-4">ON-DEMAND</h2>
              <p className="mb-4">
                If you need a last minute limo service in Washington DC and
                surrounding areas give us a call, and we will be happy to
                arrange your transportation services.
              </p>
              <a href="#" className="text-white text-xs mt-5 inline-block">
                Learn more
              </a>
            </div>

            {/* UI/UX Designer Card */}
            <div className="bg-[#022626] p-10 text-sm font-light rounded-lg transition duration-500 transform hover:bg-[#ff004f] hover:-translate-y-2">
              <i className="fa-solid fa-crop-simple text-5xl mb-6"></i>
              <h2 className="text-3xl font-medium mb-4"> EVENTS</h2>
              <p className="mb-4">
                EVENTS For large groups for meetings, weddings, corporate
                events, proms BL Limousine can accommodate 50+ passengers.
              </p>
              <a href="#" className="text-white text-xs mt-5 inline-block">
                Learn more
              </a>
            </div>

            {/* App Designer Card */}
            <div className="bg-[#022626] p-10 text-sm font-light rounded-lg transition duration-500 transform hover:bg-[#ff004f] hover:-translate-y-2">
              <i className="fa-brands fa-app-store-ios text-5xl mb-6"></i>
              <h2 className="text-3xl font-medium mb-4"> PRIVATE AVIATION</h2>
              <p className="mb-4">
                If you need a private car service to and from Atlantic Aviation,
                or Signature Flight Support, Washington National Airport, look
                no further than BL Limousine.
              </p>
              <a href="#" className="text-white text-xs mt-5 inline-block">
                Learn more
              </a>
            </div>
            <div className="bg-[#022626] p-10 text-sm font-light rounded-lg transition duration-500 transform hover:bg-[#ff004f] hover:-translate-y-2">
              <i className="fa-brands fa-app-store-ios text-5xl mb-6"></i>
              <h2 className="text-3xl font-medium mb-4"> PRIVATE AVIATION</h2>
              <p className="mb-4">
                If you need a private car service to and from Atlantic Aviation,
                or Signature Flight Support, Washington National Airport, look
                no further than BL Limousine.
              </p>
              <a href="#" className="text-white text-xs mt-5 inline-block">
                Learn more
              </a>
            </div>
            <div className="bg-[#022626] p-10 text-sm font-light rounded-lg transition duration-500 transform hover:bg-[#ff004f] hover:-translate-y-2">
              <i className="fa-brands fa-app-store-ios text-5xl mb-6"></i>
              <h2 className="text-3xl font-medium mb-4"> PRIVATE AVIATION</h2>
              <p className="mb-4">
                If you need a private car service to and from Atlantic Aviation,
                or Signature Flight Support, Washington National Airport, look
                no further than BL Limousine.
              </p>
              <a href="#" className="text-white text-xs mt-5 inline-block">
                Learn more
              </a>
            </div>
            <div className="bg-[#022626] p-10 text-sm font-light rounded-lg transition duration-500 transform hover:bg-[#ff004f] hover:-translate-y-2">
              <i className="fa-brands fa-app-store-ios text-5xl mb-6"></i>
              <h2 className="text-3xl font-medium mb-4"> PRIVATE AVIATION</h2>
              <p className="mb-4">
                If you need a private car service to and from Atlantic Aviation,
                or Signature Flight Support, Washington National Airport, look
                no further than BL Limousine.
              </p>
              <a href="#" className="text-white text-xs mt-5 inline-block">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <button className={cn("inline py-3 px-10 border border-[#ff004f] text-white rounded-lg transition-colors duration-500 hover:bg-[#ff004f]",props.ButtonTextColor)}>
          Show More
        </button>
      </div>
    </div>
  );
};

export default Service;
