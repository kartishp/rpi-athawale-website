import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full absolute top-0 z-50 flex justify-between items-start py-5 md:px-20 h-32">
      <div className="w-[12%]">
        <Image
          src={"/logo.png"}
          width={258}
          height={155}
          layout="responsive"
          alt="Logo"
        />
      </div>
      <nav className="w-[88%] py-2 md:flex items-center justify-end space-x-10 hidden">
        <Link href="/">
          <a className="text-primary font-semibold hover:scale-110 transition-all ease-in-out">
            Home
          </a>
        </Link>
        <Link href="/about-us">
          <a className="text-primary font-semibold hover:scale-110 transition-all ease-in-out">
            About Us
          </a>
        </Link>
        <Link href="/party-constitution">
          <a className="text-primary font-semibold hover:scale-110 transition-all ease-in-out">
            Party Constitution
          </a>
        </Link>
        <Link href="/about-national-president">
          <a className="text-primary font-semibold hover:scale-110 transition-all ease-in-out">
            About National President
          </a>
        </Link>
        <Link href="/membership">
          <a className="text-primary font-semibold hover:scale-110 transition-all ease-in-out">
            Membership
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
