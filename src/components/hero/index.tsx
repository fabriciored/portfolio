import "react-multi-carousel/lib/styles.css";
import Slider from "./slider";
import Profile from "./profile";

export default function Hero() {
  return (
    <div className="flex p-2 flex-col">
      <Profile />
      <Slider />
    </div>
  );
}
