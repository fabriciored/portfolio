import { FaNodeJs } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import {
  SiNestjs,
  SiPrisma,
  SiDocker,
  SiGithub,
  SiLinkedin,
  SiGit,
  SiReact,
  SiNextdotjs,
} from "react-icons/si";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};

const customAnimation = {
  // Define your custom animation styles here
  transform: "translateX(-50%)",
  transition: "transform .5s ease-in-out", 
};

export default function Slider() {

    return (
      <div className="grid w-96 p-2">
        <Carousel
          responsive={responsive}
          customTransition="transform .5s ease-in-out"          transitionDuration={500}
          autoPlay={true}
          autoPlaySpeed={1300}
          centerMode={true}
          swipeable={true}
          draggable={true}
          showDots={false}
          infinite={true}
          partialVisible={false}
          arrows={false}
        >
          <BiLogoTypescript className="text-4xl shadow-lg" style={customAnimation} />
          <FaNodeJs className="text-4xl shadow-lg" style={customAnimation} />
          <SiNestjs className="text-4xl shadow-lg" style={customAnimation} />
          <SiPrisma className="text-4xl shadow-lg" style={customAnimation} />
          <SiDocker className="text-4xl shadow-lg" style={customAnimation} />
          <SiGit className="text-4xl shadow-lg" style={customAnimation} />
          <SiReact className="text-4xl shadow-lg" style={customAnimation} />
          <SiNextdotjs className="text-4xl shadow-lg" style={customAnimation} />
        </Carousel>
      </div>
  );
}
