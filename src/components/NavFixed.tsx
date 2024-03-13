import Image from "next/image";
import Link from "next/link";

import logo from "../../public/westcraft-logo-white.png";

function NavFixed() {
  return (
    <div className="fixed z-10 flex justify-between w-screen px-4">
      <Link href="/">
        <Image className="w-32" src={logo} alt="logo" />
      </Link>
      <div className="collapse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-16 text-white pt-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
      </div>
    </div>
  );
}

export default NavFixed;
