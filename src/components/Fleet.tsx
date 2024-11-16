import { cn } from "../utils/cn";
import FleetCards from "./FleetCards";

type FleetProps = {
  bannerTextColor: "text-white" | "text-black";
};

const Fleet = (props: FleetProps ) => {
  return (
    <div className="">
      {/* Title and Description */}
      <div
        className={cn(
          "z-10 items-center justify-start p-12 h-auto",
          props.bannerTextColor
        )}
      >
        <h1
          style={{
            margin: "0 0 1rem calc(-0.6rem - 4px)",
            paddingLeft: "2rem",
            borderLeft: "5px solid #D91A2F",
          }}
          className={cn("text-4xl", props.bannerTextColor)}
        >
          Our Fleet
        </h1>
        <p className="p-4 m-4">
          Our diverse fleet of more than 200 late-model vehicles, from luxury
          sedans to motorcoaches, can accommodate all leisure and corporate
          needs, from small groups to large events.
        </p>
      </div>

      {/* Fleet Cards */}

      <FleetCards ButtonTextColors="text-black"/>
    </div>
  );
};

export default Fleet;
