import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { FaClipboardUser } from "react-icons/fa6";

interface NavButtonProps {
    href: string;
    text: string;
}
export default function NavButton({ href, text }: NavButtonProps) {
  return (
        <Link href={href}>
          <button className="flex justify-center items-center gap-1 py-1 px-3 text-white duration-300 hover:bg-sky-700 h-full w-18 sm:w-36">
            {text === "Home" ? <FaHome/> : text === "Portfolio" ? <MdArticle /> : <FaClipboardUser />}
            <p className="text-lg">
              {text}
            </p>
            </button>
        </Link>
  );
}
