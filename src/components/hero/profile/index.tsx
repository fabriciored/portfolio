import {
  SiGithub,
  SiLinkedin,
} from "react-icons/si";
import "react-multi-carousel/lib/styles.css";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

export default function Profile() {
  return (
    <div className="flex flex-row gap-5 justify-center">
    <div className="">
      <img
        src="https://avatars.githubusercontent.com/u/61992729?v=4"
        width={120}
        alt="Avatar"
        className="rounded-full shadow-lg"
      />
    </div>
    <div className="flex flex-col justify-between w-52 sm:w-64">
      <div className="flex flex-col">
        <h1 className="text-3xl font-medium font-lato">Fabrício Santos</h1>
        <div className="flex flex-row mt-1 gap-2">
          <Link href="https://github.com/fabriciored" target="_blank">
            <SiGithub className="text-2xl" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/fabriciojlsantos/"
            target="_blank"
          >
            <SiLinkedin className="text-2xl" />
          </Link>
        </div>
      </div>
      <p className="text-xl lg:text-2xl font-lato">
        <Typewriter
          words={["Backend", "Frontend", "Fullstack"]}
          loop={false}
          cursorBlinking={false}
        />{" "}
        Developer
      </p>
    </div>
  </div>
  );
}
