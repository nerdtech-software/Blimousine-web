import Fleet from "../components/Fleet";
import Intro from "../components/Intro";
import Marquee from "../components/Marquee";
import Service from "./Service";

const Home = () => {
  return (
    <div className="bg-black">
      <Intro />
      <Fleet bannerTextColor="text-white" ButtonTextColors="text-white" />
      <Service ButtonTextColor="text-white" HeaderColor="text-white"/>
      <Marquee />      
    </div>
  );
};

export default Home;
